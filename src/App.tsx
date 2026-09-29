import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { PackOpeningHub } from './components/PackOpeningHub';
import { Library } from './components/Library';
import { useCollectionStore } from './store/useCollectionStore';
import { exportBackupJSON, importBackupJSON } from './services/storage';
import { RotateCcw, Download, Upload } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'OPENING' | 'LIBRARY'>('OPENING');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetCollection = useCollectionStore((state) => state.resetCollection);
  const loadStateFromBackup = useCollectionStore((state) => state.loadStateFromBackup);

  const handleReset = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser votre collection et vos boosters ?')) {
      resetCollection();
    }
  };

  const handleExportBackup = () => {
    const state = useCollectionStore.getState();
    exportBackupJSON({
      collection: state.collection,
      openingHistory: state.openingHistory,
      totalPacksOpened: state.totalPacksOpened,
      pokeCoins: state.pokeCoins,
      availablePacks: state.availablePacks,
    });
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const restored = await importBackupJSON(file);
      loadStateFromBackup(restored);
      alert('Sauvegarde restaurée avec succès ! Votre collection a été mise à jour.');
    } catch (err) {
      alert(`Erreur lors de la restauration : ${(err as Error).message}`);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation supérieure */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu principal */}
      <main className="flex-1 pb-16">
        {activeTab === 'OPENING' ? <PackOpeningHub /> : <Library />}
      </main>

      {/* Input de fichier caché pour l'import JSON */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />

      {/* Pied de page & Outils de Sauvegarde */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-center md:text-left">
            Projet de fan à but éducatif. Pokémon et Pokémon TCG sont des marques déposées de The Pokémon Company, Nintendo, Game Freak et Creatures Inc.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              type="button"
              onClick={handleExportBackup}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Télécharger une copie de sauvegarde de votre collection"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              Exporter sauvegarde (JSON)
            </button>

            <button
              type="button"
              onClick={handleImportClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Charger un fichier de sauvegarde JSON"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              Importer sauvegarde
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 text-slate-500 hover:text-rose-400 transition-colors ml-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Réinitialiser
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
