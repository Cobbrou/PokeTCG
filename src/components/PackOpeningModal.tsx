import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PokemonCard, ExpansionSet } from '../types/pokemon';
import { Card3D } from './Card3D';
import { soundManager } from '../utils/audio';
import { Sparkles, ArrowRight, CheckCheck, RotateCcw, X, Flame } from 'lucide-react';

interface PackOpeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: PokemonCard[];
  setInfo: ExpansionSet;
  isGodPack?: boolean;
  onOpenAnother?: () => void;
  canOpenAnother?: boolean;
}

export const PackOpeningModal: React.FC<PackOpeningModalProps> = ({
  isOpen,
  onClose,
  cards,
  setInfo,
  isGodPack = false,
  onOpenAnother,
  canOpenAnother = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [showSummary, setShowSummary] = useState(false);

  // Réinitialisation à l'ouverture d'un nouveau pack
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setFlippedCards({});
      setShowSummary(false);

      if (isGodPack) {
        triggerConfetti(true);
      }
    }
  }, [isOpen, cards, isGodPack]);

  const triggerConfetti = (intense = false) => {
    confetti({
      particleCount: intense ? 150 : 80,
      spread: intense ? 100 : 70,
      origin: { y: 0.6 },
      colors: intense ? ['#ffd700', '#ff007f', '#00e5ff', '#ffffff'] : ['#3b82f6', '#10b981', '#f59e0b'],
    });
  };

  if (!isOpen || cards.length === 0) return null;

  const currentCard = cards[currentIndex];
  const isCurrentFlipped = !!flippedCards[currentIndex];

  const handleFlipCurrent = () => {
    if (!isCurrentFlipped) {
      setFlippedCards((prev) => ({ ...prev, [currentIndex]: true }));
      soundManager.playCardFlip();

      // Vérifier si carte rare ou ultra-rare
      const isUltra =
        currentCard.rarity === 'Special Illustration Rare' ||
        currentCard.rarity === 'Hyper Rare' ||
        currentCard.rarity === 'Illustration Rare';
      const isRare = currentCard.rarity === 'Double Rare' || currentCard.rarity === 'Rare Holo';

      if (isUltra) {
        soundManager.playUltraRareFanfare();
        triggerConfetti(true);
      } else if (isRare) {
        soundManager.playSparkle();
        triggerConfetti(false);
      }
    }
  };

  const handleNext = () => {
    soundManager.playCardSlide();
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Passer au récapitulatif
      setShowSummary(true);
    }
  };

  const handleRevealAll = () => {
    const allFlipped: Record<number, boolean> = {};
    cards.forEach((_, i) => {
      allFlipped[i] = true;
    });
    setFlippedCards(allFlipped);
    setShowSummary(true);
    soundManager.playSparkle();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 overflow-y-auto">
      {/* Bouton Fermer */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Bannière God Pack si applicable */}
      {isGodPack && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white font-black text-sm tracking-wider uppercase shadow-2xl flex items-center gap-2 animate-bounce z-40">
          <Flame className="w-5 h-5 text-yellow-300" />
          ✨ GOD PACK LÉGENDAIRE DÉCOUVERT ! ✨
          <Flame className="w-5 h-5 text-yellow-300" />
        </div>
      )}

      {/* ================= VUE 1 : RÉVÉLATION CARTE PAR CARTE ================= */}
      {!showSummary ? (
        <div className="flex flex-col items-center max-w-xl w-full">
          {/* Entête du tirage */}
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400">
              {setInfo.name}
            </span>
            <h2 className="text-2xl font-black text-white mt-1">
              Carte {currentIndex + 1} / {cards.length}
            </h2>
            <div className="flex gap-1.5 mt-3 justify-center">
              {cards.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-sky-400'
                      : flippedCards[idx]
                      ? 'w-3 bg-emerald-500'
                      : 'w-3 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Carte 3D interactive au centre */}
          <div className="my-4 flex flex-col items-center">
            <Card3D
              card={currentCard}
              isFlipped={isCurrentFlipped}
              onFlip={handleFlipCurrent}
              size="xl"
            />
            <p className="text-xs text-slate-400 mt-4 flex items-center gap-1.5">
              {!isCurrentFlipped ? (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin" /> Cliquez sur la carte pour la retourner !
                </>
              ) : (
                <>Bougez votre curseur pour admirer les reflets holographiques</>
              )}
            </p>
          </div>

          {/* Barre d'action */}
          <div className="flex items-center gap-4 mt-6">
            <button
              type="button"
              onClick={handleRevealAll}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Tout révéler
            </button>

            {isCurrentFlipped ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/30 flex items-center gap-2 transform active:scale-95 transition-all"
              >
                {currentIndex < cards.length - 1 ? (
                  <>
                    Carte suivante <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Voir le récapitulatif <CheckCheck className="w-4 h-4" />
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFlipCurrent}
                className="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/30 flex items-center gap-2 transform active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-current" /> Révéler
              </button>
            )}
          </div>
        </div>
      ) : (
        /* ================= VUE 2 : RÉCAPITULATIF DES 10 CARTES ================= */
        <div className="flex flex-col items-center w-full max-w-6xl py-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
              <CheckCheck className="w-4 h-4" /> Tirage complété
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Cartes obtenues dans ce Booster
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Toutes les cartes ont été ajoutées automatiquement à votre bibliothèque de collection !
            </p>
          </div>

          {/* Grille des 10 cartes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full justify-items-center mb-8">
            {cards.map((card, idx) => (
              <div key={`${card.id}-${idx}`} className="flex flex-col items-center">
                <Card3D card={card} isFlipped={true} size="md" />
                <span className="text-xs font-semibold text-slate-300 mt-2 text-center truncate max-w-[150px]">
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          {/* Boutons d'action finaux */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {canOpenAnother && onOpenAnother && (
              <button
                type="button"
                onClick={onOpenAnother}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25 flex items-center gap-2 transform active:scale-95 transition-all"
              >
                <RotateCcw className="w-4 h-4" /> Ouvrir un autre booster
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-all"
            >
              Aller à la bibliothèque
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
