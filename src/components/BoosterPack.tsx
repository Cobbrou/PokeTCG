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
  const [logoLoaded, setLogoLoaded] = useState(true);

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
    <div className="flex flex-col items-center group w-full">
      {/* Paquet de booster */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleStartOpen}
        className={`relative w-60 h-96 rounded-2xl select-none cursor-pointer transition-all duration-300 transform perspective-1000 ${
          disabled || availableCount <= 0
            ? 'opacity-40 grayscale cursor-not-allowed'
            : 'hover:-translate-y-2.5 active:scale-95'
        }`}
        style={{
          boxShadow: isHovered && availableCount > 0
            ? `0 20px 45px ${setInfo.accentColor}40`
            : undefined,
        }}
      >
        {/* Enveloppe Métallisée du Booster */}
        <div
          className="w-full h-full rounded-2xl overflow-hidden relative border border-slate-700/60 shadow-2xl transition-transform"
          style={{
            background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          {/* Lisière supérieure thermo-scellée crantée */}
          <div className="h-6 w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 border-b border-slate-600 flex items-center justify-around px-2 relative overflow-hidden">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-0.5 h-full bg-slate-500/40" />
            ))}
          </div>

          {/* Corps du paquet */}
          <div
            className="relative p-4 flex flex-col items-center justify-between h-[calc(100%-3rem)] overflow-hidden transition-colors"
            style={{
              background: `linear-gradient(165deg, ${setInfo.accentColor}28 0%, #0f172a 45%, #020617 100%)`,
            }}
          >
            {/* Reflet métallisé */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background:
                  'linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.22) 45%, rgba(255, 255, 255, 0.4) 50%, transparent 60%)',
                opacity: isHovered ? 0.95 : 0.35,
              }}
            />

            {/* Logo de la série & Symbole */}
            <div className="w-full flex items-center justify-between pt-1 relative z-10">
              <span
                className="text-[10px] font-black uppercase tracking-widest drop-shadow"
                style={{ color: setInfo.accentColor }}
              >
                {setInfo.series}
              </span>
              {setInfo.boosterImage && (
                <img
                  src={setInfo.boosterImage}
                  alt=""
                  className="w-4 h-4 object-contain opacity-80"
                  loading="lazy"
                />
              )}
            </div>

            {/* Visuel central de l'extension */}
            <div className="flex flex-col items-center relative z-10 my-auto text-center w-full px-2">
              {setInfo.logo && logoLoaded ? (
                <div className="h-20 w-44 mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_6px_14px_rgba(0,0,0,0.85)]">
                  <img
                    src={setInfo.logo}
                    alt={setInfo.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow"
                    onError={() => setLogoLoaded(false)}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="w-20 h-20 rounded-full p-1 mb-3 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${setInfo.accentColor}, #0f172a)`,
                    boxShadow: `0 0 20px ${setInfo.accentColor}55`,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden p-2">
                    <Sparkles className="w-9 h-9 text-amber-400 animate-pulse" />
                  </div>
                </div>
              )}

              <h3 className="text-lg font-black text-white tracking-wide uppercase drop-shadow leading-tight">
                {setInfo.name}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 max-w-[190px] line-clamp-2">
                10 Cartes de Jeu Officielles
              </p>
            </div>

            {/* Badge inférieur */}
            <div className="w-full flex items-center justify-between relative z-10 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-semibold">
              <span>{setInfo.totalCards} Cartes</span>
              <span className="text-amber-400 flex items-center gap-1 font-bold">
                <Sparkles className="w-3 h-3 fill-current" /> Foil Garanti
              </span>
            </div>
          </div>

          {/* Lisière inférieure thermo-scellée crantée */}
          <div className="h-6 w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 border-t border-slate-600 flex items-center justify-around px-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-0.5 h-full bg-slate-500/40" />
            ))}
          </div>
        </div>

        {/* Badge du stock disponible */}
        <div className="absolute -top-3 -right-3 z-30">
          <span
            className="flex items-center justify-center px-3 py-1 rounded-full text-xs font-black shadow-lg text-white border-2 border-slate-950"
            style={{
              backgroundColor: availableCount > 0 ? (setInfo.accentColor || '#0ea5e9') : '#475569',
            }}
          >
            x{availableCount}
          </span>
        </div>
      </div>

      {/* Boutons d'action : Déchirure manuelle OU Ouverture Rapide */}
      <div className="flex flex-col gap-2 w-full max-w-[240px] mt-4">
        <button
          type="button"
          disabled={disabled || availableCount <= 0}
          onClick={handleStartOpen}
          className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
            availableCount > 0
              ? 'text-white shadow-lg active:scale-95'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
          style={{
            background: availableCount > 0
              ? `linear-gradient(135deg, ${setInfo.accentColor}, #1e3a8a)`
              : undefined,
            boxShadow: availableCount > 0
              ? `0 6px 20px ${setInfo.accentColor}40`
              : undefined,
          }}
        >
          <Scissors className="w-3.5 h-3.5" />
          {availableCount > 0 ? 'Déchirer & Ouvrir' : 'Épuisé'}
        </button>

        {availableCount > 0 && (
          <button
            type="button"
            onClick={handleStartFastOpen}
            className="w-full py-1.5 rounded-lg font-semibold text-[11px] text-slate-400 hover:text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Zap className="w-3 h-3 text-amber-400" />
            Ouverture Rapide
          </button>
        )}
      </div>
    </div>
  );
};
