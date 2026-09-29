import React, { useState, useEffect, useMemo } from 'react';
import { PokemonCard, CRAFTING_RATES } from '../types/pokemon';
import { CARDS_DATABASE, EXPANSION_SETS } from '../data/pokemonData';
import { useCollectionStore } from '../store/useCollectionStore';
import { Card3D } from './Card3D';
import { soundManager } from '../utils/audio';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  Bookmark,
} from 'lucide-react';


interface VirtualBinderProps {
  selectedSetId: string;
  onSelectSetId: (setId: string) => void;
  onInspectCard: (card: PokemonCard) => void;
  onOpenRecycleModal: () => void;
}

const CARDS_PER_PAGE = 9; // Grille officielle 3x3

export const VirtualBinder: React.FC<VirtualBinderProps> = ({
  selectedSetId,
  onSelectSetId,
  onInspectCard,
  onOpenRecycleModal,
}) => {
  const collection = useCollectionStore((state) => state.collection);
  const stardust = useCollectionStore((state) => state.stardust);
  const craftCard = useCollectionStore((state) => state.craftCard);
  const toggleFavorite = useCollectionStore((state) => state.toggleFavorite);

  const [currentPage, setCurrentPage] = useState(1);
  const [filterMode, setFilterMode] = useState<'ALL' | 'OWNED' | 'MISSING'>('ALL');
  const [isFlipping, setIsFlipping] = useState<'left' | 'right' | null>(null);

  // Set actuellement sélectionné
  const currentSet = useMemo(() => {
    return EXPANSION_SETS.find((s) => s.id === selectedSetId) || EXPANSION_SETS[0];
  }, [selectedSetId]);

  // Toutes les cartes du set sélectionné
  const allSetCards = useMemo(() => {
    return CARDS_DATABASE.filter((c) => c.setId === selectedSetId);
  }, [selectedSetId]);

  // Cartes filtrées
  const filteredSetCards = useMemo(() => {
    return allSetCards.filter((card) => {
      const isOwned = collection[card.id] && collection[card.id].count > 0;
      if (filterMode === 'OWNED') return isOwned;
      if (filterMode === 'MISSING') return !isOwned;
      return true;
    });
  }, [allSetCards, collection, filterMode]);

  // Nombre total de pages pour ce set
  const totalPages = Math.max(1, Math.ceil(filteredSetCards.length / CARDS_PER_PAGE));

  // Réinitialiser la page si on change de set ou de filtre
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSetId, filterMode]);

  // Cartes de la page courante (exactement 9 slots max)
  const currentSlotCards = useMemo(() => {
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    return filteredSetCards.slice(startIndex, startIndex + CARDS_PER_PAGE);
  }, [filteredSetCards, currentPage]);

  // Statistiques du set actuel
  const setStats = useMemo(() => {
    let owned = 0;
    allSetCards.forEach((c) => {
      if (collection[c.id] && collection[c.id].count > 0) {
        owned++;
      }
    });
    const percentage = allSetCards.length > 0 ? Math.round((owned / allSetCards.length) * 100) : 0;
    return { owned, total: allSetCards.length, percentage };
  }, [allSetCards, collection]);

  // Navigation page précédente
  const goToPrevPage = () => {
    if (currentPage > 1) {
      soundManager.playPageFlip();
      setIsFlipping('left');
      setTimeout(() => setIsFlipping(null), 250);
      setCurrentPage((p) => p - 1);
    }
  };

  // Navigation page suivante
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      soundManager.playPageFlip();
      setIsFlipping('right');
      setTimeout(() => setIsFlipping(null), 250);
      setCurrentPage((p) => p + 1);
    }
  };

  // Gestion des touches clavier flèche gauche / droite
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') {
        goToPrevPage();
      } else if (e.key === 'ArrowRight') {
        goToNextPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  // Changement d'intercalaire / set
  const handleSelectSet = (id: string) => {
    if (id !== selectedSetId) {
      soundManager.playPageFlip();
      onSelectSetId(id);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 select-none">
      {/* ================= BINDER DESKTOP & TABLET CONTAINER ================= */}
      <div className="relative flex flex-col xl:flex-row items-stretch gap-2">
        {/* ================= CORPS PRINCIPAL DU CLASSEUR ================= */}
        <div className="flex-1 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-4 border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Reliure d'album en cuir texturé & anneaux métalliques sur la gauche */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800/80 flex flex-col justify-around items-center py-8 z-10 pointer-events-none">
            {/* 3 Anneaux de reliure métalliques */}
            {[1, 2, 3].map((ring) => (
              <div key={ring} className="relative flex items-center justify-center">
                {/* Anneau courbé argenté */}
                <div className="w-5 sm:w-7 h-10 sm:h-14 rounded-full border-4 border-slate-400/80 bg-gradient-to-r from-slate-600 via-slate-200 to-slate-500 shadow-md shadow-black/80 ring-1 ring-white/40" />
                {/* Trou perforé dans la page */}
                <div className="absolute -right-3 w-3 h-3 rounded-full bg-slate-950 border border-slate-800 shadow-inner" />
              </div>
            ))}
          </div>

          {/* Décoration de piqûre de couture de reliure */}
          <div className="absolute top-2 bottom-2 left-10 sm:left-14 border-l border-dashed border-slate-700/30 pointer-events-none" />

          {/* ================= HEADER DU CLASSEUR ================= */}
          <div className="pl-6 sm:pl-10 pb-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: currentSet.accentColor }}
              >
                <Bookmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {currentSet.name}
                  </h2>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {currentSet.series}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-400">
                  <span>
                    Complétion : <strong className="text-white">{setStats.owned}</strong> / {setStats.total} cartes ({setStats.percentage}%)
                  </span>
                  {setStats.percentage === 100 && (
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" /> Set Maître Complété !
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Filtres internes au classeur & Recyclage */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                {(
                  [
                    { id: 'ALL', label: 'Toutes' },
                    { id: 'OWNED', label: 'Possédées' },
                    { id: 'MISSING', label: 'Manquantes' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterMode(tab.id)}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      filterMode === tab.id
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Solde Stardust & Accès Recyclage */}
              <button
                onClick={onOpenRecycleModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-800/80 hover:bg-cyan-900/60 text-cyan-300 text-xs font-bold transition-all shadow-sm"
                title="Ouvrir l'atelier pour recycler vos doublons en Poussière d'Étoile"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>{stardust} ✨</span>
                <span className="hidden sm:inline text-[10px] text-cyan-500 font-normal">| Atelier</span>
              </button>
            </div>
          </div>

          {/* ================= PAGE DE 9 POCHETTES (3x3) ================= */}
          <div
            className={`pl-6 sm:pl-10 py-6 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center transition-all duration-300 ${
              isFlipping === 'right'
                ? 'opacity-60 translate-x-2'
                : isFlipping === 'left'
                ? 'opacity-60 -translate-x-2'
                : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Si aucune carte ne correspond au filtre */}
            {currentSlotCards.length === 0 ? (
              <div className="col-span-full py-20 text-center">
                <p className="text-sm font-bold text-slate-400">Aucune carte dans cette section.</p>
                <p className="text-xs text-slate-600 mt-1">Changez de filtre ou ouvrez des boosters !</p>
              </div>
            ) : (
              currentSlotCards.map((card) => {
                const item = collection[card.id];
                const isOwned = item && item.count > 0;
                const cost = CRAFTING_RATES[card.rarity]?.craftCost ?? 100;
                const canCraft = stardust >= cost;

                return (
                  <div
                    key={card.id}
                    className="relative group w-36 sm:w-48 h-50 sm:h-67 flex flex-col items-center justify-center"
                  >
                    {/* Pochette de classeur (Sleeve transparente avec reflets plastifiés) */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-900/90 via-slate-900/40 to-white/5 border border-slate-700/60 shadow-inner shadow-black/50 pointer-events-none z-10">
                      {/* Fente supérieure de la pochette */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full bg-white/10" />
                      {/* Reflet brillant diagonal */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
                    </div>

                    {/* Carte à l'intérieur de la pochette */}
                    {isOwned ? (
                      <div className="relative">
                        <Card3D
                          card={card}
                          isFlipped={true}
                          size="md"
                          countOwned={item.count}
                          isFavorite={item.isFavorite}
                          onToggleFavorite={() => toggleFavorite(card.id)}
                          onInspect={() => onInspectCard(card)}
                        />
                      </div>
                    ) : (
                      /* Slot vide pour carte manquante avec action de Craft */
                      <div className="w-full h-full rounded-2xl bg-slate-950/70 border border-dashed border-slate-800 p-3 sm:p-4 flex flex-col items-center justify-between text-center transition-all group-hover:border-slate-700">
                        <div className="w-full flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>#{card.number}</span>
                          <span className="truncate max-w-[80px]">{card.rarity}</span>
                        </div>

                        <div
                          onClick={() => onInspectCard(card)}
                          className="cursor-pointer group-hover:scale-105 transition-transform flex flex-col items-center"
                          title="Cliquez pour inspecter la carte avant de la forger"
                        >
                          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-600 mb-2">
                            <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
                          </div>
                          <span className="text-xs font-bold text-slate-300 max-w-[120px] truncate block">
                            {card.name}
                          </span>
                        </div>

                        {/* Bouton Forger / Craft */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (canCraft) {
                              craftCard(card.id);
                            } else {
                              onInspectCard(card);
                            }
                          }}
                          disabled={!canCraft}
                          className={`w-full py-1.5 px-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 shadow ${
                            canCraft
                              ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-cyan-500/20 active:scale-95'
                              : 'bg-slate-900 text-slate-500 border border-slate-800 cursor-not-allowed'
                          }`}
                          title={
                            canCraft
                              ? `Forger cette carte pour ${cost} Poussière d'Étoile`
                              : `Il vous manque ${cost - stardust} Poussière d'Étoile (Possède: ${stardust}/${cost})`
                          }
                        >
                          <Sparkles className="w-3 h-3 text-cyan-300" />
                          <span>Forger ({cost})</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Remplir les slots restants pour toujours afficher 9 pochettes comme un vrai classeur */}
            {currentSlotCards.length > 0 &&
              Array.from({ length: Math.max(0, CARDS_PER_PAGE - currentSlotCards.length) }).map(
                (_, idx) => (
                  <div
                    key={`empty-pocket-${idx}`}
                    className="w-36 sm:w-48 h-50 sm:h-67 rounded-2xl bg-slate-950/20 border border-slate-800/40 relative flex items-center justify-center opacity-30 pointer-events-none"
                  >
                    <div className="w-8 h-8 rounded-full border border-slate-700/40 flex items-center justify-center text-slate-700 text-xs font-mono">
                      +
                    </div>
                  </div>
                )
              )}
          </div>

          {/* ================= NAVIGATION BAS DE CLASSEUR ================= */}
          <div className="pl-6 sm:pl-10 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Page <strong className="text-white">{currentPage}</strong> sur{' '}
              <strong className="text-white">{totalPages}</strong> (
              {filteredSetCards.length} cartes au total)
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-xl border transition-all flex items-center gap-1 text-xs font-bold ${
                  currentPage > 1
                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700 active:scale-95'
                    : 'bg-slate-950 border-slate-900 text-slate-600 cursor-not-allowed'
                }`}
                title="Page précédente (Touche Flèche Gauche)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Précédent</span>
              </button>

              {/* Indicateur de mini-pages */}
              <div className="flex items-center gap-1 px-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pNum = i + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => {
                        soundManager.playPageFlip();
                        setCurrentPage(pNum);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        pNum === currentPage
                          ? 'w-6 bg-sky-400'
                          : 'bg-slate-800 hover:bg-slate-600'
                      }`}
                      title={`Aller à la page ${pNum}`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-xl border transition-all flex items-center gap-1 text-xs font-bold ${
                  currentPage < totalPages
                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700 active:scale-95'
                    : 'bg-slate-950 border-slate-900 text-slate-600 cursor-not-allowed'
                }`}
                title="Page suivante (Touche Flèche Droite)"
              >
                <span className="hidden sm:inline">Suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= INTERCALAIRES LATÉRAUX DU CLASSEUR (SET DIVIDERS) ================= */}
        <div className="flex xl:flex-col gap-1.5 overflow-x-auto xl:overflow-visible py-2 xl:py-6 shrink-0">
          {EXPANSION_SETS.map((set) => {
            const isSelected = selectedSetId === set.id;
            const count = CARDS_DATABASE.filter((c) => c.setId === set.id).length;
            let setOwned = 0;
            CARDS_DATABASE.filter((c) => c.setId === set.id).forEach((c) => {
              if (collection[c.id] && collection[c.id].count > 0) setOwned++;
            });
            const pct = count > 0 ? Math.round((setOwned / count) * 100) : 0;

            return (
              <button
                key={set.id}
                type="button"
                onClick={() => handleSelectSet(set.id)}
                className={`group relative flex items-center gap-2.5 px-3.5 py-3 rounded-2xl xl:rounded-l-none xl:rounded-r-2xl text-xs font-bold transition-all text-left border ${
                  isSelected
                    ? 'text-white shadow-xl scale-102 xl:translate-x-1.5'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-850 border-slate-800'
                }`}
                style={{
                  backgroundColor: isSelected ? set.accentColor : undefined,
                  borderColor: isSelected ? set.accentColor : undefined,
                  boxShadow: isSelected ? `0 8px 20px ${set.accentColor}35` : undefined,
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: isSelected ? '#ffffff' : set.accentColor }}
                />
                <div className="flex flex-col">
                  <span className="truncate max-w-[120px] font-extrabold">{set.name}</span>
                  <span className="text-[10px] opacity-80 font-normal">
                    {pct}% complété ({setOwned}/{count})
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
