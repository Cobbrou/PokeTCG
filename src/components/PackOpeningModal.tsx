import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { PokemonCard, ExpansionSet } from '../types/pokemon';
import { Card3D } from './Card3D';
import { InteractivePackTear } from './InteractivePackTear';
import { soundManager } from '../utils/audio';
import { useCollectionStore } from '../store/useCollectionStore';
import {
  Sparkles,
  ArrowRight,
  CheckCheck,
  RotateCcw,
  X,
  Flame,
  Eye,
  Sliders,
} from 'lucide-react';

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
  const cardTrickEnabled = useCollectionStore((state) => state.cardTrickEnabled);
  const toggleCardTrick = useCollectionStore((state) => state.toggleCardTrick);
  const fastOpenEnabled = useCollectionStore((state) => state.fastOpenEnabled);

  // Étapes : 'TEAR' (Déchirure) | 'REVEAL' (Révélation carte par carte) | 'SUMMARY' (Récapitulatif)
  const [stage, setStage] = useState<'TEAR' | 'REVEAL' | 'SUMMARY'>('TEAR');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isPeeking, setIsPeeking] = useState(false);
  const [screenShake, setScreenShake] = useState(false);

  // Réordonnancement avec le rituel officiel du Card Trick si activé
  const displayCards = useMemo(() => {
    if (!cardTrickEnabled || isGodPack || cards.length < 10) {
      return cards;
    }
    // Dans le card trick réel : les cartes communes sont devant, la rare majeure est placée en dernier
    // Trouvons la carte de plus haute rareté pour la placer à la fin
    const rarityRank = (rarity: string) => {
      switch (rarity) {
        case 'Hyper Rare': return 8;
        case 'Special Illustration Rare': return 7;
        case 'Illustration Rare': return 6;
        case 'Double Rare': return 5;
        case 'Rare Holo': return 4;
        case 'Rare': return 3;
        case 'Uncommon': return 2;
        default: return 1;
      }
    };

    const sorted = [...cards].sort((a, b) => rarityRank(a.rarity) - rarityRank(b.rarity));
    return sorted;
  }, [cards, cardTrickEnabled, isGodPack]);

  // Initialisation à l'ouverture d'un nouveau booster
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setFlippedCards({});
      setScreenShake(false);
      setIsPeeking(false);

      if (fastOpenEnabled) {
        setStage('REVEAL');
      } else {
        setStage('TEAR');
      }

      if (isGodPack) {
        triggerConfetti(true);
      }
    }
  }, [isOpen, cards, isGodPack, fastOpenEnabled]);

  const triggerConfetti = (intense = false) => {
    confetti({
      particleCount: intense ? 160 : 70,
      spread: intense ? 100 : 70,
      origin: { y: 0.6 },
      colors: intense
        ? ['#ffd700', '#ff007f', '#00e5ff', '#ffffff']
        : ['#3b82f6', '#10b981', '#f59e0b'],
    });
  };

  if (!isOpen || cards.length === 0) return null;

  const currentCard = displayCards[currentIndex];
  const isCurrentFlipped = !!flippedCards[currentIndex];

  const handleFlipCurrent = () => {
    if (!isCurrentFlipped) {
      setFlippedCards((prev) => ({ ...prev, [currentIndex]: true }));
      soundManager.playCardFlip();
      setIsPeeking(false);

      const isUltra =
        currentCard.rarity === 'Special Illustration Rare' ||
        currentCard.rarity === 'Hyper Rare' ||
        currentCard.rarity === 'Illustration Rare';
      const isRare = currentCard.rarity === 'Double Rare' || currentCard.rarity === 'Rare Holo';

      if (isUltra) {
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 500);
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
    setIsPeeking(false);
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStage('SUMMARY');
    }
  };

  const handleRevealAll = () => {
    const allFlipped: Record<number, boolean> = {};
    displayCards.forEach((_, i) => {
      allFlipped[i] = true;
    });
    setFlippedCards(allFlipped);
    setStage('SUMMARY');
    soundManager.playSparkle();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-2xl p-4 overflow-y-auto ${
        screenShake ? 'animate-screenshake' : ''
      }`}
    >
      {/* Bouton Fermer */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Bannière God Pack */}
      {isGodPack && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-2xl flex items-center gap-2 animate-bounce z-40">
          <Flame className="w-5 h-5 text-yellow-300" />
          ✨ GOD PACK LÉGENDAIRE DÉCOUVERT ! ✨
          <Flame className="w-5 h-5 text-yellow-300" />
        </div>
      )}

      {/* ================= ÉTAPE 1 : DÉCHIRURE PHYSIQUE DU BOOSTER ================= */}
      {stage === 'TEAR' && (
        <div className="flex flex-col items-center">
          <InteractivePackTear
            setInfo={setInfo}
            onTornComplete={() => setStage('REVEAL')}
            onFastOpen={() => setStage('REVEAL')}
          />
        </div>
      )}

      {/* ================= ÉTAPE 2 : RÉVÉLATION SUSPENSE CARTE PAR CARTE ================= */}
      {stage === 'REVEAL' && (
        <div className="flex flex-col items-center max-w-xl w-full">
          {/* Entête du tirage */}
          <div className="text-center mb-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400">
              {setInfo.name}
            </span>
            <h2 className="text-2xl font-black text-white mt-0.5">
              Carte {currentIndex + 1} / {displayCards.length}
            </h2>

            {/* Indicateurs de progression */}
            <div className="flex gap-1.5 mt-3 justify-center">
              {displayCards.map((_, idx) => (
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

          {/* Carte 3D interactive */}
          <div className="my-2 flex flex-col items-center relative">
            {/* Bannière de découverte exceptionnelle */}
            {isCurrentFlipped &&
              (currentCard.rarity === 'Special Illustration Rare' ||
                currentCard.rarity === 'Hyper Rare' ||
                currentCard.rarity === 'Illustration Rare') && (
                <div className="mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-pink-500/50 animate-bounce flex items-center gap-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  CARTE D'EXCEPTION DÉCOUVERTE !
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                </div>
              )}

            {/* Aura lumineuse si Ultra Rare dévoilée */}
            {isCurrentFlipped &&
              (currentCard.rarity === 'Special Illustration Rare' ||
                currentCard.rarity === 'Hyper Rare' ||
                currentCard.rarity === 'Illustration Rare') && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/40 via-pink-500/40 to-purple-500/40 blur-3xl animate-pulse pointer-events-none scale-125" />
              )}

            <Card3D
              card={currentCard}
              isFlipped={isCurrentFlipped}
              onFlip={handleFlipCurrent}
              size="xl"
              peekAmount={isPeeking ? 18 : 0}
            />

            <p className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
              {!isCurrentFlipped ? (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin" /> Cliquez sur la carte pour la dévoiler !
                </>
              ) : (
                <>Pointez votre souris pour faire jouer les reflets holographiques</>
              )}
            </p>
          </div>

          {/* Outils de suspense & Actions */}
          <div className="flex flex-col items-center gap-3 mt-4 w-full">
            <div className="flex items-center gap-4">
              {/* Bouton Edge Peek (entrevoir la tranche) */}
              {!isCurrentFlipped && (
                <button
                  type="button"
                  onMouseDown={() => setIsPeeking(true)}
                  onMouseUp={() => setIsPeeking(false)}
                  onTouchStart={() => setIsPeeking(true)}
                  onTouchEnd={() => setIsPeeking(false)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 border border-slate-700 transition-colors"
                  title="Maintenez pour entrevoir la couleur de la tranche"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" /> Entrevoir la tranche
                </button>
              )}

              {/* Bouton Révéler / Carte Suivante */}
              {isCurrentFlipped ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/30 flex items-center gap-2 transform active:scale-95 transition-all"
                >
                  {currentIndex < displayCards.length - 1 ? (
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
                  <Sparkles className="w-4 h-4 fill-current" /> Révéler la carte
                </button>
              )}
            </div>

            {/* Options secondaires */}
            <div className="flex items-center gap-6 mt-2 text-xs text-slate-400">
              <button
                type="button"
                onClick={handleRevealAll}
                className="hover:text-white transition-colors"
              >
                Tout révéler
              </button>

              <button
                type="button"
                onClick={toggleCardTrick}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Sliders className="w-3.5 h-3.5 text-sky-400" />
                <span>Card Trick (Rare en dernier) :</span>
                <span className={cardTrickEnabled ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {cardTrickEnabled ? 'Activé' : 'Désactivé'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= ÉTAPE 3 : RÉCAPITULATIF DES 10 CARTES ================= */}
      {stage === 'SUMMARY' && (
        <div className="flex flex-col items-center w-full max-w-6xl py-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
              <CheckCheck className="w-4 h-4" /> Booster Déballé & Enregistré
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Récapitulatif de votre Tirage
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Les cartes ont été automatiquement sauvegardées dans votre collection locale.
            </p>
          </div>

          {/* Grille des 10 cartes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full justify-items-center mb-8">
            {displayCards.map((card, idx) => (
              <div key={`${card.id}-${idx}`} className="flex flex-col items-center">
                <Card3D card={card} isFlipped={true} size="md" />
                <span className="text-xs font-semibold text-slate-300 mt-2 text-center truncate max-w-[150px]">
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          {/* Boutons d'actions finaux */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {canOpenAnother && onOpenAnother && (
              <button
                type="button"
                onClick={() => {
                  onOpenAnother();
                  if (!fastOpenEnabled) setStage('TEAR');
                }}
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
