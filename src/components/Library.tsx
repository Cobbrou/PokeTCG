import React, { useState, useMemo } from 'react';
import { PokemonCard, CardType } from '../types/pokemon';
import { CARDS_DATABASE, EXPANSION_SETS } from '../data/pokemonData';
import { useCollectionStore } from '../store/useCollectionStore';
import { Card3D } from './Card3D';
import { CardInspectorModal } from './CardInspectorModal';
import {
  Search,
  Sparkles,
  Trophy,
  Layers,
  CheckCircle2,
  CircleDashed,
} from 'lucide-react';

export const Library: React.FC = () => {
  const collection = useCollectionStore((state) => state.collection);
  const toggleFavorite = useCollectionStore((state) => state.toggleFavorite);

  const [selectedSet, setSelectedSet] = useState<string>('sv3pt5');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [filterOwned, setFilterOwned] = useState<'ALL' | 'OWNED' | 'MISSING' | 'FAVORITES'>('ALL');
  const [inspectingCard, setInspectingCard] = useState<PokemonCard | null>(null);

  // Cartes de l'extension sélectionnée
  const setCards = useMemo(() => {
    if (selectedSet === 'ALL') return CARDS_DATABASE;
    return CARDS_DATABASE.filter((card) => card.setId === selectedSet);
  }, [selectedSet]);

  // Statistiques de complétion
  const stats = useMemo(() => {
    const totalSetCards = setCards.length;
    let uniqueOwned = 0;
    let totalCopies = 0;
    let ultraRaresCount = 0;

    setCards.forEach((card) => {
      const item = collection[card.id];
      if (item && item.count > 0) {
        uniqueOwned++;
        totalCopies += item.count;
        if (
          card.rarity === 'Illustration Rare' ||
          card.rarity === 'Special Illustration Rare' ||
          card.rarity === 'Hyper Rare' ||
          card.rarity === 'Double Rare'
        ) {
          ultraRaresCount += item.count;
        }
      }
    });

    const completionRate = totalSetCards > 0 ? Math.round((uniqueOwned / totalSetCards) * 100) : 0;

    return {
      totalSetCards,
      uniqueOwned,
      totalCopies,
      ultraRaresCount,
      completionRate,
    };
  }, [setCards, collection]);

  // Filtrage des cartes
  const filteredCards = useMemo(() => {
    return setCards.filter((card) => {
      // Recherche textuelle
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = card.name.toLowerCase().includes(query);
        const matchesNumber = card.number.includes(query);
        if (!matchesName && !matchesNumber) return false;
      }

      // Filtre Rareté
      if (selectedRarity !== 'ALL' && card.rarity !== selectedRarity) {
        return false;
      }

      // Filtre Type
      if (selectedType !== 'ALL' && (!card.types || !card.types.includes(selectedType as CardType))) {
        return false;
      }

      // Filtre Possession
      const item = collection[card.id];
      const isOwned = item && item.count > 0;

      if (filterOwned === 'OWNED' && !isOwned) return false;
      if (filterOwned === 'MISSING' && isOwned) return false;
      if (filterOwned === 'FAVORITES' && (!item || !item.isFavorite)) return false;

      return true;
    });
  }, [setCards, searchQuery, selectedRarity, selectedType, filterOwned, collection]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* ================= BARRE DE STATISTIQUES ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Cartes uniques</span>
            <div className="text-xl font-black text-white">
              {stats.uniqueOwned} <span className="text-xs text-slate-500 font-normal">/ {stats.totalSetCards}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Complétion du Set</span>
            <div className="text-xl font-black text-emerald-400">{stats.completionRate}%</div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Ultra & Spéciales</span>
            <div className="text-xl font-black text-amber-400">{stats.ultraRaresCount}</div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Exemplaires</span>
            <div className="text-xl font-black text-purple-300">{stats.totalCopies}</div>
          </div>
        </div>
      </div>

      {/* ================= SÉLECTEUR D'EXTENSION & FILTRES ================= */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl">
        {/* Choix de l'extension */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedSet('ALL')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedSet === 'ALL'
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Toutes ({CARDS_DATABASE.length})</span>
            </button>
            {EXPANSION_SETS.map((set) => {
              const count = CARDS_DATABASE.filter((c) => c.setId === set.id).length;
              return (
                <button
                  key={set.id}
                  type="button"
                  onClick={() => setSelectedSet(set.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    selectedSet === set.id
                      ? 'text-white shadow-lg'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                  style={{
                    backgroundColor: selectedSet === set.id ? set.accentColor : undefined,
                    boxShadow: selectedSet === set.id ? `0 4px 14px ${set.accentColor}40` : undefined,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: set.accentColor }}
                  />
                  <span>{set.name}</span>
                  <span className="opacity-75 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Recherche */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par nom ou numéro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Filtres secondaires */}
        <div className="flex flex-wrap items-center gap-3 pt-6 text-xs">
          {/* État de possession */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
            {(
              [
                { id: 'ALL', label: 'Toutes' },
                { id: 'OWNED', label: 'Possédées' },
                { id: 'MISSING', label: 'Manquantes' },
                { id: 'FAVORITES', label: 'Favoris' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterOwned(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  filterOwned === tab.id
                    ? 'bg-sky-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Filtre Rareté */}
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">Toutes les raretés</option>
            <option value="Common">Commune</option>
            <option value="Uncommon">Peu Commune</option>
            <option value="Rare Holo">Rare Holo</option>
            <option value="Double Rare">Double Rare (ex)</option>
            <option value="Illustration Rare">Illustration Rare</option>
            <option value="Special Illustration Rare">Spécial Illustration Rare</option>
            <option value="Hyper Rare">Hyper Rare (Gold)</option>
          </select>

          {/* Filtre Type */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">Tous les types</option>
            <option value="Grass">Plante</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Lightning">Électrique</option>
            <option value="Psychic">Psy</option>
            <option value="Fighting">Combat</option>
            <option value="Dragon">Dragon</option>
            <option value="Colorless">Incolore</option>
          </select>
        </div>
      </div>

      {/* ================= GRILLE DE COLLECTION ================= */}
      {filteredCards.length === 0 ? (
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-12 text-center">
          <CircleDashed className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-spin" />
          <h3 className="text-lg font-bold text-white mb-1">Aucune carte trouvée</h3>
          <p className="text-xs text-slate-400">
            Essayez de modifier vos filtres ou d’ouvrir de nouveaux boosters pour agrandir votre collection !
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {filteredCards.map((card) => {
            const item = collection[card.id];
            const isOwned = item && item.count > 0;

            return (
              <div key={card.id} className="flex flex-col items-center">
                {isOwned ? (
                  <Card3D
                    card={card}
                    isFlipped={true}
                    size="md"
                    countOwned={item.count}
                    isFavorite={item.isFavorite}
                    onToggleFavorite={() => toggleFavorite(card.id)}
                    onInspect={() => setInspectingCard(card)}
                  />
                ) : (
                  /* Carte manquante : Silhouette de collection */
                  <div
                    onClick={() => setInspectingCard(card)}
                    className="w-48 h-67 rounded-2xl bg-slate-900/60 border-2 border-dashed border-slate-800 hover:border-slate-700 p-4 flex flex-col items-center justify-between text-center cursor-pointer transition-all duration-200 group hover:bg-slate-900"
                  >
                    <span className="text-[10px] font-mono text-slate-500">#{card.number}</span>
                    <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                      <CircleDashed className="w-12 h-12 text-slate-400" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 block truncate max-w-[140px]">
                        {card.name}
                      </span>
                      <span className="text-[10px] text-slate-600 font-bold block mt-0.5">
                        {card.rarity}
                      </span>
                    </div>
                  </div>
                )}
                <span className="text-xs font-semibold text-slate-300 mt-2 text-center truncate max-w-[170px]">
                  {card.name}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Modale d'inspection */}
      <CardInspectorModal
        card={inspectingCard}
        collectionInfo={inspectingCard ? collection[inspectingCard.id] : undefined}
        onClose={() => setInspectingCard(null)}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};
