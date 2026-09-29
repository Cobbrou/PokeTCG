import React, { useState, useRef } from 'react';
import { PokemonCard, CardRarity } from '../types/pokemon';
import { soundManager } from '../utils/audio';
import { Sparkles, Eye, Star } from 'lucide-react';

interface Card3DProps {
  card: PokemonCard;
  isFlipped?: boolean; // true = face visible, false = dos visible
  onFlip?: () => void;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadges?: boolean;
  countOwned?: number;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onInspect?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  card,
  isFlipped = true,
  onFlip,
  interactive = true,
  size = 'md',
  showBadges = true,
  countOwned,
  isFavorite,
  onToggleFavorite,
  onInspect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glintPos, setGlintPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Tailles prédéfinies avec ratio officiel Pokémon (~1 : 1.396)
  const sizeClasses = {
    sm: 'w-32 h-44 text-xs',
    md: 'w-48 h-67 text-sm',
    lg: 'w-64 h-89 text-base',
    xl: 'w-80 h-112 text-lg',
  }[size];

  // Détection des mouvements pour le tilt 3D et le reflet holographique
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Calcul des angles de rotation (max +/- 18 degrés)
    const rY = ((x / rect.width) - 0.5) * 36;
    const rX = -((y / rect.height) - 0.5) * 36;

    setRotateX(rX);
    setRotateY(rY);
    setGlintPos({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isFlipped && (card.rarity === 'Illustration Rare' || card.rarity === 'Special Illustration Rare' || card.rarity === 'Hyper Rare')) {
      soundManager.playSparkle();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlintPos({ x: 50, y: 50 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!interactive) return;
    e.stopPropagation();
    if (onFlip) {
      soundManager.playCardFlip();
      onFlip();
    } else if (onInspect) {
      onInspect();
    }
  };

  // Styles de reflets selon la rareté
  const getFoilStyle = (rarity: CardRarity) => {
    if (!isFlipped || !isHovered) return {};

    switch (rarity) {
      case 'Hyper Rare':
        return {
          background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(255, 235, 120, 0.8) 0%, rgba(255, 180, 0, 0.5) 45%, rgba(180, 110, 0, 0.2) 80%, transparent 100%)`,
          mixBlendMode: 'color-dodge' as const,
        };
      case 'Special Illustration Rare':
      case 'Illustration Rare':
        return {
          background: `
            radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(255, 255, 255, 0.9) 0%, transparent 40%),
            linear-gradient(${glintPos.x * 3.6}deg, rgba(255,0,128,0.4) 0%, rgba(0,255,200,0.4) 25%, rgba(255,230,0,0.4) 50%, rgba(140,0,255,0.4) 75%, rgba(255,0,128,0.4) 100%)
          `,
          mixBlendMode: 'color-dodge' as const,
        };
      case 'Double Rare':
      case 'Rare Holo':
        return {
          background: `linear-gradient(${glintPos.x * 2.5}deg, transparent 20%, rgba(255, 255, 255, 0.5) 48%, rgba(130, 220, 255, 0.7) 50%, rgba(255, 180, 255, 0.6) 52%, transparent 75%)`,
          mixBlendMode: 'color-dodge' as const,
        };
      default:
        // Reflet glacé standard
        return {
          background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
          mixBlendMode: 'screen' as const,
        };
    }
  };

  const getRarityBadgeColor = (rarity: CardRarity) => {
    switch (rarity) {
      case 'Hyper Rare':
        return 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-amber-950 font-bold border-amber-300';
      case 'Special Illustration Rare':
        return 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold border-pink-400';
      case 'Illustration Rare':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium border-cyan-400';
      case 'Double Rare':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium border-emerald-400';
      case 'Rare Holo':
      case 'Rare':
        return 'bg-indigo-600/90 text-indigo-100 border-indigo-400';
      case 'Uncommon':
        return 'bg-slate-700/90 text-slate-200 border-slate-500';
      default:
        return 'bg-slate-800/80 text-slate-300 border-slate-600';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative select-none ${sizeClasses} perspective-1000 cursor-pointer group`}
    >
      {/* Conteneur 3D avec rotation */}
      <div
        className="w-full h-full duration-150 ease-out preserve-3d rounded-2xl shadow-xl transition-transform"
        style={{
          transform: `
            rotateX(${rotateX}deg) 
            rotateY(${isFlipped ? rotateY : rotateY + 180}deg) 
            scale(${isHovered ? 1.04 : 1})
          `,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s ease-out',
        }}
      >
        {/* ================= RECTO (Face de la carte) ================= */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden shadow-2xl bg-slate-900 border border-slate-700/60 flex flex-col">
          <img
            src={card.images.large || card.images.small}
            alt={card.name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl pointer-events-none select-none"
          />

          {/* Calque de reflet Foil / Holographique interactif */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
            style={{
              ...getFoilStyle(card.rarity),
              opacity: isHovered ? 0.9 : 0,
            }}
          />

          {/* Effet d'étincelles pour les Ultra Rares */}
          {(card.rarity === 'Special Illustration Rare' || card.rarity === 'Hyper Rare') && (
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-40 mix-blend-color-dodge bg-gradient-to-tr from-transparent via-white/20 to-transparent"
              style={{
                backgroundPosition: `${glintPos.x}% ${glintPos.y}%`,
              }}
            />
          )}

          {/* Boutons d'action rapides au survol */}
          {interactive && (
            <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
              {onToggleFavorite && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite();
                  }}
                  className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
                    isFavorite
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/50'
                      : 'bg-black/60 text-white/80 hover:bg-black/90'
                  }`}
                  title="Ajouter aux favoris"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                </button>
              )}
              {onInspect && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onInspect();
                  }}
                  className="p-1.5 rounded-full bg-black/60 text-white/80 hover:bg-black/90 backdrop-blur-md transition-colors"
                  title="Inspecter en haute résolution"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Badge de Rareté */}
          {showBadges && (
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none z-10">
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] tracking-wide border shadow-md backdrop-blur-md flex items-center gap-1 ${getRarityBadgeColor(
                  card.rarity
                )}`}
              >
                {(card.rarity === 'Special Illustration Rare' || card.rarity === 'Hyper Rare') && (
                  <Sparkles className="w-2.5 h-2.5 inline animate-pulse" />
                )}
                {card.rarity}
              </span>

              {typeof countOwned === 'number' && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-white border border-slate-700 shadow-md">
                  x{countOwned}
                </span>
              )}
            </div>
          )}
        </div>

        {/* ================= VERSO (Dos officiel Pokémon) ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-indigo-950 to-blue-950 border-2 border-amber-600/70 p-2 flex flex-col items-center justify-center"
          style={{
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Design authentique du dos de carte Pokémon */}
          <div className="w-full h-full rounded-xl border border-amber-500/40 relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-800 to-indigo-900">
            {/* Pokéball stylisée centrale */}
            <div className="w-24 h-24 rounded-full border-4 border-slate-900 bg-gradient-to-b from-red-600 50% to-slate-100 50% relative flex items-center justify-center shadow-xl">
              <div className="w-full h-2 bg-slate-900 absolute top-1/2 -translate-y-1/2" />
              <div className="w-8 h-8 rounded-full border-4 border-slate-900 bg-white relative z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-300 border border-slate-600" />
              </div>
            </div>

            {/* Bandeaux courbés haut et bas */}
            <div className="absolute top-3 text-[10px] uppercase font-black tracking-widest text-amber-400 drop-shadow">
              Pokémon
            </div>
            <div className="absolute bottom-3 text-[8px] uppercase font-bold tracking-wider text-slate-300 drop-shadow">
              Trading Card Game
            </div>

            {/* Texture de lumière */}
            <div className="absolute inset-0 bg-radial from-transparent via-blue-500/10 to-black/40 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
