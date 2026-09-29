// Service de stockage IndexedDB et gestion des sauvegardes JSON

const DB_NAME = 'PokeTCGDatabase';
const DB_VERSION = 1;
const STORE_NAME = 'user_data';

// Initialisation de la base IndexedDB native
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB non supporté'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Sauvegarder des données dans IndexedDB
export async function saveToIndexedDB(key: string, data: unknown): Promise<void> {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(data, key);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Erreur sauvegarde IndexedDB, repli sur localStorage', err);
  }
}

// Récupérer des données depuis IndexedDB
export async function loadFromIndexedDB<T>(key: string): Promise<T | null> {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);

      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Erreur lecture IndexedDB', err);
    return null;
  }
}

// Export de la collection et de la progression au format JSON
export function exportBackupJSON(state: Record<string, unknown>): void {
  const backupData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    state,
  };

  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(backupData, null, 2)
  )}`;

  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute('href', jsonString);
  downloadAnchor.setAttribute('download', `poketcg-backup-${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Importation et validation d'une sauvegarde JSON
export function importBackupJSON(file: File): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsed = JSON.parse(content);

        // Validation élémentaire de la structure de sauvegarde
        if (!parsed || (!parsed.state && !parsed.collection)) {
          throw new Error('Fichier de sauvegarde non valide ou corrompu.');
        }

        const restoredState = parsed.state || parsed;
        resolve(restoredState);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = () => reject(new Error('Erreur de lecture du fichier.'));
    reader.readAsText(file);
  });
}
