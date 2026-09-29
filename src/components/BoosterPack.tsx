import React, { useState } from 'react';
import { ExpansionSet } from '../types/pokemon';
import { Sparkles, Scissors } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface BoosterPackProps {
  setInfo: ExpansionSet;
  availableCount: number;
  onOpen: () => void;
  disabled?: boolean;
}

export const BoosterPack: React.FC<BoosterPackProps> = ({
  setInfo,
  availableCount,
  onOpen,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTearing, setIsTearing] = useState(false);

  const handleStartOpen = () => {
    if (disabled || availableCount <= 0 || isTearing) return;
    setIsTearing(true);
    soundManager.playTearPack();

    // Délai pour l'animation de déchirure
    setTimeout(() => {
      setIsTearing(false);
      onOpen();
    }, 600);
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
            : 'hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] active:scale-95'
        }`}
      >
        {/* Enveloppe Métallisée du Booster */}
        <div
          className={`w-full h-full rounded-2xl overflow-hidden relative border border-slate-700/60 shadow-2xl transition-transform ${
            isTearing ? 'animate-pulse' : ''
          }`}
          style={{
            background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          {/* Lisière supérieure thermo-scellée crantée (Crimp) */}
          <div className="h-6 w-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-b border-slate-600 flex items-center justify-around px-2 relative overflow-hidden">
            {/* Lignes crantées */}
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-0.5 h-full bg-slate-500/50" />
            ))}

            {/* Animation de déchirure du haut */}
            {isTearing && (
              <div className="absolute inset-0 bg-rose-500/80 transform translate-x-full transition-transform duration-500 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white animate-spin" />
              </div>
            )}
          </div>

          {/* Corps du paquet */}
          <div className="relative p-4 flex flex-col items-center justify-between h-[calc(100%-3rem)] bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Reflet métallisé / foil foil-pack */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background:
                  'linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.25) 45%, rgba(147, 197, 253, 0.4) 50%, transparent 60%)',
                opacity: isHovered ? 0.9 : 0.4,
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

          {/* Lisière inférieure thermo-scellée crantée (Bottom crimp) */}
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

      {/* Bouton d'action ouvrir */}
      <button
        type="button"
        disabled={disabled || availableCount <= 0}
        onClick={handleStartOpen}
        className={`mt-4 px-6 py-2 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center gap-2 ${
          availableCount > 0
            ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25 active:scale-95'
            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
        }`}
      >
        <Scissors className="w-4 h-4" />
        {availableCount > 0 ? 'Déchirer & Ouvrir' : 'Épuisé'}
      </button>
    </div>
  );
};
