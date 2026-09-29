import React, { useState } from 'react';
import { EXPANSION_SETS, generateBoosterPack } from '../data/pokemonData';
import { useCollectionStore } from '../store/useCollectionStore';
import { BoosterPack } from './BoosterPack';
import { PackOpeningModal } from './PackOpeningModal';
import { PokemonCard, ExpansionSet } from '../types/pokemon';
import { Sparkles, ShoppingBag, History, Flame, Trophy } from 'lucide-react';

export const PackOpeningHub: React.FC = () => {
  const availablePacks = useCollectionStore((state) => state.availablePacks);
  const consumeBoosterPack = useCollectionStore((state) => state.consumeBoosterPack);
  const addBoosterPacks = useCollectionStore((state) => state.addBoosterPacks);
  const pokeCoins = useCollectionStore((state) => state.pokeCoins);
  const addCardsToCollection = useCollectionStore((state) => state.addCardsToCollection);
  const openingHistory = useCollectionStore((state) => state.openingHistory);

  // État de la session d'ouverture en cours
  const [isOpeningModalOpen, setIsOpeningModalOpen] = useState(false);
  const [currentPackCards, setCurrentPackCards] = useState<PokemonCard[]>([]);
  const [currentSet, setCurrentSet] = useState<ExpansionSet>(EXPANSION_SETS[0]);
  const [isGodPackSession, setIsGodPackSession] = useState(false);

  const handleOpenPack = (setInfo: ExpansionSet) => {
    const success = consumeBoosterPack(setInfo.id);
    if (!success) return;

    const { cards, isGodPack } = generateBoosterPack(setInfo.id);
    setCurrentPackCards(cards);
    setCurrentSet(setInfo);
    setIsGodPackSession(isGodPack);
    setIsOpeningModalOpen(true);

    // Enregistrer les cartes dans la collection du joueur
    addCardsToCollection(cards, setInfo.id, setInfo.name, isGodPack);
  };

  const handleBuyPack = (setId: string, price = 100) => {
    if (pokeCoins >= price) {
      useCollectionStore.setState((state) => ({
        pokeCoins: state.pokeCoins - price,
      }));
      addBoosterPacks(setId, 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* ================= EN-TÊTE / HERO ================= */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Simulation d’ouverture physique fidèle
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Arène d'Ouverture de Boosters
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
          Choisissez votre extension, déchirez l’emballage métallisé et découvrez vos cartes avec leurs véritables reflets holographiques.
        </p>
      </div>

      {/* ================= RAYON DES BOOSTERS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 justify-items-center">
        {EXPANSION_SETS.map((set) => {
          const packCount = availablePacks[set.id] || 0;

          return (
            <div
              key={set.id}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center w-full max-w-sm shadow-xl relative overflow-hidden backdrop-blur-sm"
            >
              {/* Effet d'ambiance lumineuse en arrière-plan */}
              <div
                className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: set.accentColor }}
              />

              {/* Booster 3D interactif */}
              <BoosterPack
                setInfo={set}
                availableCount={packCount}
                onOpen={() => handleOpenPack(set)}
              />

              {/* Achat de packs supplémentaires avec pièces */}
              <div className="w-full mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Acheter 1 booster :</span>
                <button
                  type="button"
                  onClick={() => handleBuyPack(set.id, 100)}
                  disabled={pokeCoins < 100}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    pokeCoins >= 100
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 active:scale-95'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-800'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  100 Pièces
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= HISTORIQUE DES DERNIERS TIRAGES ================= */}
      {openingHistory.length > 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <History className="w-5 h-5 text-sky-400" /> Historique des ouvertures récentes
            </h3>
            <span className="text-xs text-slate-400">
              {openingHistory.length} booster(s) ouvert(s)
            </span>
          </div>

          <div className="space-y-3">
            {openingHistory.slice(0, 5).map((pack) => (
              <div
                key={pack.id}
                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 font-black text-xs">
                    TCG
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      {pack.setName}
                      {pack.isGodPack && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-current" /> GOD PACK
                        </span>
                      )}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {new Date(pack.openedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} — 10 cartes obtenues
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Meilleure trouvaille :</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-amber-400" />
                    {pack.bestRarity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODALE D'OUVERTURE ================= */}
      <PackOpeningModal
        isOpen={isOpeningModalOpen}
        onClose={() => setIsOpeningModalOpen(false)}
        cards={currentPackCards}
        setInfo={currentSet}
        isGodPack={isGodPackSession}
        canOpenAnother={(availablePacks[currentSet.id] || 0) > 0}
        onOpenAnother={() => handleOpenPack(currentSet)}
      />
    </div>
  );
};
