import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardInCollection, PackOpeningHistory, PokemonCard, CRAFTING_RATES } from '../types/pokemon';
import { CARDS_DATABASE } from '../data/pokemonData';
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
  stardust: number;
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
  recycleCards: (items: { cardId: string; count: number }[]) => number;
  recycleAllDuplicates: () => number;
  craftCard: (cardId: string) => boolean;
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
      stardust: 300,

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

      recycleCards: (items) => {
        let earnedStardust = 0;
        const currentCollection = { ...get().collection };

        items.forEach(({ cardId, count }) => {
          const colItem = currentCollection[cardId];
          if (!colItem || colItem.count <= 1) return;
          const cardData = CARDS_DATABASE.find((c) => c.id === cardId);
          const yieldPerUnit = cardData ? (CRAFTING_RATES[cardData.rarity]?.recycleYield ?? 10) : 10;

          // On conserve au moins 1 exemplaire pour la collection
          const maxRecyclable = Math.max(0, colItem.count - 1);
          const actualRecycled = Math.min(count, maxRecyclable);
          if (actualRecycled <= 0) return;

          currentCollection[cardId] = {
            ...colItem,
            count: colItem.count - actualRecycled,
          };
          earnedStardust += actualRecycled * yieldPerUnit;
        });

        if (earnedStardust > 0) {
          soundManager.playRecycleSound();
          const nextStardust = get().stardust + earnedStardust;
          set({
            collection: currentCollection,
            stardust: nextStardust,
          });
          saveToIndexedDB('poketcg_collection', {
            collection: currentCollection,
            stardust: nextStardust,
          });
        }

        return earnedStardust;
      },

      recycleAllDuplicates: () => {
        const state = get();
        const duplicates = Object.entries(state.collection)
          .filter(([_, item]) => item && item.count > 1)
          .map(([cardId, item]) => ({ cardId, count: item.count - 1 }));

        if (duplicates.length === 0) return 0;
        return state.recycleCards(duplicates);
      },

      craftCard: (cardId: string) => {
        const card = CARDS_DATABASE.find((c) => c.id === cardId);
        if (!card) return false;

        const cost = CRAFTING_RATES[card.rarity]?.craftCost ?? 100;
        const currentStardust = get().stardust;
        if (currentStardust < cost) return false;

        const currentCollection = { ...get().collection };
        const now = Date.now();

        if (currentCollection[cardId]) {
          currentCollection[cardId] = {
            ...currentCollection[cardId],
            count: currentCollection[cardId].count + 1,
          };
        } else {
          currentCollection[cardId] = {
            cardId: card.id,
            count: 1,
            firstObtainedAt: now,
            isFavorite: false,
          };
        }

        const nextStardust = currentStardust - cost;
        soundManager.playCraftSuccess();
        soundManager.playSleeveInsert();

        set({
          collection: currentCollection,
          stardust: nextStardust,
        });

        saveToIndexedDB('poketcg_collection', {
          collection: currentCollection,
          stardust: nextStardust,
        });

        return true;
      },

      loadStateFromBackup: (newState) => {
        set((state) => ({
          ...state,
          collection: (newState.collection as Record<string, CardInCollection>) || state.collection,
          openingHistory: (newState.openingHistory as PackOpeningHistory[]) || state.openingHistory,
          totalPacksOpened: typeof newState.totalPacksOpened === 'number' ? newState.totalPacksOpened : state.totalPacksOpened,
          pokeCoins: typeof newState.pokeCoins === 'number' ? newState.pokeCoins : state.pokeCoins,
          stardust: typeof newState.stardust === 'number' ? newState.stardust : state.stardust,
          availablePacks: (newState.availablePacks as Record<string, number>) || state.availablePacks,
        }));
      },

      resetCollection: () => {
        set({
          collection: {},
          openingHistory: [],
          totalPacksOpened: 0,
          pokeCoins: 1000,
          stardust: 300,
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
          stardust: typeof persistedState?.stardust === 'number' ? persistedState.stardust : currentState.stardust,
          availablePacks: mergedPacks,
        };
      },
    }
  )
);

