import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PackOpeningHub } from './components/PackOpeningHub';
import { Library } from './components/Library';
import { useCollectionStore } from './store/useCollectionStore';
import { RotateCcw } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'OPENING' | 'LIBRARY'>('OPENING');
  const resetCollection = useCollectionStore((state) => state.resetCollection);

  const handleReset = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser votre collection et vos boosters ?')) {
      resetCollection();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation supérieure */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu de la vue active */}
      <main className="flex-1 pb-16">
        {activeTab === 'OPENING' ? <PackOpeningHub /> : <Library />}
      </main>

      {/* Pied de page */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Projet de fan à but éducatif. Pokémon et Pokémon TCG sont des marques déposées de The Pokémon Company, Nintendo, Game Freak et Creatures Inc.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-slate-500 hover:text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Réinitialiser ma partie
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
