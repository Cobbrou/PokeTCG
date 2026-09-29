import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardInCollection, PackOpeningHistory, PokemonCard } from '../types/pokemon';
import { soundManager } from '../utils/audio';

interface CollectionState {
  collection: Record<string, CardInCollection>;
  openingHistory: PackOpeningHistory[];
  totalPacksOpened: number;
  pokeCoins: number;
  availablePacks: Record<string, number>;
  soundEnabled: boolean;

  // Actions
  addCardsToCollection: (cards: PokemonCard[], setId: string, setName: string, isGodPack?: boolean) => void;
  toggleFavorite: (cardId: string) => void;
  claimDailyReward: () => void;
  consumeBoosterPack: (setId: string) => boolean;
  addBoosterPacks: (setId: string, count: number) => void;
  toggleSound: () => void;
  resetCollection: () => void;
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      collection: {},
      openingHistory: [],
      totalPacksOpened: 0,
      pokeCoins: 500, // Pièces de départ
      availablePacks: {
        'sv3pt5': 5, // 5 boosters 151 offerts au démarrage !
        'sv03': 3,
      },
      soundEnabled: true,

      toggleSound: () => {
        const next = !get().soundEnabled;
        soundManager.setMuted(!next);
        set({ soundEnabled: next });
      },

      addCardsToCollection: (cards, setId, setName, isGodPack = false) => {
        const now = Date.now();
        const currentCollection = { ...get().collection };

        // Déterminer la meilleure rareté du tirage
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

        set((state) => ({
          collection: currentCollection,
          openingHistory: [newHistoryItem, ...state.openingHistory.slice(0, 49)], // garder les 50 derniers
          totalPacksOpened: state.totalPacksOpened + 1,
          pokeCoins: state.pokeCoins + 50, // 50 pièces gagnées par ouverture
        }));
      },

      toggleFavorite: (cardId: string) => {
        set((state) => {
          const item = state.collection[cardId];
          if (!item) return state;
          return {
            collection: {
              ...state.collection,
              [cardId]: {
                ...item,
                isFavorite: !item.isFavorite,
              },
            },
          };
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
