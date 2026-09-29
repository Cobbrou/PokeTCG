import React from 'react';
import { PokemonCard, CardInCollection, CRAFTING_RATES } from '../types/pokemon';
import { useCollectionStore } from '../store/useCollectionStore';
import { Card3D } from './Card3D';
import { X, Star, Sparkles, Shield, Swords } from 'lucide-react';

interface CardInspectorModalProps {
  card: PokemonCard | null;
  collectionInfo?: CardInCollection;
  onClose: () => void;
  onToggleFavorite?: (cardId: string) => void;
}

export const CardInspectorModal: React.FC<CardInspectorModalProps> = ({
  card,
  collectionInfo,
  onClose,
  onToggleFavorite,
}) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4 overflow-y-auto">
      {/* Conteneur de modale */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start my-auto">
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Partie Gauche : Carte 3D interactive */}
        <div className="flex flex-col items-center shrink-0">
          <Card3D
            card={card}
            isFlipped={true}
            size="xl"
            showBadges={false}
          />
          <span className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Pointez votre souris pour tester les reflets
          </span>
        </div>

        {/* Partie Droite : Fiche Technique de la Carte */}
        <div className="flex flex-col flex-1 w-full">
          {/* En-tête */}
          <div className="flex items-start justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                  {card.setName}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  #{card.number}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
                {card.name}
              </h2>
              {card.subtypes && card.subtypes.length > 0 && (
                <div className="flex gap-2 mt-1">
                  {card.subtypes.map((sub, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* PV & Type */}
            {card.hp && (
              <div className="text-right">
                <span className="text-xs uppercase text-slate-400 font-bold">PV</span>
                <div className="text-2xl font-black text-rose-400">{card.hp}</div>
              </div>
            )}
          </div>

          {/* Rareté & Artiste */}
          <div className="grid grid-cols-2 gap-4 py-4 border-b border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Rareté officielle</span>
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {card.rarity}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Illustrateur</span>
              <span className="font-semibold text-slate-200">
                {card.artist || 'Non crédité'}
              </span>
            </div>
          </div>

          {/* Attaques */}
          {card.attacks && card.attacks.length > 0 && (
            <div className="py-4 border-b border-slate-800">
              <h4 className="text-xs uppercase font-extrabold text-slate-400 mb-3 flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-sky-400" /> Attaques & Capacités
              </h4>
              <div className="space-y-3">
                {card.attacks.map((atk, index) => (
                  <div key={index} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-white">{atk.name}</span>
                      {atk.damage && (
                        <span className="font-black text-rose-400 text-sm">
                          {atk.damage}
                        </span>
                      )}
                    </div>
                    {atk.text && (
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {atk.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Statut de possession du joueur */}
          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <Shield className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Exemplaires possédés</span>
                <span className="text-sm font-bold text-white">
                  {collectionInfo ? `${collectionInfo.count} dans votre collection` : 'Non possédé'}
                </span>
              </div>
            </div>

            {onToggleFavorite && collectionInfo && collectionInfo.count > 0 ? (
              <button
                type="button"
                onClick={() => onToggleFavorite(card.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  collectionInfo.isFavorite
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Star className={`w-4 h-4 ${collectionInfo.isFavorite ? 'fill-current' : ''}`} />
                {collectionInfo.isFavorite ? 'Favori' : 'Ajouter aux favoris'}
              </button>
            ) : (
              <CraftInspectorAction card={card} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CraftInspectorAction: React.FC<{ card: PokemonCard }> = ({ card }) => {
  const stardust = useCollectionStore((state) => state.stardust);
  const craftCard = useCollectionStore((state) => state.craftCard);
  const cost = CRAFTING_RATES[card.rarity]?.craftCost ?? 100;
  const canAfford = stardust >= cost;

  return (
    <button
      type="button"
      onClick={() => {
        if (canAfford) {
          craftCard(card.id);
        }
      }}
      disabled={!canAfford}
      className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
        canAfford
          ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 active:scale-95'
          : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
      }`}
      title={canAfford ? `Forger cette carte pour ${cost} Poussières` : `Poussière insuffisante (${stardust}/${cost})`}
    >
      <Sparkles className="w-4 h-4 text-cyan-300" />
      <span>Forger cette carte ({cost} ✨)</span>
    </button>
  );
};

