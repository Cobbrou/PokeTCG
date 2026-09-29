import React, { useState } from 'react';
import { EXPANSION_SETS, generateBoosterPack, CARDS_DATABASE } from '../data/pokemonData';
import { useCollectionStore } from '../store/useCollectionStore';
import { BoosterPack } from './BoosterPack';
import { PackOpeningModal } from './PackOpeningModal';
import { PokemonCard, ExpansionSet } from '../types/pokemon';
import { Sparkles, ShoppingBag, History, Flame, Trophy, Sliders, Gift, Layers, PlusCircle } from 'lucide-react';

export const PackOpeningHub: React.FC = () => {
  const availablePacks = useCollectionStore((state) => state.availablePacks);
  const consumeBoosterPack = useCollectionStore((state) => state.consumeBoosterPack);
  const addBoosterPacks = useCollectionStore((state) => state.addBoosterPacks);
  const refillAllPacks = useCollectionStore((state) => state.refillAllPacks);
  const pokeCoins = useCollectionStore((state) => state.pokeCoins);
  const addCardsToCollection = useCollectionStore((state) => state.addCardsToCollection);
  const openingHistory = useCollectionStore((state) => state.openingHistory);
  const cardTrickEnabled = useCollectionStore((state) => state.cardTrickEnabled);
  const toggleCardTrick = useCollectionStore((state) => state.toggleCardTrick);

  // État de la session d'ouverture en cours
  const [isOpeningModalOpen, setIsOpeningModalOpen] = useState(false);
  const [currentPackCards, setCurrentPackCards] = useState<PokemonCard[]>([]);
  const [currentSet, setCurrentSet] = useState<ExpansionSet>(EXPANSION_SETS[0]);
  const [isGodPackSession, setIsGodPackSession] = useState(false);

  // Total de boosters disponibles
  const totalBoostersAvailable = Object.values(availablePacks).reduce((a, b) => a + b, 0);

  const handleOpenPack = (setInfo: ExpansionSet, isFastOpen = false) => {
    const success = consumeBoosterPack(setInfo.id);
    if (!success) return;

    if (isFastOpen) {
      useCollectionStore.setState({ fastOpenEnabled: true });
    } else {
      useCollectionStore.setState({ fastOpenEnabled: false });
    }

    const { cards, isGodPack } = generateBoosterPack(setInfo.id);
    setCurrentPackCards(cards);
    setCurrentSet(setInfo);
    setIsGodPackSession(isGodPack);
    setIsOpeningModalOpen(true);

    addCardsToCollection(cards, setInfo.id, setInfo.name, isGodPack);
  };

  const handleBuyPack = (setId: string, count = 1, price = 100) => {
    if (pokeCoins >= price) {
      useCollectionStore.setState((state) => ({
        pokeCoins: state.pokeCoins - price,
      }));
      addBoosterPacks(setId, count);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* ================= EN-TÊTE / HERO ================= */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-bold mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>{EXPANSION_SETS.length} Extensions Officielles • {CARDS_DATABASE.length} Cartes Référencées</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Arène d'Ouverture de Boosters
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
          Sélectionnez vos paquets, déchirez l’emballage métallisé avec physique réaliste et révélez vos cartes holographiques, Full Art, et secrètes dorées.
        </p>

        {/* Barre d'action rapide : Recharger boosters & Card trick */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
          {/* Bouton Recharger Boosters */}
          <button
            type="button"
            onClick={() => refillAllPacks(5)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            title="Ajouter 5 boosters de chaque extension gratuitement"
          >
            <Gift className="w-4 h-4" />
            <span>Recharger +5 Boosters de chaque (+25)</span>
          </button>

          {/* Switch Card Trick */}
          <button
            type="button"
            onClick={toggleCardTrick}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors text-slate-300"
          >
            <Sliders className="w-3.5 h-3.5 text-sky-400" />
            <span>Card Trick :</span>
            <span className={cardTrickEnabled ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {cardTrickEnabled ? 'Activé (Suspense)' : 'Désactivé'}
            </span>
          </button>

          {/* Badge stock total */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 font-semibold">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Stock total :</span>
            <span className="text-white font-bold">{totalBoostersAvailable} booster(s)</span>
          </div>
        </div>
      </div>

      {/* ================= RAYON DES BOOSTERS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 justify-items-center">
        {EXPANSION_SETS.map((set) => {
          const packCount = availablePacks[set.id] || 0;

          return (
            <div
              key={set.id}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col items-center w-full max-w-sm shadow-xl relative overflow-hidden backdrop-blur-sm transition-all hover:border-slate-700"
            >
              {/* Lueur d'ambiance du set */}
              <div
                className="absolute -top-24 -left-24 w-52 h-52 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: set.accentColor }}
              />

              {/* Booster Pack Visuel */}
              <BoosterPack
                setInfo={set}
                availableCount={packCount}
                onOpen={() => handleOpenPack(set, false)}
                onFastOpen={() => handleOpenPack(set, true)}
              />

              {/* Description brève du set */}
              <p className="text-[11px] text-slate-400 text-center mt-4 line-clamp-2 px-1">
                {set.description}
              </p>

              {/* Achat de packs supplémentaires avec pièces */}
              <div className="w-full mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleBuyPack(set.id, 1, 100)}
                  disabled={pokeCoins < 100}
                  className={`flex-1 px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    pokeCoins >= 100
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 active:scale-95'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-800'
                  }`}
                  title="Acheter 1 booster pour 100 pièces"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  +1 (100 <span className="text-[10px]">🪙</span>)
                </button>

                <button
                  type="button"
                  onClick={() => handleBuyPack(set.id, 5, 450)}
                  disabled={pokeCoins < 450}
                  className={`flex-1 px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    pokeCoins >= 450
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20 active:scale-95'
                      : 'bg-slate-800/60 text-slate-500 cursor-not-allowed border border-slate-800'
                  }`}
                  title="Acheter un pack de 5 boosters avec réduction (450 pièces)"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  +5 (450 <span className="text-[10px]">🪙</span>)
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
                      {new Date(pack.openedAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}{' '}
                      — 10 cartes obtenues
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
        onOpenAnother={() => handleOpenPack(currentSet, false)}
      />
    </div>
  );
};
