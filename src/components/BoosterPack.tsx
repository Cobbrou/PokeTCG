import React, { useState } from 'react';
import { ExpansionSet } from '../types/pokemon';
import { Sparkles, Scissors, Zap } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface BoosterPackProps {
  setInfo: ExpansionSet;
  availableCount: number;
  onOpen: () => void;
  onFastOpen: () => void;
  disabled?: boolean;
}

export const BoosterPack: React.FC<BoosterPackProps> = ({
  setInfo,
  availableCount,
  onOpen,
  onFastOpen,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleStartOpen = () => {
    if (disabled || availableCount <= 0) return;
    soundManager.playTearPack();
    onOpen();
  };

  const handleStartFastOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled || availableCount <= 0) return;
    soundManager.playCardSlide();
    onFastOpen();
  };

  return (
    <div className="flex flex-col items-center group">
      {/* Paquet de booster */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleStartOpen}
        className={`relative w-56 h-88 rounded-2xl select-none cursor-pointer transition-all duration-300 transform perspective-1000 ${
          disabled || availableCount <= 0
            ? 'opacity-50 grayscale cursor-not-allowed'
            : 'hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.35)] active:scale-95'
        }`}
      >
        {/* Enveloppe Métallisée du Booster */}
        <div
          className="w-full h-full rounded-2xl overflow-hidden relative border border-slate-700/60 shadow-2xl transition-transform"
          style={{
            background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          {/* Lisière supérieure thermo-scellée crantée */}
          <div className="h-6 w-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-b border-slate-600 flex items-center justify-around px-2 relative overflow-hidden">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-0.5 h-full bg-slate-500/50" />
            ))}
          </div>

          {/* Corps du paquet */}
          <div className="relative p-4 flex flex-col items-center justify-between h-[calc(100%-3rem)] bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Reflet métallisé */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background:
                  'linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.25) 45%, rgba(147, 197, 253, 0.4) 50%, transparent 60%)',
                opacity: isHovered ? 0.95 : 0.4,
              }}
            />

            {/* Logo de la série */}
            <div className="w-full flex justify-center pt-2 relative z-10">
              <span className="text-[11px] font-black uppercase tracking-widest text-sky-400 drop-shadow">
                {setInfo.series}
              </span>
            </div>

            {/* Visuel central de l'extension */}
            <div className="flex flex-col items-center relative z-10 my-auto text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-500 p-1 mb-3 shadow-lg shadow-sky-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden p-2">
                  <Sparkles className="w-10 h-10 text-amber-400 animate-pulse" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white tracking-wide uppercase drop-shadow">
                {setInfo.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-[180px] line-clamp-2">
                10 Cartes Officielles
              </p>
            </div>

            {/* Badge inférieur */}
            <div className="w-full flex items-center justify-between relative z-10 pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-semibold">
              <span>{setInfo.totalCards} Cartes</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Foil Garanti
              </span>
            </div>
          </div>

          {/* Lisière inférieure thermo-scellée crantée */}
          <div className="h-6 w-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-t border-slate-600 flex items-center justify-around px-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-0.5 h-full bg-slate-500/50" />
            ))}
          </div>
        </div>

        {/* Badge du stock disponible */}
        <div className="absolute -top-3 -right-3 z-30">
          <span className="flex items-center justify-center px-3 py-1 rounded-full text-xs font-black shadow-lg bg-sky-500 text-white border-2 border-slate-950">
            x{availableCount}
          </span>
        </div>
      </div>

      {/* Boutons d'action : Déchirure manuelle OU Ouverture Rapide */}
      <div className="flex flex-col gap-2 w-full max-w-[224px] mt-4">
        <button
          type="button"
          disabled={disabled || availableCount <= 0}
          onClick={handleStartOpen}
          className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
            availableCount > 0
              ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25 active:scale-95'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          <Scissors className="w-3.5 h-3.5" />
          {availableCount > 0 ? 'Déchirer & Ouvrir' : 'Épuisé'}
        </button>

        {availableCount > 0 && (
          <button
            type="button"
            onClick={handleStartFastOpen}
            className="w-full py-1.5 rounded-lg font-semibold text-[11px] text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Zap className="w-3 h-3 text-amber-400" />
            Ouverture Rapide
          </button>
        )}
      </div>
    </div>
  );
};
