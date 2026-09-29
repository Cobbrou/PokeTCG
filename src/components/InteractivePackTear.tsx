import React, { useState, useRef, useEffect } from 'react';
import { ExpansionSet } from '../types/pokemon';
import { soundManager } from '../utils/audio';
import { Scissors, Zap, Sparkles, ChevronRight } from 'lucide-react';

interface InteractivePackTearProps {
  setInfo: ExpansionSet;
  onTornComplete: () => void;
  onFastOpen: () => void;
}

export const InteractivePackTear: React.FC<InteractivePackTearProps> = ({
  setInfo,
  onTornComplete,
  onFastOpen,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tearProgress, setTearProgress] = useState(0); // 0 à 100%
  const [isDragging, setIsDragging] = useState(false);
  const [isTorn, setIsTorn] = useState(false);
  const [cardsEjected, setCardsEjected] = useState(false);

  const startXRef = useRef(0);
  const currentProgressRef = useRef(0);

  // Gérer le début du glisser (souris ou toucher)
  const handlePointerDown = (clientX: number) => {
    if (isTorn) return;
    setIsDragging(true);
    startXRef.current = clientX;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || isTorn) return;
    const deltaX = clientX - startXRef.current;
    const maxDistance = 240; // Largeur du sachet en px
    const progress = Math.min(Math.max((deltaX / maxDistance) * 100, 0), 100);

    currentProgressRef.current = progress;
    setTearProgress(progress);

    // Bruitages continus proportionnels
    if (Math.random() > 0.4) {
      soundManager.playTearDrag(progress / 100);
    }

    // Si déchirure dépasse 85%, déclencher la rupture finale
    if (progress >= 85) {
      triggerFullTear();
    }
  };

  const handlePointerUp = () => {
    if (!isDragging || isTorn) return;
    setIsDragging(false);

    // Si on a tiré à plus de 70%, on termine l'ouverture
    if (currentProgressRef.current > 70) {
      triggerFullTear();
    } else {
      // Sinon rebond élastique de retour à 0
      setTearProgress(0);
      currentProgressRef.current = 0;
    }
  };

  const triggerFullTear = () => {
    setIsDragging(false);
    setIsTorn(true);
    setTearProgress(100);
    soundManager.playTearPack();

    // 1. Éjection des cartes hors de l'emballage
    setTimeout(() => {
      setCardsEjected(true);
      soundManager.playCardSlide();
    }, 450);

    // 2. Passage à la phase d'inspection des cartes
    setTimeout(() => {
      onTornComplete();
    }, 1100);
  };

  // Événements globaux pour ne pas perdre le drag hors du composant
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX);
    const onMouseUp = () => handlePointerUp();
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX);
    };
    const onTouchEnd = () => handlePointerUp();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center justify-center select-none py-6">
      {/* Tapis d'ouverture de booster */}
      <div className="relative w-80 sm:w-96 flex flex-col items-center">
        {/* Bandeau d'indication */}
        <div className="mb-6 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400 flex items-center justify-center gap-1.5">
            <Scissors className="w-4 h-4 animate-bounce" /> Déchirez le haut du sachet
          </span>
          <p className="text-xs text-slate-400 mt-1">
            Glissez la languette de gauche à droite avec votre souris ou doigt
          </p>
        </div>

        {/* ================= CONTENEUR DU BOOSTER PHYSIQUE ================= */}
        <div
          ref={containerRef}
          className="relative w-64 h-96 rounded-2xl perspective-1000"
        >
          {/* ================= BLOC DE 10 CARTES (ÉJECTÉES HORS DU BOOSTER) ================= */}
          <div
            className={`absolute inset-x-4 h-80 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 border-2 border-amber-600/70 p-2 shadow-2xl transition-all duration-700 ease-out z-10 flex flex-col items-center justify-center ${
              cardsEjected
                ? '-translate-y-40 scale-105 shadow-[0_25px_60px_rgba(59,130,246,0.6)]'
                : 'translate-y-6 opacity-0'
            }`}
          >
            {/* Dos de la première carte */}
            <div className="w-full h-full rounded-xl border border-amber-500/40 relative flex items-center justify-center bg-gradient-to-b from-blue-800 to-indigo-900">
              <div className="w-20 h-20 rounded-full border-4 border-slate-900 bg-gradient-to-b from-red-600 50% to-slate-100 50% relative flex items-center justify-center shadow-lg">
                <div className="w-full h-2 bg-slate-900 absolute top-1/2 -translate-y-1/2" />
                <div className="w-7 h-7 rounded-full border-4 border-slate-900 bg-white relative z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
              </div>
              <span className="absolute bottom-4 text-[9px] font-black uppercase tracking-widest text-amber-400">
                10 Cartes Prêtes
              </span>
            </div>
          </div>

          {/* ================= BANDEAU SUPÉRIEUR CRANTÉ (DÉCHIRABLE) ================= */}
          <div
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
            className={`absolute -top-1 inset-x-0 h-10 z-30 cursor-grab active:cursor-grabbing transition-transform ${
              isTorn
                ? 'translate-x-full rotate-12 opacity-0 duration-500 pointer-events-none'
                : ''
            }`}
            style={{
              transform: !isTorn
                ? `translateX(${tearProgress * 0.9}px) rotate(${tearProgress * 0.15}deg)`
                : undefined,
            }}
          >
            {/* Bandeau d'emballage supérieur cranté */}
            <div className="w-full h-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-t-2xl border-b border-dashed border-slate-600 shadow-md flex items-center justify-between px-3 relative overflow-hidden">
              {/* Lignes crantées */}
              <div className="flex gap-1">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-6 bg-slate-500/50" />
                ))}
              </div>

              {/* Languette de tirage avec flèche */}
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-black tracking-wider uppercase shadow-lg animate-pulse">
                <span>Tirer</span>
                <ChevronRight className="w-3.5 h-3.5 inline" />
              </div>
            </div>

            {/* Trait de déchirure dynamique */}
            {tearProgress > 0 && !isTorn && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-amber-400 shadow-[0_0_8px_#f59e0b]"
                style={{ width: `${tearProgress}%` }}
              />
            )}
          </div>

          {/* ================= CORPS INFÉRIEUR DU BOOSTER ================= */}
          <div className="w-full h-full rounded-2xl overflow-hidden relative border border-slate-700/60 shadow-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 flex flex-col justify-between p-4 z-20">
            {/* Reflet métallisé de sachet foil */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(115deg, transparent 25%, rgba(255, 255, 255, 0.2) 48%, rgba(147, 197, 253, 0.35) 52%, transparent 65%)',
              }}
            />

            {/* Nom de la série */}
            <div className="text-center pt-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 drop-shadow">
                {setInfo.series}
              </span>
            </div>

            {/* Illustration centrale du Booster */}
            <div className="flex flex-col items-center text-center my-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-500 p-1 mb-2 shadow-lg shadow-sky-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-black text-white tracking-wide uppercase drop-shadow">
                {setInfo.name}
              </h3>
            </div>

            {/* Bas de sachet scellé */}
            <div className="w-full pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-semibold flex justify-between items-center">
              <span>10 Cartes</span>
              <span className="text-amber-400">Foil Garanti</span>
            </div>
          </div>
        </div>

        {/* Bouton alternatif d'ouverture rapide */}
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={onFastOpen}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center gap-2 transition-all active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Ouverture Rapide (Passer le geste)
          </button>
        </div>
      </div>
    </div>
  );
};
