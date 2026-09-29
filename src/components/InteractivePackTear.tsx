import React, { useState, useRef, useEffect } from 'react';
import { ExpansionSet } from '../types/pokemon';
import { soundManager } from '../utils/audio';
import { Scissors, Zap, Sparkles, ChevronRight, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

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
  const [tearProgress, setTearProgress] = useState(0); // 0 à 100%
  const [isDragging, setIsDragging] = useState(false);
  const [isTorn, setIsTorn] = useState(false);
  const [isBursting, setIsBursting] = useState(false);
  const [cardsEjected, setCardsEjected] = useState(false);

  // 3D Tilt du booster
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const startXRef = useRef(0);
  const currentProgressRef = useRef(0);

  const handlePointerDown = (clientX: number) => {
    if (isTorn || isBursting) return;
    setIsDragging(true);
    startXRef.current = clientX;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || isTorn || isBursting) return;
    const deltaX = clientX - startXRef.current;
    const maxDistance = 260;
    const progress = Math.min(Math.max((deltaX / maxDistance) * 100, 0), 100);

    currentProgressRef.current = progress;
    setTearProgress(progress);

    if (Math.random() > 0.3) {
      soundManager.playTearDrag(progress / 100);
    }

    if (progress >= 85) {
      triggerEpicTear();
    }
  };

  const handlePointerUp = () => {
    if (!isDragging || isTorn || isBursting) return;
    setIsDragging(false);

    if (currentProgressRef.current > 65) {
      triggerEpicTear();
    } else {
      setTearProgress(0);
      currentProgressRef.current = 0;
    }
  };

  const triggerEpicTear = () => {
    if (isTorn || isBursting) return;
    setIsDragging(false);
    setIsBursting(true);
    setTearProgress(100);

    // Son de déflagration épique + basse
    soundManager.playEpicPackBurst();

    // Explosion de particules dorées et étincelles
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#38bdf8', '#fbbf24', '#f43f5e', '#ffffff'],
    });

    // 1. Déflagration & Rupture
    setTimeout(() => {
      setIsTorn(true);
    }, 150);

    // 2. Éjection majestueuse des cartes hors de la fente
    setTimeout(() => {
      setCardsEjected(true);
      soundManager.playCardSlide();
    }, 450);

    // 3. Transition fluide vers la révélation
    setTimeout(() => {
      onTornComplete();
    }, 1350);
  };

  // Événements globaux souris / tactile
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

  // Tilt interactif du booster
  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTorn) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = ((x / rect.width) - 0.5) * 20;
    const rX = -((y / rect.height) - 0.5) * 20;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleContainerMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-2xl py-6 overflow-hidden">
      {/* ================= ÉLÉMENTS DE MISE EN SCÈNE ÉPIQUE ================= */}
      
      {/* 1. Vortex d'énergie cosmique tournoyant en arrière-plan */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-3xl opacity-35 pointer-events-none animate-vortex"
        style={{
          background: `conic-gradient(from 0deg, ${setInfo.accentColor}, #8b5cf6, #ec4899, #38bdf8, ${setInfo.accentColor})`,
        }}
      />

      {/* 2. Éclair de flash blanc lors de la rupture */}
      {isBursting && (
        <div className="absolute inset-0 bg-white/40 pointer-events-none rounded-3xl animate-ping z-50" />
      )}

      {/* 3. Anneau d'onde de choc lors de la rupture */}
      {isBursting && (
        <div className="absolute w-72 h-72 rounded-full border-4 border-sky-400 pointer-events-none animate-shockwave z-40" />
      )}

      {/* Titre & Guide */}
      <div className="mb-6 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-400 text-xs font-bold mb-2 shadow-lg backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-amber-400" /> Ouverture de Booster Officiel
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase drop-shadow-lg">
          {setInfo.name}
        </h2>
        <p className="text-xs text-slate-300 mt-1 flex items-center justify-center gap-1.5">
          <Scissors className="w-3.5 h-3.5 text-sky-400 animate-pulse" /> Glissez la languette lumineuse pour déchirer le sachet
        </p>
      </div>

      {/* ================= CONTENEUR 3D DU BOOSTER ================= */}
      <div
        onMouseMove={handleContainerMouseMove}
        onMouseLeave={handleContainerMouseLeave}
        className={`relative w-72 h-[430px] rounded-3xl perspective-1500 z-20 flex items-center justify-center transition-transform ${
          !isTorn && !isDragging ? 'animate-float' : ''
        }`}
        style={{
          transform: !isTorn ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        }}
      >
        {/* ================= PAQUET DE 10 CARTES ÉJECTÉES ================= */}
        <div
          className={`absolute inset-x-6 h-[340px] rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-950 to-blue-950 border-2 border-amber-500/80 p-2 shadow-2xl transition-all duration-700 ease-out z-10 flex flex-col items-center justify-center ${
            cardsEjected
              ? '-translate-y-48 scale-110 shadow-[0_25px_70px_rgba(56,189,248,0.7)]'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Dos officiel de carte Pokémon */}
          <div className="w-full h-full rounded-xl border border-amber-400/40 relative flex items-center justify-center bg-gradient-to-b from-blue-800 to-indigo-900">
            <div className="w-24 h-24 rounded-full border-4 border-slate-900 bg-gradient-to-b from-red-600 50% to-slate-100 50% relative flex items-center justify-center shadow-xl">
              <div className="w-full h-2 bg-slate-900 absolute top-1/2 -translate-y-1/2" />
              <div className="w-8 h-8 rounded-full border-4 border-slate-900 bg-white relative z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-300 border border-slate-600" />
              </div>
            </div>
            <span className="absolute bottom-5 text-[10px] font-black uppercase tracking-widest text-amber-400 drop-shadow">
              10 Cartes Prêtes
            </span>
          </div>
        </div>

        {/* ================= BANDEAU SUPÉRIEUR CRANTÉ (DÉCHIRABLE) ================= */}
        <div
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          className={`absolute top-0 inset-x-0 h-12 z-30 cursor-grab active:cursor-grabbing transition-transform ${
            isTorn
              ? 'translate-x-full rotate-24 opacity-0 duration-500 pointer-events-none'
              : ''
          }`}
          style={{
            transform: !isTorn
              ? `translateX(${tearProgress * 1.1}px) rotate(${tearProgress * 0.22}deg)`
              : undefined,
          }}
        >
          {/* Lisière supérieure métallique crantée */}
          <div className="w-full h-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 rounded-t-3xl border-b border-dashed border-slate-600 shadow-xl flex items-center justify-between px-4 relative overflow-hidden">
            {/* Lignes de sertissage cranté */}
            <div className="flex gap-1">
              {Array.from({ length: 22 }).map((_, i) => (
                <div key={i} className="w-0.5 h-8 bg-slate-500/40" />
              ))}
            </div>

            {/* Languette Laser Fluo avec flèche animée */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[11px] font-black tracking-wider uppercase shadow-lg shadow-rose-500/50 animate-pulse">
              <span>Tirer</span>
              <ChevronRight className="w-4 h-4 inline stroke-[3]" />
            </div>
          </div>

          {/* Ligne laser luminescente de déchirure */}
          {tearProgress > 0 && !isTorn && (
            <div
              className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-sky-400 via-white to-amber-400 laser-seam"
              style={{ width: `${tearProgress}%` }}
            />
          )}

          {/* Faisceau lumineux fuyant sous la fente */}
          {tearProgress > 0 && !isTorn && (
            <div
              className="absolute -bottom-6 left-0 h-6 bg-gradient-to-b from-sky-400/50 to-transparent blur-sm pointer-events-none"
              style={{ width: `${tearProgress}%` }}
            />
          )}
        </div>

        {/* ================= CORPS INFÉRIEUR DU BOOSTER MÉTALLISÉ ================= */}
        <div className="w-full h-full rounded-3xl overflow-hidden relative border border-slate-700/70 shadow-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 flex flex-col justify-between p-5 z-20">
          {/* Reflet de brillance foil diagonal */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.25) 46%, rgba(147, 197, 253, 0.45) 50%, transparent 62%)',
            }}
          />

          {/* Header du booster */}
          <div className="text-center pt-8">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-400 drop-shadow">
              {setInfo.series}
            </span>
          </div>

          {/* Cœur visuel du booster */}
          <div className="flex flex-col items-center text-center my-auto">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 p-1 mb-3 shadow-xl shadow-sky-500/40 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-amber-400 animate-pulse" />
              </div>
            </div>
            <h3 className="text-xl font-black text-white tracking-wide uppercase drop-shadow-md">
              {setInfo.name}
            </h3>
            <span className="text-xs text-slate-400 mt-1">10 Cartes de Collection</span>
          </div>

          {/* Bas du booster cranté */}
          <div className="w-full pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex justify-between items-center">
            <span>{setInfo.totalCards} Cartes</span>
            <span className="text-amber-400 flex items-center gap-1 font-bold">
              <Sparkles className="w-3 h-3 fill-current" /> Foil Garanti
            </span>
          </div>
        </div>
      </div>

      {/* ================= BOUTONS D'ACTION RAPIDE ================= */}
      <div className="mt-8 flex items-center gap-4 relative z-20">
        <button
          type="button"
          onClick={triggerEpicTear}
          disabled={isBursting || isTorn}
          className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all active:scale-95"
        >
          <Scissors className="w-4 h-4" /> Déchirer maintenant
        </button>

        <button
          type="button"
          onClick={onFastOpen}
          disabled={isBursting || isTorn}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 flex items-center gap-2 transition-all active:scale-95"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" /> Passer l'animation
        </button>
      </div>
    </div>
  );
};
