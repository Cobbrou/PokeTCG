import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardInCollection, PackOpeningHistory, PokemonCard } from '../types/pokemon';
import { soundManager } from '../utils/audio';
import { saveToIndexedDB } from '../services/storage';

export const DEFAULT_INITIAL_PACKS: Record<string, number> = {
  'sv3pt5': 10,
  'sv3': 10,
  'swsh7': 10,
  'base1': 10,
  'sv4': 10,
};

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
  refillAllPacks: (count?: number) => void;
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
      pokeCoins: 1000,
      availablePacks: { ...DEFAULT_INITIAL_PACKS },
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
        set((state) => {
          const updated = { ...state.availablePacks };
          Object.keys(DEFAULT_INITIAL_PACKS).forEach((id) => {
            updated[id] = (updated[id] || 0) + 2;
          });
          return {
            pokeCoins: state.pokeCoins + 300,
            availablePacks: updated,
          };
        });
      },

      refillAllPacks: (count: number = 5) => {
        set((state) => {
          const updated = { ...state.availablePacks };
          Object.keys(DEFAULT_INITIAL_PACKS).forEach((id) => {
            updated[id] = (updated[id] || 0) + count;
          });
          return {
            pokeCoins: state.pokeCoins + 500,
            availablePacks: updated,
          };
        });
      },

      consumeBoosterPack: (setId: string) => {
        // Fallback for sv03 -> sv3
        const targetId = setId === 'sv03' ? 'sv3' : setId;
        const count = get().availablePacks[targetId] || 0;
        if (count <= 0) return false;

        set((state) => ({
          availablePacks: {
            ...state.availablePacks,
            [targetId]: count - 1,
          },
        }));
        return true;
      },

      addBoosterPacks: (setId: string, count: number) => {
        const targetId = setId === 'sv03' ? 'sv3' : setId;
        set((state) => ({
          availablePacks: {
            ...state.availablePacks,
            [targetId]: (state.availablePacks[targetId] || 0) + count,
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
          pokeCoins: 1000,
          availablePacks: { ...DEFAULT_INITIAL_PACKS },
        });
      },
    }),
    {
      name: 'poketcg-collection-storage',
      merge: (persistedState: any, currentState) => {
        const mergedPacks: Record<string, number> = {
          ...DEFAULT_INITIAL_PACKS,
          ...(persistedState?.availablePacks || {}),
        };
        // Migration sv03 -> sv3
        if (mergedPacks['sv03'] !== undefined) {
          if (!mergedPacks['sv3']) {
            mergedPacks['sv3'] = mergedPacks['sv03'];
          }
          delete mergedPacks['sv03'];
        }
        // Ensure all new sets have packs available
        for (const [key, defaultCount] of Object.entries(DEFAULT_INITIAL_PACKS)) {
          if (mergedPacks[key] === undefined || mergedPacks[key] <= 0) {
            mergedPacks[key] = defaultCount;
          }
        }
        return {
          ...currentState,
          ...persistedState,
          availablePacks: mergedPacks,
        };
      },
    }
  )
);
