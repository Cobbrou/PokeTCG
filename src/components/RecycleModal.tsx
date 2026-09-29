import React, { useMemo, useState } from 'react';
import { useCollectionStore } from '../store/useCollectionStore';
import { CARDS_DATABASE } from '../data/pokemonData';
import { CRAFTING_RATES } from '../types/pokemon';
import {
  X,
  Sparkles,
  Recycle,
  Layers,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface RecycleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecycleModal: React.FC<RecycleModalProps> = ({ isOpen, onClose }) => {
  const collection = useCollectionStore((state) => state.collection);
  const stardust = useCollectionStore((state) => state.stardust);
  const recycleCards = useCollectionStore((state) => state.recycleCards);
  const recycleAllDuplicates = useCollectionStore((state) => state.recycleAllDuplicates);

  const [recycleSuccess, setRecycleSuccess] = useState<number | null>(null);

  // Liste de tous les doublons
  const duplicateList = useMemo(() => {
    const list: {
      cardId: string;
      name: string;
      rarity: string;
      image: string;
      totalCount: number;
      excessCount: number;
      yieldPerUnit: number;
      totalYield: number;
    }[] = [];

    Object.entries(collection).forEach(([cardId, item]) => {
      if (item && item.count > 1) {
        const card = CARDS_DATABASE.find((c) => c.id === cardId);
        if (card) {
          const excess = item.count - 1;
          const yieldPerUnit = CRAFTING_RATES[card.rarity]?.recycleYield ?? 10;
          list.push({
            cardId: card.id,
            name: card.name,
            rarity: card.rarity,
            image: card.images.small,
            totalCount: item.count,
            excessCount: excess,
            yieldPerUnit,
            totalYield: excess * yieldPerUnit,
          });
        }
      }
    });

    // Trier par rareté et rendement décroissant
    return list.sort((a, b) => b.totalYield - a.totalYield);
  }, [collection]);

  const totalPossibleYield = useMemo(() => {
    return duplicateList.reduce((acc, curr) => acc + curr.totalYield, 0);
  }, [duplicateList]);

  const totalDuplicatesCount = useMemo(() => {
    return duplicateList.reduce((acc, curr) => acc + curr.excessCount, 0);
  }, [duplicateList]);

  if (!isOpen) return null;

  const handleRecycleAll = () => {
    if (totalDuplicatesCount === 0) return;
    const gained = recycleAllDuplicates();
    setRecycleSuccess(gained);
    setTimeout(() => {
      setRecycleSuccess(null);
    }, 3000);
  };

  const handleRecycleSingle = (cardId: string, count: number) => {
    const gained = recycleCards([{ cardId, count }]);
    setRecycleSuccess(gained);
    setTimeout(() => {
      setRecycleSuccess(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                Atelier de Recyclage & Alchimie
              </h2>
              <p className="text-xs text-slate-400">
                Convertissez vos cartes en double en précieuse Poussière d'Étoile pour crafter des cartes manquantes.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Alerte de succès temporaire */}
        {recycleSuccess !== null && (
          <div className="bg-emerald-500/15 border-b border-emerald-500/30 px-6 py-3 flex items-center justify-between text-emerald-400 text-xs font-bold animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>+{recycleSuccess} Poussière d'Étoile obtenue avec succès ! Vos exemplaires originaux restent protégés.</span>
            </div>
          </div>
        )}

        {/* Bannière de statistiques & Action 1-clic */}
        <div className="px-6 py-4 bg-slate-950/50 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Solde actuel</span>
              <div className="text-base font-black text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{stardust}</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-800" />

            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Doublons recyclables</span>
              <div className="text-base font-black text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-slate-400" />
                <span>{totalDuplicatesCount} exemplaires</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-800" />

            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Gain total potentiel</span>
              <div className="text-base font-black text-emerald-400 flex items-center gap-1.5">
                <span>+{totalPossibleYield}</span>
                <span className="text-xs text-slate-400 font-normal">Poussières</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleRecycleAll}
            disabled={totalDuplicatesCount === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg ${
              totalDuplicatesCount > 0
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25 active:scale-95'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            <Recycle className="w-4 h-4" />
            <span>Recycler tous les doublons (+{totalPossibleYield})</span>
          </button>
        </div>

        {/* Liste des cartes doublons */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {duplicateList.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-3xl bg-slate-800/50 flex items-center justify-center mx-auto mb-4 text-slate-600">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-slate-300">Aucun doublon disponible</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Tous vos exemplaires de cartes sont uniques ! Ouvrez plus de boosters pour accumuler des doublons et les recycler.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {duplicateList.map((item) => (
                <div
                  key={item.cardId}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-16 object-contain rounded-lg shadow-md bg-slate-900"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white truncate max-w-[130px]">{item.name}</h4>
                      <span className="text-[10px] text-slate-400 block">{item.rarity}</span>
                      <span className="text-[10px] font-mono text-cyan-400 mt-0.5 inline-block">
                        {item.totalCount} possédées (garde 1, recycle {item.excessCount})
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      +{item.totalYield}
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                    </span>
                    <button
                      onClick={() => handleRecycleSingle(item.cardId, item.excessCount)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold flex items-center gap-1 border border-slate-700/80 transition-colors"
                      title="Recycler uniquement les doublons de cette carte"
                    >
                      <span>Recycler</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between">
          <p>
            ℹ️ Le recyclage conserve <strong>toujours au moins 1 exemplaire</strong> de chaque carte pour préserver votre classeur.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
