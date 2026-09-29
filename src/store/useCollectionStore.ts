import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardInCollection, PackOpeningHistory, PokemonCard } from '../types/pokemon';
import { soundManager } from '../utils/audio';
import { saveToIndexedDB } from '../services/storage';

interface CollectionState {
  collection: Record<string, CardInCollection>;
  openingHistory: PackOpeningHistory[];
  totalPacksOpened: number;
  pokeCoins: number;
  availablePacks: Record<string, number>;
  soundEnabled: boolean;
  cardTrickEnabled: boolean;
  fastOpenEnabled: boolean;

  // Actions
  addCardsToCollection: (cards: PokemonCard[], setId: string, setName: string, isGodPack?: boolean) => void;
  toggleFavorite: (cardId: string) => void;
  claimDailyReward: () => void;
  consumeBoosterPack: (setId: string) => boolean;
  addBoosterPacks: (setId: string, count: number) => void;
  toggleSound: () => void;
  toggleCardTrick: () => void;
  toggleFastOpen: () => void;
  resetCollection: () => void;
  loadStateFromBackup: (newState: Record<string, unknown>) => void;
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      collection: {},
      openingHistory: [],
      totalPacksOpened: 0,
      pokeCoins: 500,
      availablePacks: {
        'sv3pt5': 5, // 5 boosters 151 au démarrage
        'sv03': 3,
      },
      soundEnabled: true,
      cardTrickEnabled: true, // Rituel de suspense activé par défaut
      fastOpenEnabled: false,

      toggleSound: () => {
        const next = !get().soundEnabled;
        soundManager.setMuted(!next);
        set({ soundEnabled: next });
      },

      toggleCardTrick: () => {
        set((state) => ({ cardTrickEnabled: !state.cardTrickEnabled }));
      },

      toggleFastOpen: () => {
        set((state) => ({ fastOpenEnabled: !state.fastOpenEnabled }));
      },

      addCardsToCollection: (cards, setId, setName, isGodPack = false) => {
        const now = Date.now();
        const currentCollection = { ...get().collection };

        const rarityWeights: Record<string, number> = {
          'Common': 1,
          'Uncommon': 2,
          'Rare': 3,
          'Rare Holo': 4,
          'Double Rare': 5,
          'Illustration Rare': 6,
          'Special Illustration Rare': 7,
          'Hyper Rare': 8,
        };

        let bestCard = cards[0];
        let maxWeight = 0;

        cards.forEach((card) => {
          const weight = rarityWeights[card.rarity] || 0;
          if (weight > maxWeight) {
            maxWeight = weight;
            bestCard = card;
          }

          if (currentCollection[card.id]) {
            currentCollection[card.id] = {
              ...currentCollection[card.id],
              count: currentCollection[card.id].count + 1,
            };
          } else {
            currentCollection[card.id] = {
              cardId: card.id,
              count: 1,
              firstObtainedAt: now,
              isFavorite: false,
            };
          }
        });

        const newHistoryItem: PackOpeningHistory = {
          id: `pack-${now}-${Math.random().toString(36).substring(2, 7)}`,
          setId,
          setName,
          openedAt: now,
          cards,
          bestRarity: bestCard.rarity,
          isGodPack,
        };

        const nextState = {
          collection: currentCollection,
          openingHistory: [newHistoryItem, ...get().openingHistory.slice(0, 49)],
          totalPacksOpened: get().totalPacksOpened + 1,
          pokeCoins: get().pokeCoins + 50,
        };

        set(nextState);

        // Sauvegarde asynchrone dans IndexedDB
        saveToIndexedDB('poketcg_collection', nextState);
      },

      toggleFavorite: (cardId: string) => {
        set((state) => {
          const item = state.collection[cardId];
          if (!item) return state;
          const updatedCollection = {
            ...state.collection,
            [cardId]: {
              ...item,
              isFavorite: !item.isFavorite,
            },
          };
          saveToIndexedDB('poketcg_collection', { collection: updatedCollection });
          return { collection: updatedCollection };
        });
      },

      claimDailyReward: () => {
        set((state) => ({
          pokeCoins: state.pokeCoins + 200,
          availablePacks: {
            ...state.availablePacks,
            'sv3pt5': (state.availablePacks['sv3pt5'] || 0) + 2,
          },
        }));
      },

      consumeBoosterPack: (setId: string) => {
        const count = get().availablePacks[setId] || 0;
        if (count <= 0) return false;

        set((state) => ({
          availablePacks: {
            ...state.availablePacks,
            [setId]: count - 1,
          },
        }));
        return true;
      },

      addBoosterPacks: (setId: string, count: number) => {
        set((state) => ({
          availablePacks: {
            ...state.availablePacks,
            [setId]: (state.availablePacks[setId] || 0) + count,
          },
        }));
      },

      loadStateFromBackup: (newState) => {
        set((state) => ({
          ...state,
          collection: (newState.collection as Record<string, CardInCollection>) || state.collection,
          openingHistory: (newState.openingHistory as PackOpeningHistory[]) || state.openingHistory,
          totalPacksOpened: typeof newState.totalPacksOpened === 'number' ? newState.totalPacksOpened : state.totalPacksOpened,
          pokeCoins: typeof newState.pokeCoins === 'number' ? newState.pokeCoins : state.pokeCoins,
          availablePacks: (newState.availablePacks as Record<string, number>) || state.availablePacks,
        }));
      },

      resetCollection: () => {
        set({
          collection: {},
          openingHistory: [],
          totalPacksOpened: 0,
          pokeCoins: 500,
          availablePacks: {
            'sv3pt5': 5,
            'sv03': 3,
          },
        });
      },
    }),
    {
      name: 'poketcg-collection-storage',
    }
  )
);
