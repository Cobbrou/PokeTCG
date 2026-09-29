import React from 'react';
import { useCollectionStore } from '../store/useCollectionStore';
import {
  PackageOpen,
  BookOpen,
  Volume2,
  VolumeX,
  Gift,
  Coins,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'OPENING' | 'LIBRARY';
  setActiveTab: (tab: 'OPENING' | 'LIBRARY') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const soundEnabled = useCollectionStore((state) => state.soundEnabled);
  const toggleSound = useCollectionStore((state) => state.toggleSound);
  const pokeCoins = useCollectionStore((state) => state.pokeCoins);
  const availablePacks = useCollectionStore((state) => state.availablePacks);
  const claimDailyReward = useCollectionStore((state) => state.claimDailyReward);

  // Total de boosters tous sets confondus
  const totalBoostersAvailable = Object.values(availablePacks).reduce((a, b) => a + b, 0);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={() => setActiveTab('OPENING')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 p-0.5 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
              PokéTCG <span className="text-xs px-1.5 py-0.5 rounded-md bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20">LIVE</span>
            </h1>
          </div>
        </div>

        {/* Onglets de navigation principaux */}
        <nav className="flex items-center bg-slate-900/90 border border-slate-800 p-1 rounded-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('OPENING')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'OPENING'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PackageOpen className="w-4 h-4" />
            <span>Ouvrir des Boosters</span>
            {totalBoostersAvailable > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow">
                {totalBoostersAvailable}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('LIBRARY')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'LIBRARY'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Ma Bibliothèque</span>
          </button>
        </nav>

        {/* Monnaie & Actions Rapides */}
        <div className="flex items-center gap-3">
          {/* Pièces */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Coins className="w-3.5 h-3.5" />
            <span>{pokeCoins}</span>
          </div>

          {/* Cadeau Quotidien */}
          <button
            type="button"
            onClick={claimDailyReward}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
            title="Obtenir 2 boosters gratuits et 200 pièces !"
          >
            <Gift className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+2 Boosters</span>
          </button>

          {/* Bouton Audio */}
          <button
            type="button"
            onClick={toggleSound}
            className={`p-2 rounded-xl border transition-colors ${
              soundEnabled
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                : 'bg-rose-950/40 border-rose-900/50 text-rose-400'
            }`}
            title={soundEnabled ? 'Couper le son' : 'Activer le son'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
