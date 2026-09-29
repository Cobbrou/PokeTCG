const fs = require('fs');
const path = require('path');

const EXPANSION_SETS = [
  {
    id: 'sv3pt5',
    name: 'Écarlate et Violet 151',
    series: 'Écarlate et Violet',
    totalCards: 165,
    releaseDate: '2023-09-22',
    logo: 'https://images.pokemontcg.io/sv3pt5/logo.png',
    boosterImage: 'https://images.pokemontcg.io/sv3pt5/symbol.png',
    accentColor: '#3b82f6',
    description: 'Faites équipe avec les premiers Pokémon partenaires Bulbizarre, Salamèche et Carapuce pour célébrer les 151 premiers Pokémon originels.'
  },
  {
    id: 'sv3',
    name: 'Flammes Obsidiennes',
    series: 'Écarlate et Violet',
    totalCards: 197,
    releaseDate: '2023-08-11',
    logo: 'https://images.pokemontcg.io/sv3/logo.png',
    boosterImage: 'https://images.pokemontcg.io/sv3/symbol.png',
    accentColor: '#f97316',
    description: 'Des braises incandescentes illuminent la nuit alors que Dracaufeu-ex s’élève avec de nouveaux pouvoirs ténébreux !'
  },
  {
    id: 'swsh7',
    name: 'Évolution Céleste',
    series: 'Épée et Bouclier',
    totalCards: 203,
    releaseDate: '2021-08-27',
    logo: 'https://images.pokemontcg.io/swsh7/logo.png',
    boosterImage: 'https://images.pokemontcg.io/swsh7/symbol.png',
    accentColor: '#10b981',
    description: 'L’extension mythique réunissant Rayquaza VMAX et toutes les évolutions d’Évoli, dont le légendaire Noctali VMAX alternatif (Moonbreon).'
  },
  {
    id: 'base1',
    name: 'Set de Base Classique (1999)',
    series: 'Original Vintage',
    totalCards: 102,
    releaseDate: '1999-01-09',
    logo: 'https://images.pokemontcg.io/base1/logo.png',
    boosterImage: 'https://images.pokemontcg.io/base1/symbol.png',
    accentColor: '#eab308',
    description: 'Le premier set légendaire de 1999 ! Retrouvez le Dracaufeu 1ère Édition, Tortank, Florizarre et l’émotion nostalgique des premiers paquets.'
  },
  {
    id: 'sv4',
    name: 'Faille Paradoxe',
    series: 'Écarlate et Violet',
    totalCards: 182,
    releaseDate: '2023-11-03',
    logo: 'https://images.pokemontcg.io/sv4/logo.png',
    boosterImage: 'https://images.pokemontcg.io/sv4/symbol.png',
    accentColor: '#d946ef',
    description: 'Les Pokémon Temps Passé et Temps Futur entrent en collision ! Déchaînez la férocité de Rugit-Lune-ex et la puissance cybernétique de Garde-de-Fer-ex.'
  }
];

// Helper to build cards
function c(setId, setName, num, name, supertype, subtypes, hp, types, rarity, artist, attacks, evolvesFrom) {
  return {
    id: `${setId}-${num}`,
    name,
    supertype,
    subtypes: subtypes || (supertype === 'Pokémon' ? ['Base'] : []),
    hp: hp || undefined,
    types: types || undefined,
    evolvesFrom: evolvesFrom || undefined,
    number: String(num).padStart(3, '0'),
    artist: artist || 'Ken Sugimori',
    rarity,
    images: {
      small: `https://images.pokemontcg.io/${setId}/${num}.png`,
      large: `https://images.pokemontcg.io/${setId}/${num}_hires.png`
    },
    setId,
    setName,
    attacks: attacks || []
  };
}

const CARDS = [
  // ==========================================
  // SET 1: Écarlate et Violet 151 (sv3pt5)
  // ==========================================
  // Commons
  c('sv3pt5', 'Écarlate et Violet 151', '1', 'Bulbizarre', 'Pokémon', ['Base'], '70', ['Grass'], 'Common', 'Yuu Nishida', [
    { name: 'Sangsue', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: 'Soignez 10 dégâts de ce Pokémon.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '4', 'Salamèche', 'Pokémon', ['Base'], '70', ['Fire'], 'Common', 'Naoki Saito', [
    { name: 'Flammèche', cost: ['Fire'], convertedEnergyCost: 1, damage: '10', text: '' },
    { name: 'Destruction Barbecue', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: 'Défaussez un Stade en jeu.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '7', 'Carapuce', 'Pokémon', ['Base'], '60', ['Water'], 'Common', 'Mitsuhiro Arita', [
    { name: 'Retirance', cost: ['Water'], convertedEnergyCost: 1, damage: '', text: 'Lancez une pièce. Si c’est face, évitez les attaques.' },
    { name: 'Pistolet à O', cost: ['Water', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '25', 'Pikachu', 'Pokémon', ['Base'], '60', ['Lightning'], 'Common', 'Hiroyuki Yamamoto', [
    { name: 'Charge', cost: ['Lightning'], convertedEnergyCost: 1, damage: '', text: 'Cherchez dans votre deck une carte Énergie Électrique.' },
    { name: 'Éclair Rapide', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '133', 'Évoli', 'Pokémon', ['Base'], '50', ['Colorless'], 'Common', 'Narumi Sato', [
    { name: 'Regard Touchant', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Attachez une carte Énergie de votre main.' },
    { name: 'Charge Enjouée', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '129', 'Magicarpe', 'Pokémon', ['Base'], '30', ['Water'], 'Common', 'Kouki Saitou', [
    { name: 'Trempette', cost: ['Colorless'], convertedEnergyCost: 1, damage: '10', text: 'Lancez une pièce.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '92', 'Fantominus', 'Pokémon', ['Base'], '50', ['Psychic'], 'Common', 'Tomokazu Komiya', [
    { name: 'Onde Folie', cost: ['Psychic'], convertedEnergyCost: 1, damage: '', text: 'Le Pokémon Actif adverse est maintenant Confus.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '66', 'Machoc', 'Pokémon', ['Base'], '70', ['Fighting'], 'Common', 'KEIICHIRO ITO', [
    { name: 'Poing de Montagne', cost: ['Fighting'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '39', 'Rondoudou', 'Pokémon', ['Base'], '70', ['Colorless'], 'Common', 'Saya Tsuruta', [
    { name: 'Berceuse', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Le Pokémon Actif adverse est maintenant Endormi.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '143', 'Ronflex', 'Pokémon', ['Base'], '150', ['Colorless'], 'Common', 'Gou Kagairu', [
    { name: 'Gros Dodo', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '80', text: 'Ce Pokémon s’endort et soigne 60 dégâts.' }
  ]),

  // Uncommons
  c('sv3pt5', 'Écarlate et Violet 151', '2', 'Herbizarre', 'Pokémon', ['Niveau 1'], '90', ['Grass'], 'Uncommon', 'Yuu Nishida', [
    { name: 'Fouet Lianes', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
  ], 'Bulbizarre'),
  c('sv3pt5', 'Écarlate et Violet 151', '5', 'Reptincel', 'Pokémon', ['Niveau 1'], '90', ['Fire'], 'Uncommon', 'Naoki Saito', [
    { name: 'Crocs Feu', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
  ], 'Salamèche'),
  c('sv3pt5', 'Écarlate et Violet 151', '8', 'Carabaffe', 'Pokémon', ['Niveau 1'], '90', ['Water'], 'Uncommon', 'Mitsuhiro Arita', [
    { name: 'Cascade', cost: ['Water', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '50', text: '' }
  ], 'Carapuce'),
  c('sv3pt5', 'Écarlate et Violet 151', '93', 'Spectrum', 'Pokémon', ['Niveau 1'], '80', ['Psychic'], 'Uncommon', 'Tomokazu Komiya', [
    { name: 'Ball’Ombre', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: '' }
  ], 'Fantominus'),
  c('sv3pt5', 'Écarlate et Violet 151', '148', 'Draco', 'Pokémon', ['Niveau 1'], '100', ['Dragon'], 'Uncommon', 'Ryo Ueda', [
    { name: 'Danse Draco', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Au prochain tour, les attaques infligent 70 dégâts supplémentaires.' }
  ]),

  // Rare & Rare Holo
  c('sv3pt5', 'Écarlate et Violet 151', '94', 'Ectoplasma', 'Pokémon', ['Niveau 2'], '130', ['Psychic'], 'Rare Holo', 'Masako Tomii', [
    { name: 'Cauchemar Profond', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '90', text: 'Le Pokémon adverse s’endort.' }
  ], 'Spectrum'),
  c('sv3pt5', 'Écarlate et Violet 151', '149', 'Dracolosse', 'Pokémon', ['Niveau 2'], '180', ['Dragon'], 'Rare Holo', 'kodama', [
    { name: 'Impact Météore', cost: ['Water', 'Lightning'], convertedEnergyCost: 2, damage: '140', text: 'Défaussez 2 cartes Énergie.' }
  ], 'Draco'),
  c('sv3pt5', 'Écarlate et Violet 151', '150', 'Mewtwo', 'Pokémon', ['Base'], '130', ['Psychic'], 'Rare Holo', 'Bun Toujo', [
    { name: 'Rafale Psy', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' },
    { name: 'Onde Mentale', cost: ['Psychic', 'Psychic', 'Colorless'], convertedEnergyCost: 3, damage: '130', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '130', 'Léviator', 'Pokémon', ['Niveau 1'], '180', ['Water'], 'Rare Holo', 'nagimiso', [
    { name: 'Cascade Ravageuse', cost: ['Water', 'Water', 'Colorless'], convertedEnergyCost: 3, damage: '100', text: '' },
    { name: 'Hyper-Laser', cost: ['Water', 'Water', 'Water', 'Colorless'], convertedEnergyCost: 4, damage: '200', text: '' }
  ], 'Magicarpe'),
  c('sv3pt5', 'Écarlate et Violet 151', '144', 'Artikodin', 'Pokémon', ['Base'], '120', ['Water'], 'Rare Holo', 'Shinji Kanda', [
    { name: 'Blizzard Glacial', cost: ['Water', 'Water'], convertedEnergyCost: 2, damage: '110', text: '' }
  ]),

  // Double Rare
  c('sv3pt5', 'Écarlate et Violet 151', '3', 'Florizarre-ex', 'Pokémon', ['Niveau 2', 'ex'], '340', ['Grass'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Fleur Guérisseuse', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '', text: 'Soignez 60 dégâts à l’un de vos Pokémon.' },
    { name: 'Fouet Toxique', cost: ['Grass', 'Grass', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '150', text: 'Le Pokémon Défenseur est empoisonné et confus.' }
  ], 'Herbizarre'),
  c('sv3pt5', 'Écarlate et Violet 151', '6', 'Dracaufeu-ex', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Fire'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Brave Aile', cost: ['Fire'], convertedEnergyCost: 1, damage: '60+', text: 'Inflige 100 dégâts supplémentaires si blessé.' },
    { name: 'Vortex Enflammé', cost: ['Fire', 'Fire', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '330', text: 'Défaussez 3 Énergies.' }
  ], 'Reptincel'),
  c('sv3pt5', 'Écarlate et Violet 151', '9', 'Tortank-ex', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Water'], 'Double Rare', 'PLANETA Yamashita', [
    { name: 'Canon Jumelé', cost: ['Water', 'Water'], convertedEnergyCost: 2, damage: '140×', text: 'Défaussez jusqu’à 2 cartes Énergie Eau de votre main.' }
  ], 'Carabaffe'),
  c('sv3pt5', 'Écarlate et Violet 151', '65', 'Alakazam-ex', 'Pokémon', ['Niveau 2', 'ex'], '310', ['Psychic'], 'Double Rare', 'Mitsuhiro Arita', [
    { name: 'Cuillère Mentale', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '', text: 'Placez 3 marqueurs de dégâts.' },
    { name: 'Miroir Dimensionnel', cost: ['Psychic', 'Psychic'], convertedEnergyCost: 2, damage: '120', text: 'Peut être utilisé depuis le Banc.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '145', 'Électhor-ex', 'Pokémon', ['Base', 'ex'], '200', ['Lightning'], 'Double Rare', 'PLANETA Yamashita', [
    { name: 'Éclair Volant', cost: ['Lightning', 'Lightning', 'Lightning'], convertedEnergyCost: 3, damage: '120', text: 'Pas de Coût de Retraite.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '151', 'Mew-ex', 'Pokémon', ['Base', 'ex'], '180', ['Psychic'], 'Double Rare', 'aky CG Works', [
    { name: 'Redémarrage', cost: [], convertedEnergyCost: 0, damage: '', text: 'Piochez jusqu’à avoir 3 cartes en main.' },
    { name: 'Piratage Génome', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '', text: 'Copiez l’attaque adverse.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '40', 'Grodoudou-ex', 'Pokémon', ['Niveau 1', 'ex'], '250', ['Colorless'], 'Double Rare', 'Saki Hayashiro', [
    { name: 'Étreinte Sommeil', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '180', text: 'Endort le Pokémon Défenseur.' }
  ], 'Rondoudou'),

  // Illustration Rare
  c('sv3pt5', 'Écarlate et Violet 151', '166', 'Bulbizarre (Illustration)', 'Pokémon', ['Base'], '70', ['Grass'], 'Illustration Rare', 'Yoriyuki Ikegami', [
    { name: 'Sangsue Somptueuse', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: 'Soignez 10 dégâts de ce Pokémon.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '168', 'Salamèche (Illustration)', 'Pokémon', ['Base'], '70', ['Fire'], 'Illustration Rare', 'MINAMINAMI Take', [
    { name: 'Flammèche Brûlante', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: 'Défaussez un Stade en jeu.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '170', 'Carapuce (Illustration)', 'Pokémon', ['Base'], '60', ['Water'], 'Illustration Rare', 'Miki Tanaka', [
    { name: 'Surf ensoleillé', cost: ['Water', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '173', 'Pikachu (Illustration)', 'Pokémon', ['Base'], '60', ['Lightning'], 'Illustration Rare', 'Hiroyuki Yamamoto', [
    { name: 'Éclair Majestueux', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '182', 'Draco (Illustration)', 'Pokémon', ['Niveau 1'], '100', ['Dragon'], 'Illustration Rare', 'Ryo Ueda', [
    { name: 'Vol Féerique', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: '' }
  ]),

  // Special Illustration Rare
  c('sv3pt5', 'Écarlate et Violet 151', '198', 'Florizarre-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '340', ['Grass'], 'Special Illustration Rare', 'Yoriyuki Ikegami', [
    { name: 'Forêt Ancestrale', cost: ['Grass', 'Grass', 'Colorless'], convertedEnergyCost: 3, damage: '180', text: 'Soignez 80 dégâts à tous vos Pokémon.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '199', 'Dracaufeu-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Fire'], 'Special Illustration Rare', 'MINAMINAMI Take', [
    { name: 'Incandescence Primordiale', cost: ['Fire', 'Fire', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '330', text: 'La carte maîtresse ultime de l’extension 151.' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '200', 'Tortank-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Water'], 'Special Illustration Rare', 'Mitsuhiro Arita', [
    { name: 'Océan Profond', cost: ['Water', 'Water', 'Colorless'], convertedEnergyCost: 3, damage: '220', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '201', 'Alakazam-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '310', ['Psychic'], 'Special Illustration Rare', 'Shinya Komatsu', [
    { name: 'Dimension Cosmique', cost: ['Psychic', 'Psychic'], convertedEnergyCost: 2, damage: '150', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '202', 'Électhor-ex (Spécial Illustration)', 'Pokémon', ['Base', 'ex'], '200', ['Lightning'], 'Special Illustration Rare', 'Shinji Kanda', [
    { name: 'Foudre Sauvage', cost: ['Lightning', 'Lightning', 'Colorless'], convertedEnergyCost: 3, damage: '190', text: '' }
  ]),
  c('sv3pt5', 'Écarlate et Violet 151', '196', 'Invitation d’Érika', 'Trainer', ['Supporter'], '', [], 'Special Illustration Rare', 'Conkichi', []),

  // Hyper Rare
  c('sv3pt5', 'Écarlate et Violet 151', '205', 'Mew-ex (Or Brillant)', 'Pokémon', ['Base', 'ex'], '180', ['Psychic'], 'Hyper Rare', 'aky CG Works', [
    { name: 'Redémarrage Pur', cost: [], convertedEnergyCost: 0, damage: '', text: 'Piochez des cartes jusqu’à en avoir 3 en main.' },
    { name: 'Génome Doré', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '', text: 'Copiez l’attaque de votre choix.' }
  ]),


  // ==========================================
  // SET 2: Flammes Obsidiennes (sv3)
  // ==========================================
  // Commons
  c('sv3', 'Flammes Obsidiennes', '26', 'Salamèche', 'Pokémon', ['Base'], '70', ['Fire'], 'Common', 'Shibuzoh.', [
    { name: 'Griffe Enflammée', cost: ['Fire'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '56', 'Grenousse', 'Pokémon', ['Base'], '70', ['Water'], 'Common', 'Kurumitsu', [
    { name: 'Gouttelette', cost: ['Water'], convertedEnergyCost: 1, damage: '10', text: '' },
    { name: 'Bond Acrobatique', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '100', 'Axoloto de Paldea', 'Pokémon', ['Base'], '60', ['Darkness'], 'Common', 'Kouki Saitou', [
    { name: 'Tir Venin', cost: ['Darkness'], convertedEnergyCost: 1, damage: '10', text: 'Empoisonne le Pokémon Actif.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '40', 'Funécire', 'Pokémon', ['Base'], '60', ['Fire'], 'Common', 'Tomokazu Komiya', [
    { name: 'Petite Flamme', cost: ['Fire'], convertedEnergyCost: 1, damage: '10', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '149', 'Terhal', 'Pokémon', ['Base'], '60', ['Metal'], 'Common', 'Shin Nagasawa', [
    { name: 'Charge Magnétique', cost: ['Metal'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '142', 'Porygon', 'Pokémon', ['Base'], '60', ['Colorless'], 'Common', 'Yuka Morii', [
    { name: 'Affûtage', cost: ['Colorless'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '152', 'Scalpion', 'Pokémon', ['Base'], '70', ['Metal'], 'Common', 'Anesaki Dynamic', [
    { name: 'Lame Taillante', cost: ['Metal', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '1', 'Chenipan', 'Pokémon', ['Base'], '50', ['Grass'], 'Common', 'Sekio', [
    { name: 'Sécrétion Rapide', cost: ['Grass'], convertedEnergyCost: 1, damage: '10', text: 'Paralyse sur un lancer face.' }
  ]),

  // Uncommons
  c('sv3', 'Flammes Obsidiennes', '27', 'Reptincel', 'Pokémon', ['Niveau 1'], '90', ['Fire'], 'Uncommon', 'Kouki Saitou', [
    { name: 'Flammèche Brûlante', cost: ['Fire', 'Fire'], convertedEnergyCost: 2, damage: '70', text: '' }
  ], 'Salamèche'),
  c('sv3', 'Flammes Obsidiennes', '57', 'Croâporal', 'Pokémon', ['Niveau 1'], '90', ['Water'], 'Uncommon', 'Teeziro', [
    { name: 'Lame Aquatique', cost: ['Water'], convertedEnergyCost: 1, damage: '40', text: '' }
  ], 'Grenousse'),
  c('sv3', 'Flammes Obsidiennes', '150', 'Métang', 'Pokémon', ['Niveau 1'], '100', ['Metal'], 'Uncommon', 'Gou Kagairu', [
    { name: 'Poing de Fer', cost: ['Metal', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: '' }
  ], 'Terhal'),
  c('sv3', 'Flammes Obsidiennes', '84', 'Mélodelfe', 'Pokémon', ['Niveau 1'], '110', ['Psychic'], 'Uncommon', 'Mizue', [
    { name: 'Danse Lunaire', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '70', text: 'Soignez 30 dégâts.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '41', 'Mélancolux', 'Pokémon', ['Niveau 1'], '80', ['Fire'], 'Uncommon', 'Jerky', [
    { name: 'Feu Follet', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
  ], 'Funécire'),

  // Rare & Rare Holo
  c('sv3', 'Flammes Obsidiennes', '136', 'Darkrai', 'Pokémon', ['Base'], '130', ['Darkness'], 'Rare Holo', 'chibi', [
    { name: 'Cauchemar Obscur', cost: ['Darkness', 'Colorless'], convertedEnergyCost: 2, damage: '60+', text: 'Inflige 60 dégâts de plus si le Pokémon est Endormi.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '141', 'Cizayox', 'Pokémon', ['Niveau 1'], '140', ['Metal'], 'Rare Holo', 'KEIICHIRO ITO', [
    { name: 'Pince d’Acier', cost: ['Metal'], convertedEnergyCost: 1, damage: '60+', text: 'Inflige 20 dégâts par Pokémon adverse en jeu.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '42', 'Lugulabre', 'Pokémon', ['Niveau 2'], '150', ['Fire'], 'Rare Holo', 'Teeziro', [
    { name: 'Fournaise Fantôme', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '150', text: '' }
  ], 'Mélancolux'),
  c('sv3', 'Flammes Obsidiennes', '58', 'Amphinobi', 'Pokémon', ['Niveau 2'], '150', ['Water'], 'Rare Holo', 'Anesaki Dynamic', [
    { name: 'Sheauriken Shinobi', cost: ['Water'], convertedEnergyCost: 1, damage: '100', text: '' }
  ], 'Croâporal'),
  c('sv3', 'Flammes Obsidiennes', '67', 'Tyranocif', 'Pokémon', ['Niveau 2'], '180', ['Darkness'], 'Rare Holo', 'kawayoo', [
    { name: 'Séisme Dévastateur', cost: ['Darkness', 'Darkness'], convertedEnergyCost: 2, damage: '180', text: 'Inflige 20 dégâts à chaque Pokémon de votre Banc.' }
  ]),

  // Double Rare (ex)
  c('sv3', 'Flammes Obsidiennes', '125', 'Dracaufeu-ex (Téra Obscurité)', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Darkness'], 'Double Rare', '5ban Graphics', [
    { name: 'Règne Ténébreux', cost: [], convertedEnergyCost: 0, damage: '', text: 'Attachez jusqu’à 3 Énergies Feu à vos Pokémon.' },
    { name: 'Braise Brûlante', cost: ['Fire', 'Fire'], convertedEnergyCost: 2, damage: '180+', text: 'Inflige 30 dégâts pour chaque carte Récompense prise par l’adversaire.' }
  ], 'Reptincel'),
  c('sv3', 'Flammes Obsidiennes', '66', 'Tyranocif-ex (Téra Électrique)', 'Pokémon', ['Niveau 2', 'ex'], '340', ['Lightning'], 'Double Rare', '5ban Graphics', [
    { name: 'Roc Foudroyant', cost: ['Fighting'], convertedEnergyCost: 1, damage: '120', text: '' },
    { name: 'Tonnerre Colossal', cost: ['Fighting', 'Fighting'], convertedEnergyCost: 2, damage: '250', text: 'Défaussez les 4 cartes du dessus de votre deck.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '164', 'Roucarnage-ex', 'Pokémon', ['Niveau 2', 'ex'], '280', ['Colorless'], 'Double Rare', 'PLANETA Yamashita', [
    { name: 'Recherche Rapide', cost: [], convertedEnergyCost: 0, damage: '', text: 'Cherchez n’importe quelle carte dans votre deck.' },
    { name: 'Bourrasque Flottante', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '120', text: 'Défaussez un Stade en jeu.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '159', 'Dracolosse-ex (Téra Dragon)', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Dragon'], 'Double Rare', '5ban Graphics', [
    { name: 'Météore Envoûtant', cost: ['Water', 'Lightning'], convertedEnergyCost: 2, damage: '140', text: '' },
    { name: 'Draco-Explosion', cost: ['Water', 'Lightning', 'Colorless'], convertedEnergyCost: 3, damage: '270', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '153', 'Melmetal-ex', 'Pokémon', ['Niveau 1', 'ex'], '270', ['Metal'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Acier Lourd', cost: ['Metal', 'Metal'], convertedEnergyCost: 2, damage: '160', text: '' }
  ]),

  // Illustration Rare
  c('sv3', 'Flammes Obsidiennes', '202', 'Mélo (Illustration)', 'Pokémon', ['Base'], '30', ['Psychic'], 'Illustration Rare', 'HYOGONOSUKE', [
    { name: 'Tirage Scintillant', cost: [], convertedEnergyCost: 0, damage: '', text: 'Piochez des cartes jusqu’à en avoir 6 en main.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '199', 'Feunard (Illustration)', 'Pokémon', ['Niveau 1'], '120', ['Fire'], 'Illustration Rare', 'Sie Nanahara', [
    { name: 'Chaleur Embrasée', cost: ['Fire'], convertedEnergyCost: 1, damage: '90', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '204', 'Carabing (Illustration)', 'Pokémon', ['Base'], '60', ['Metal'], 'Illustration Rare', 'Tomokazu Komiya', [
    { name: 'Charge Carapace', cost: ['Metal', 'Colorless'], convertedEnergyCost: 2, damage: '40', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '205', 'Cizayox (Illustration)', 'Pokémon', ['Niveau 1'], '140', ['Metal'], 'Illustration Rare', 'OGACHI', [
    { name: 'Lame d’Or Miroir', cost: ['Metal'], convertedEnergyCost: 1, damage: '60+', text: 'Frappe chirurgicale dévastatrice.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '207', 'Roucool (Illustration)', 'Pokémon', ['Base'], '60', ['Colorless'], 'Illustration Rare', 'Jerky', [
    { name: 'Piaf Voyant', cost: ['Colorless'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '208', 'Roucoups (Illustration)', 'Pokémon', ['Niveau 1'], '80', ['Colorless'], 'Illustration Rare', 'Jerky', [
    { name: 'Coup d’Aile Agile', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '40', text: '' }
  ]),

  // Special Illustration Rare
  c('sv3', 'Flammes Obsidiennes', '223', 'Dracaufeu-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Darkness'], 'Special Illustration Rare', 'AKIRA EGAWA', [
    { name: 'Ténèbres Incandescentes', cost: ['Fire', 'Fire'], convertedEnergyCost: 2, damage: '220+', text: 'La forme Téracristal ténébreuse du dragon flamboyant.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '225', 'Roucarnage-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '280', ['Colorless'], 'Special Illustration Rare', 'Jerky', [
    { name: 'Vol Absolu', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '140', text: 'Maîtrise aérienne spectaculaire.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '227', 'Papy-Moustache (Spécial Illustration)', 'Trainer', ['Supporter'], '', [], 'Special Illustration Rare', 'sanity', []),
  c('sv3', 'Flammes Obsidiennes', '226', 'Ortiga (Spécial Illustration)', 'Trainer', ['Supporter'], '', [], 'Special Illustration Rare', 'Daisuke Tanaka', []),

  // Hyper Rare (Gold)
  c('sv3', 'Flammes Obsidiennes', '228', 'Dracaufeu-ex (Or Brillant)', 'Pokémon', ['Niveau 2', 'ex'], '330', ['Darkness'], 'Hyper Rare', '5ban Graphics', [
    { name: 'Flamme Dorée Suprême', cost: ['Fire', 'Fire'], convertedEnergyCost: 2, damage: '240', text: 'Édition prestigieuse gravée d’or pur.' }
  ]),
  c('sv3', 'Flammes Obsidiennes', '230', 'Super Bonbon (Or Brillant)', 'Trainer', ['Item'], '', [], 'Hyper Rare', 'Studio Bora Inc.', []),


  // ==========================================
  // SET 3: Épée et Bouclier : Évolution Céleste (swsh7)
  // ==========================================
  // Commons
  c('swsh7', 'Évolution Céleste', '127', 'Évoli', 'Pokémon', ['Base'], '50', ['Colorless'], 'Common', 'Mitsuhiro Arita', [
    { name: 'Éveil Végétal', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Cherchez dans votre deck une carte Évolution.' },
    { name: 'Charge Sautillante', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '49', 'Pikachu', 'Pokémon', ['Base'], '60', ['Lightning'], 'Common', 'Sanosuke Sakuma', [
    { name: 'Éclair Vivant', cost: ['Lightning'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '106', 'Baggiguane', 'Pokémon', ['Base'], '70', ['Darkness'], 'Common', 'Kouki Saitou', [
    { name: 'Coup d’Tête', cost: ['Darkness'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '99', 'Ténéfix', 'Pokémon', ['Base'], '70', ['Psychic'], 'Common', 'Shigenori Negishi', [
    { name: 'Regard Noir', cost: ['Psychic'], convertedEnergyCost: 1, damage: '', text: 'L’adversaire ne peut pas battre en retraite.' }
  ]),
  c('swsh7', 'Évolution Céleste', '71', 'Flabébé', 'Pokémon', ['Base'], '40', ['Psychic'], 'Common', 'sowsow', [
    { name: 'Pollen Féerique', cost: ['Psychic'], convertedEnergyCost: 1, damage: '10', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '52', 'Emolga', 'Pokémon', ['Base'], '70', ['Lightning'], 'Common', 'kirisAki', [
    { name: 'Vol Électrik', cost: ['Lightning'], convertedEnergyCost: 1, damage: '30', text: '' }
  ]),

  // Uncommons
  c('swsh7', 'Évolution Céleste', '30', 'Aquali', 'Pokémon', ['Niveau 1'], '110', ['Water'], 'Uncommon', 'You Iribi', [
    { name: 'Vague Rafraîchissante', cost: ['Water', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: 'Soignez 30 dégâts.' }
  ], 'Évoli'),
  c('swsh7', 'Évolution Céleste', '51', 'Voltali', 'Pokémon', ['Niveau 1'], '100', ['Lightning'], 'Uncommon', 'Kouki Saitou', [
    { name: 'Éclair Foudroyant', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '70', text: '' }
  ], 'Évoli'),
  c('swsh7', 'Évolution Céleste', '24', 'Pyroli', 'Pokémon', ['Niveau 1'], '110', ['Fire'], 'Uncommon', 'Souichirou Gunjima', [
    { name: 'Brasier Ardent', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '70', text: '' }
  ], 'Évoli'),
  c('swsh7', 'Évolution Céleste', '115', 'Draco', 'Pokémon', ['Niveau 1'], '90', ['Dragon'], 'Uncommon', 'Mizue', [
    { name: 'Plongeon Draco', cost: ['Water', 'Lightning'], convertedEnergyCost: 2, damage: '60', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '72', 'Floette', 'Pokémon', ['Niveau 1'], '70', ['Psychic'], 'Uncommon', 'Saya Tsuruta', [
    { name: 'Fleur Magique', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '40', text: '' }
  ], 'Flabébé'),
  c('swsh7', 'Évolution Céleste', '107', 'Baggaïd', 'Pokémon', ['Niveau 1'], '120', ['Darkness'], 'Uncommon', 'HYOGONOSUKE', [
    { name: 'Frappe Sournoise', cost: ['Darkness', 'Colorless'], convertedEnergyCost: 2, damage: '80', text: '' }
  ], 'Baggiguane'),

  // Rare & Rare Holo
  c('swsh7', 'Évolution Céleste', '31', 'Suicune', 'Pokémon', ['Base'], '120', ['Water'], 'Rare Holo', 'Atsushi Furusawa', [
    { name: 'Bourrasque Pure', cost: ['Water', 'Water'], convertedEnergyCost: 2, damage: '120', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '20', 'Victini', 'Pokémon', ['Base'], '70', ['Fire'], 'Rare Holo', 'chibi', [
    { name: 'Coup Vainqueur', cost: ['Fire'], convertedEnergyCost: 1, damage: '20+', text: 'Si vous avez pris une Récompense, inflige 100 dégâts supplémentaires.' }
  ]),
  c('swsh7', 'Évolution Céleste', '124', 'Regidrago', 'Pokémon', ['Base'], '130', ['Dragon'], 'Rare Holo', 'kawayoo', [
    { name: 'Énergie Draconique', cost: ['Grass', 'Fire', 'Colorless'], convertedEnergyCost: 3, damage: '160', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '90', 'Lougaroc', 'Pokémon', ['Niveau 1'], '120', ['Fighting'], 'Rare Holo', 'Shinji Kanda', [
    { name: 'Crocs Crépuscule', cost: ['Fighting', 'Colorless'], convertedEnergyCost: 2, damage: '100', text: '' }
  ]),

  // Double Rare (VMAX)
  c('swsh7', 'Évolution Céleste', '111', 'Rayquaza VMAX', 'Pokémon', ['VMAX'], '320', ['Dragon'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Pulsion Azur', cost: [], convertedEnergyCost: 0, damage: '', text: 'Piochez 3 cartes en défaussant votre main.' },
    { name: 'Spirale Volante', cost: ['Fire', 'Lightning'], convertedEnergyCost: 2, damage: '20+', text: 'Défaussez des Énergies pour infliger 80 dégâts par carte défaussée.' }
  ]),
  c('swsh7', 'Évolution Céleste', '95', 'Noctali VMAX', 'Pokémon', ['VMAX'], '310', ['Darkness'], 'Double Rare', 'PLANETA Tsuji', [
    { name: 'Signe Obscur', cost: [], convertedEnergyCost: 0, damage: '', text: 'Forcez le Pokémon de Banc adverse sur le Poste Actif.' },
    { name: 'Menace Max', cost: ['Darkness', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '160', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '75', 'Nymphali VMAX', 'Pokémon', ['VMAX'], '310', ['Psychic'], 'Double Rare', 'PLANETA Igarashi', [
    { name: 'Ruban Harmonieux', cost: ['Psychic', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '70+', text: 'Inflige 30 dégâts pour chaque type de Pokémon différent sur votre Banc.' }
  ]),
  c('swsh7', 'Évolution Céleste', '123', 'Duralugon VMAX', 'Pokémon', ['VMAX'], '330', ['Dragon'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Gratte-Ciel', cost: [], convertedEnergyCost: 0, damage: '', text: 'Immunisé contre les attaques des Pokémon équipés d’Énergie Spéciale.' },
    { name: 'Pulvérisation G-Max', cost: ['Fighting', 'Metal', 'Metal'], convertedEnergyCost: 3, damage: '220', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '65', 'Mentali VMAX', 'Pokémon', ['VMAX'], '310', ['Psychic'], 'Double Rare', 'PLANETA Tsuji', [
    { name: 'Psyko Max', cost: ['Psychic', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '60×', text: '60 dégâts pour chaque Énergie attachée aux Pokémon adverses.' }
  ]),
  c('swsh7', 'Évolution Céleste', '41', 'Givrali VMAX', 'Pokémon', ['VMAX'], '310', ['Water'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Icicle Givré', cost: ['Water', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '150', text: '' }
  ]),

  // Illustration Rare (Full Art V)
  c('swsh7', 'Évolution Céleste', '194', 'Rayquaza V (Full Art)', 'Pokémon', ['Base', 'V'], '210', ['Dragon'], 'Illustration Rare', 'Ryuta Fuse', [
    { name: 'Vent Draconique', cost: ['Fire', 'Lightning'], convertedEnergyCost: 2, damage: '180', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '189', 'Noctali V (Full Art)', 'Pokémon', ['Base', 'V'], '200', ['Darkness'], 'Illustration Rare', 'Teeziro', [
    { name: 'Oeil Lunaire', cost: ['Darkness', 'Colorless'], convertedEnergyCost: 2, damage: '80', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '192', 'Dracolosse V (Full Art)', 'Pokémon', ['Base', 'V'], '230', ['Dragon'], 'Illustration Rare', 'Sanosuke Sakuma', [
    { name: 'Charge Dévastatrice', cost: ['Water', 'Water', 'Lightning'], convertedEnergyCost: 3, damage: '250', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '184', 'Nymphali V (Full Art)', 'Pokémon', ['Base', 'V'], '200', ['Psychic'], 'Illustration Rare', 'You Iribi', [
    { name: 'Voix Envoûtante', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '90', text: '' }
  ]),
  c('swsh7', 'Évolution Céleste', '172', 'Aquali V (Full Art)', 'Pokémon', ['Base', 'V'], '210', ['Water'], 'Illustration Rare', 'Teeziro', [
    { name: 'Torrent Suprême', cost: ['Water', 'Water', 'Colorless'], convertedEnergyCost: 3, damage: '160', text: '' }
  ]),

  // Special Illustration Rare (Alt Art VMAX - "Moonbreon" & Rayquaza!)
  c('swsh7', 'Évolution Céleste', '215', 'Noctali VMAX (Moonbreon Suprême)', 'Pokémon', ['VMAX'], '310', ['Darkness'], 'Special Illustration Rare', 'KEIICHIRO ITO', [
    { name: 'Lune Stellaire Sacrée', cost: ['Darkness', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '180', text: 'La carte la plus célèbre et légendaire de l’ère moderne Pokémon.' }
  ]),
  c('swsh7', 'Évolution Céleste', '218', 'Rayquaza VMAX (Spécial Alternative)', 'Pokémon', ['VMAX'], '320', ['Dragon'], 'Special Illustration Rare', 'Anesaki Dynamic', [
    { name: 'Ascension Astrale', cost: ['Fire', 'Lightning'], convertedEnergyCost: 2, damage: '340', text: 'Le seigneur des cieux s’élève au-dessus des cimes.' }
  ]),
  c('swsh7', 'Évolution Céleste', '212', 'Nymphali VMAX (Spécial Alternative)', 'Pokémon', ['VMAX'], '310', ['Psychic'], 'Special Illustration Rare', 'Teeziro', [
    { name: 'Rêverie Féerique', cost: ['Psychic', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '200', text: 'Nymphali entouré de tous ses compagnons Évoli.' }
  ]),
  c('swsh7', 'Évolution Céleste', '220', 'Duralugon VMAX (Spécial Alternative)', 'Pokémon', ['VMAX'], '330', ['Dragon'], 'Special Illustration Rare', 'Saki Hayashiro', [
    { name: 'Titanesque G-Max', cost: ['Fighting', 'Metal', 'Metal'], convertedEnergyCost: 3, damage: '240', text: 'Une citadelle d’acier infranchissable.' }
  ]),
  c('swsh7', 'Évolution Céleste', '209', 'Givrali VMAX (Spécial Alternative)', 'Pokémon', ['VMAX'], '310', ['Water'], 'Special Illustration Rare', 'sowsow', [
    { name: 'Glaciation Féerique', cost: ['Water', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '210', text: 'L’élégance glaciale au cœur du blizzard.' }
  ]),

  // Hyper Rare (Rainbow)
  c('swsh7', 'Évolution Céleste', '217', 'Rayquaza VMAX (Arc-en-Ciel Rainbow)', 'Pokémon', ['VMAX'], '320', ['Dragon'], 'Hyper Rare', 'PLANETA Mochizuki', [
    { name: 'Spirale Céleste Rainbow', cost: ['Fire', 'Lightning'], convertedEnergyCost: 2, damage: '280', text: 'Holographisme arc-en-ciel chatoyant de rareté maximale.' }
  ]),
  c('swsh7', 'Évolution Céleste', '214', 'Noctali VMAX (Arc-en-Ciel Rainbow)', 'Pokémon', ['VMAX'], '310', ['Darkness'], 'Hyper Rare', 'PLANETA Tsuji', [
    { name: 'Menace Suprême Rainbow', cost: ['Darkness', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '260', text: 'Reflets prisme diamantés sur Noctali VMAX.' }
  ]),


  // ==========================================
  // SET 4: Set de Base Classique 1999 (base1)
  // ==========================================
  // Commons
  c('base1', 'Set de Base Classique (1999)', '46', 'Salamèche', 'Pokémon', ['Base'], '50', ['Fire'], 'Common', 'Mitsuhiro Arita', [
    { name: 'Griffe', cost: ['Colorless'], convertedEnergyCost: 1, damage: '10', text: '' },
    { name: 'Flammèche', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: 'Défaussez une Énergie Feu.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '44', 'Bulbizarre', 'Pokémon', ['Base'], '40', ['Grass'], 'Common', 'Mitsuhiro Arita', [
    { name: 'Vampigraine', cost: ['Grass', 'Grass'], convertedEnergyCost: 2, damage: '20', text: 'Soignez 10 dégâts de Bulbizarre.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '63', 'Carapuce', 'Pokémon', ['Base'], '40', ['Water'], 'Common', 'Mitsuhiro Arita', [
    { name: 'Pistolet à O', cost: ['Water'], convertedEnergyCost: 1, damage: '10+', text: 'Inflige 10 dégâts de plus par Énergie Eau additionnelle.' },
    { name: 'Repli', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Prévenez les dégâts sur lancer face.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '58', 'Pikachu (Joues Rouges Vintage)', 'Pokémon', ['Base'], '40', ['Lightning'], 'Common', 'Mitsuhiro Arita', [
    { name: 'Ronge', cost: ['Colorless'], convertedEnergyCost: 1, damage: '10', text: '' },
    { name: 'Étincelle', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: 'Lancez une pièce. Si pile, Pikachu s’inflige 10 dégâts.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '45', 'Chenipan', 'Pokémon', ['Base'], '40', ['Grass'], 'Common', 'Ken Sugimori', [
    { name: 'Sécrétion', cost: ['Grass'], convertedEnergyCost: 1, damage: '', text: 'Paralyse le Pokémon défenseur.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '61', 'Rattata', 'Pokémon', ['Base'], '30', ['Colorless'], 'Common', 'Ken Sugimori', [
    { name: 'Morsure', cost: ['Colorless'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '52', 'Machoc', 'Pokémon', ['Base'], '50', ['Fighting'], 'Common', 'Ken Sugimori', [
    { name: 'Poing Comète', cost: ['Fighting'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '28', 'Caninos', 'Pokémon', ['Base'], '60', ['Fire'], 'Common', 'Ken Sugimori', [
    { name: 'Flamme', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
  ]),

  // Uncommons
  c('base1', 'Set de Base Classique (1999)', '24', 'Reptincel', 'Pokémon', ['Niveau 1'], '80', ['Fire'], 'Uncommon', 'Mitsuhiro Arita', [
    { name: 'Tranche', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '30', text: '' },
    { name: 'Lance-Flammes', cost: ['Fire', 'Fire', 'Colorless'], convertedEnergyCost: 3, damage: '50', text: 'Défaussez une Énergie Feu.' }
  ], 'Salamèche'),
  c('base1', 'Set de Base Classique (1999)', '30', 'Herbizarre', 'Pokémon', ['Niveau 1'], '60', ['Grass'], 'Uncommon', 'Ken Sugimori', [
    { name: 'Fouet Lianes', cost: ['Grass', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '30', text: '' },
    { name: 'Poudre Toxik', cost: ['Grass', 'Grass'], convertedEnergyCost: 2, damage: '20', text: 'Empoisonne le défenseur.' }
  ], 'Bulbizarre'),
  c('base1', 'Set de Base Classique (1999)', '42', 'Carabaffe', 'Pokémon', ['Niveau 1'], '70', ['Water'], 'Uncommon', 'Ken Sugimori', [
    { name: 'Morsure', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '40', text: '' },
    { name: 'Coup de Crâne', cost: ['Water', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '40', text: '' }
  ], 'Carapuce'),
  c('base1', 'Set de Base Classique (1999)', '29', 'Fantominus', 'Pokémon', ['Niveau 1'], '50', ['Psychic'], 'Uncommon', 'Keiji Kinebuchi', [
    { name: 'Léchouille', cost: ['Psychic'], convertedEnergyCost: 1, damage: '10', text: 'Paralyse sur un lancer face.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '34', 'Machopeur', 'Pokémon', ['Niveau 1'], '80', ['Fighting'], 'Uncommon', 'Ken Sugimori', [
    { name: 'Frappe Karaté', cost: ['Fighting', 'Fighting', 'Colorless'], convertedEnergyCost: 3, damage: '50', text: '' }
  ], 'Machoc'),
  c('base1', 'Set de Base Classique (1999)', '96', 'Double Énergie Incolore Vintage', 'Energy', ['Spéciale'], '', [], 'Uncommon', 'Keiji Kinebuchi', []),

  // Rare (Non-Holo)
  c('base1', 'Set de Base Classique (1999)', '17', 'Roucarnage', 'Pokémon', ['Niveau 2'], '80', ['Colorless'], 'Rare', 'Kagemaru Himeno', [
    { name: 'Tornade', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' },
    { name: 'Cyclone Fantôme', cost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '40', text: 'Renvoie le Pokémon adverse sur le banc.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '18', 'Draco Vintage', 'Pokémon', ['Niveau 1'], '100', ['Colorless'], 'Rare', 'Ken Sugimori', [
    { name: 'Charge Puissante', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '40', text: '' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '21', 'Électrode', 'Pokémon', ['Niveau 1'], '80', ['Lightning'], 'Rare', 'Keiji Kinebuchi', [
    { name: 'Explosion Sacrifiée', cost: ['Lightning', 'Lightning'], convertedEnergyCost: 2, damage: '100', text: 'Électrode s’inflige 80 dégâts.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '23', 'Arcanin', 'Pokémon', ['Niveau 1'], '100', ['Fire'], 'Rare', 'Ken Sugimori', [
    { name: 'Bélier', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' },
    { name: 'Déflagration Historique', cost: ['Fire', 'Fire', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '80', text: '' }
  ]),

  // Rare Holo (The Mythic 1999 Base Set Holofoils)
  c('base1', 'Set de Base Classique (1999)', '4', 'Dracaufeu Holo 1ère Édition', 'Pokémon', ['Niveau 2'], '120', ['Fire'], 'Rare Holo', 'Mitsuhiro Arita', [
    { name: 'Brûlure d’Énergie', cost: [], convertedEnergyCost: 0, damage: '', text: 'Toutes les cartes Énergie attachées deviennent de type Feu.' },
    { name: 'Danseflamme', cost: ['Fire', 'Fire', 'Fire', 'Fire'], convertedEnergyCost: 4, damage: '100', text: 'Défaussez 2 cartes Énergie attachées à Dracaufeu pour utiliser cette attaque.' }
  ], 'Reptincel'),
  c('base1', 'Set de Base Classique (1999)', '2', 'Tortank Holo Vintage', 'Pokémon', ['Niveau 2'], '100', ['Water'], 'Rare Holo', 'Ken Sugimori', [
    { name: 'Danse Pluie', cost: [], convertedEnergyCost: 0, damage: '', text: 'Attachez autant d’Énergies Eau que vous le souhaitez pendant votre tour.' },
    { name: 'Hydrocanon', cost: ['Water', 'Water', 'Water'], convertedEnergyCost: 3, damage: '40+', text: 'Inflige 10 dégâts par Énergie Eau additionnelle.' }
  ], 'Carabaffe'),
  c('base1', 'Set de Base Classique (1999)', '15', 'Florizarre Holo Vintage', 'Pokémon', ['Niveau 2'], '100', ['Grass'], 'Rare Holo', 'Mitsuhiro Arita', [
    { name: 'Transfo Solaire', cost: [], convertedEnergyCost: 0, damage: '', text: 'Déplacez des Énergies Plante entre vos Pokémon comme vous le souhaitez.' },
    { name: 'Rayon Solaire', cost: ['Grass', 'Grass', 'Grass', 'Grass'], convertedEnergyCost: 4, damage: '60', text: '' }
  ], 'Herbizarre'),
  c('base1', 'Set de Base Classique (1999)', '10', 'Mewtwo Holo Vintage', 'Pokémon', ['Base'], '60', ['Psychic'], 'Rare Holo', 'Ken Sugimori', [
    { name: 'Bouclier Psy', cost: ['Psychic'], convertedEnergyCost: 1, damage: '', text: 'Prévenez tous les effets et dégâts d’attaques.' },
    { name: 'Psyko', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '10+', text: 'Inflige 10 dégâts supplémentaires par Énergie attachée au défenseur.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '6', 'Léviator Holo Vintage', 'Pokémon', ['Niveau 1'], '100', ['Water'], 'Rare Holo', 'Mitsuhiro Arita', [
    { name: 'Draco-Rage Suprême', cost: ['Water', 'Water', 'Water'], convertedEnergyCost: 3, damage: '50', text: '' },
    { name: 'Hydro-Fouet', cost: ['Water', 'Water', 'Water', 'Water'], convertedEnergyCost: 4, damage: '80', text: '' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '1', 'Alakazam Holo Vintage', 'Pokémon', ['Niveau 2'], '80', ['Psychic'], 'Rare Holo', 'Ken Sugimori', [
    { name: 'Transfert de Dégâts', cost: [], convertedEnergyCost: 0, damage: '', text: 'Déplacez les marqueurs de dégâts entre vos Pokémon à volonté.' },
    { name: 'Confusion Mentale', cost: ['Psychic', 'Psychic', 'Psychic'], convertedEnergyCost: 3, damage: '30', text: 'Le Pokémon adverse est maintenant Confus.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '16', 'Électhor Holo Vintage', 'Pokémon', ['Base'], '90', ['Lightning'], 'Rare Holo', 'Ken Sugimori', [
    { name: 'Fatal-Foudre Épique', cost: ['Lightning', 'Lightning', 'Lightning', 'Colorless'], convertedEnergyCost: 4, damage: '100', text: 'Lancez une pièce. Si pile, s’inflige 30 dégâts.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '8', 'Mackogneur Holo 1ère Édition', 'Pokémon', ['Niveau 2'], '100', ['Fighting'], 'Rare Holo', 'Ken Sugimori', [
    { name: 'Frappe Sismique', cost: ['Fighting', 'Fighting', 'Fighting', 'Colorless'], convertedEnergyCost: 4, damage: '60', text: '' }
  ], 'Machopeur'),
  c('base1', 'Set de Base Classique (1999)', '12', 'Feunard Holo Vintage', 'Pokémon', ['Niveau 1'], '80', ['Fire'], 'Rare Holo', 'Ken Sugimori', [
    { name: 'Flamme Démoniaque', cost: ['Fire', 'Fire'], convertedEnergyCost: 2, damage: '30', text: '' },
    { name: 'Déflagration 1999', cost: ['Fire', 'Fire', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '80', text: 'Défaussez une Énergie Feu.' }
  ]),

  // Double Rare (Vintage Promo Relics)
  c('base1', 'Set de Base Classique (1999)', '58', 'Pikachu Joues Jaunes Trésor', 'Pokémon', ['Base'], '40', ['Lightning'], 'Double Rare', 'Mitsuhiro Arita', [
    { name: 'Tonnerre Historique', cost: ['Lightning', 'Lightning'], convertedEnergyCost: 2, damage: '50', text: 'La version culte qui a marqué des générations.' }
  ]),

  // Illustration Rare (Vintage Shadowless Tribute)
  c('base1', 'Set de Base Classique (1999)', '2', 'Tortank Shadowless Sans Ombre', 'Pokémon', ['Niveau 2'], '100', ['Water'], 'Illustration Rare', 'Ken Sugimori', [
    { name: 'Torrent Originel', cost: ['Water', 'Water', 'Water'], convertedEnergyCost: 3, damage: '120', text: 'Tirage collector d’exception sans ombre latérale.' }
  ]),
  c('base1', 'Set de Base Classique (1999)', '15', 'Florizarre Shadowless Sans Ombre', 'Pokémon', ['Niveau 2'], '100', ['Grass'], 'Illustration Rare', 'Mitsuhiro Arita', [
    { name: 'Rayon Solaire Pur', cost: ['Grass', 'Grass', 'Grass', 'Grass'], convertedEnergyCost: 4, damage: '100', text: 'Tirage sans ombre rarissime de 1999.' }
  ]),

  // Special Illustration Rare (The Holy 1st Edition Charizard)
  c('base1', 'Set de Base Classique (1999)', '4', 'Dracaufeu 1ère Édition Sans Ombre', 'Pokémon', ['Niveau 2'], '120', ['Fire'], 'Special Illustration Rare', 'Mitsuhiro Arita', [
    { name: 'Danseflamme Mythique', cost: ['Fire', 'Fire', 'Fire', 'Fire'], convertedEnergyCost: 4, damage: '150', text: 'La Sainte Trinité du TCG Pokémon. Estimée à des centaines de milliers d’euros en état PSA 10.' }
  ]),

  // Hyper Rare (Gem Mint Gold Edition)
  c('base1', 'Set de Base Classique (1999)', '4', 'Dracaufeu 1999 Gem Mint Collector', 'Pokémon', ['Niveau 2'], '120', ['Fire'], 'Hyper Rare', 'Mitsuhiro Arita', [
    { name: 'Danseflamme Immortelle', cost: ['Fire', 'Fire', 'Fire', 'Fire'], convertedEnergyCost: 4, damage: '200', text: 'Le trésor absolu de tout collectionneur. Un véritable artefact du patrimoine Pokémon.' }
  ]),


  // ==========================================
  // SET 5: Faille Paradoxe (sv4)
  // ==========================================
  // Commons
  c('sv4', 'Faille Paradoxe', '66', 'Pohm', 'Pokémon', ['Base'], '60', ['Lightning'], 'Common', 'Atsushi Furusawa', [
    { name: 'Frotte-Frimousse', cost: ['Lightning'], convertedEnergyCost: 1, damage: '10', text: 'Paralyse le Pokémon Défenseur.' }
  ]),
  c('sv4', 'Faille Paradoxe', '26', 'Tritox', 'Pokémon', ['Base'], '70', ['Fire'], 'Common', 'Narumi Sato', [
    { name: 'Gaz Brûlant', cost: ['Fire'], convertedEnergyCost: 1, damage: '10', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '90', 'Axoloto de Paldea', 'Pokémon', ['Base'], '60', ['Darkness'], 'Common', 'Kouki Saitou', [
    { name: 'Tir Fangeux', cost: ['Darkness'], convertedEnergyCost: 1, damage: '10', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '25', 'Malvalame', 'Pokémon', ['Base'], '80', ['Fire'], 'Common', 'hncl', [
    { name: 'Lame Étincelle', cost: ['Fire'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '15', 'Poltchageist', 'Pokémon', ['Base'], '30', ['Grass'], 'Common', 'HYOGONOSUKE', [
    { name: 'Éclaboussure de Thé', cost: ['Grass'], convertedEnergyCost: 1, damage: '10', text: 'Soignez 10 dégâts.' }
  ]),
  c('sv4', 'Faille Paradoxe', '7', 'Coxy', 'Pokémon', ['Base'], '50', ['Grass'], 'Common', 'Shibuzoh.', [
    { name: 'Poing Étoilé', cost: ['Grass'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '85', 'Flabébé', 'Pokémon', ['Base'], '40', ['Psychic'], 'Common', 'sowsow', [
    { name: 'Brise Féerique', cost: ['Psychic'], convertedEnergyCost: 1, damage: '20', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '70', 'Morpeko', 'Pokémon', ['Base'], '70', ['Lightning'], 'Common', 'Teeziro', [
    { name: 'Roue Électrique', cost: ['Lightning'], convertedEnergyCost: 1, damage: '30', text: '' }
  ]),

  // Uncommons
  c('sv4', 'Faille Paradoxe', '67', 'Pohmotte', 'Pokémon', ['Niveau 1'], '90', ['Lightning'], 'Uncommon', 'Kouki Saitou', [
    { name: 'Éclair Vivant', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
  ], 'Pohm'),
  c('sv4', 'Faille Paradoxe', '27', 'Malamandre', 'Pokémon', ['Niveau 1'], '110', ['Fire'], 'Uncommon', 'Anesaki Dynamic', [
    { name: 'Venin Dévorant', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '60+', text: 'Inflige 60 dégâts supplémentaires si le défenseur est empoisonné.' }
  ], 'Tritox'),
  c('sv4', 'Faille Paradoxe', '16', 'Théffroyable', 'Pokémon', ['Niveau 1'], '70', ['Grass'], 'Uncommon', 'Mizue', [
    { name: 'Cérémonie du Thé', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: 'Piochez 2 cartes.' }
  ], 'Poltchageist'),
  c('sv4', 'Faille Paradoxe', '95', 'Forgelina', 'Pokémon', ['Niveau 1'], '80', ['Psychic'], 'Uncommon', 'chibi', [
    { name: 'Marteau Fracassant', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '8', 'Coxyclaque', 'Pokémon', ['Niveau 1'], '90', ['Grass'], 'Uncommon', 'Teeziro', [
    { name: 'Frappe Fulgurante', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '70', text: '' }
  ], 'Coxy'),

  // Rare & Rare Holo
  c('sv4', 'Faille Paradoxe', '38', 'Carchacrok', 'Pokémon', ['Niveau 2'], '160', ['Fighting'], 'Rare Holo', 'Shinji Kanda', [
    { name: 'Tranch’Air Rafale', cost: ['Fighting', 'Fighting'], convertedEnergyCost: 2, damage: '160', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '114', 'Métalosse', 'Pokémon', ['Niveau 2'], '170', ['Metal'], 'Rare Holo', 'kawayoo', [
    { name: 'Impact Météorite', cost: ['Metal', 'Metal', 'Colorless'], convertedEnergyCost: 3, damage: '180', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '105', 'Steelix', 'Pokémon', ['Niveau 1'], '180', ['Metal'], 'Rare Holo', 'Gou Kagairu', [
    { name: 'Séisme Terrestre', cost: ['Metal', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '130', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '30', 'Heatran', 'Pokémon', ['Base'], '140', ['Fire'], 'Rare Holo', 'chibi', [
    { name: 'Magma Tempête', cost: ['Fire', 'Fire', 'Colorless'], convertedEnergyCost: 3, damage: '140', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '150', 'Boréas', 'Pokémon', ['Base'], '110', ['Colorless'], 'Rare Holo', 'nagimiso', [
    { name: 'Typhon Ravageur', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '80', text: '' }
  ]),

  // Double Rare (ex)
  c('sv4', 'Faille Paradoxe', '124', 'Rugit-Lune-ex (Temps Passé)', 'Pokémon', ['Base', 'ex'], '230', ['Darkness'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Frénésie Furieuse', cost: ['Darkness', 'Darkness', 'Colorless'], convertedEnergyCost: 3, damage: '', text: 'Mettez K.O. le Pokémon Actif adverse. Rugit-Lune s’inflige 200 dégâts.' },
    { name: 'Tempête Calamiteuse', cost: ['Darkness', 'Darkness', 'Colorless'], convertedEnergyCost: 3, damage: '140+', text: 'Défaussez un Stade en jeu pour infliger 80 dégâts de plus.' }
  ]),
  c('sv4', 'Faille Paradoxe', '89', 'Garde-de-Fer-ex (Temps Futur)', 'Pokémon', ['Base', 'ex'], '220', ['Psychic'], 'Double Rare', 'PLANETA Yamashita', [
    { name: 'Particules Tachyon', cost: [], convertedEnergyCost: 0, damage: '', text: 'Placez 2 marqueurs de dégâts sur un Pokémon adverse lors de son entrée en jeu.' },
    { name: 'Lame Laser', cost: ['Psychic', 'Psychic', 'Colorless'], convertedEnergyCost: 3, damage: '200', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '58', 'Mewtwo-ex (Téra Électrique)', 'Pokémon', ['Base', 'ex'], '230', ['Lightning'], 'Double Rare', '5ban Graphics', [
    { name: 'Transfert Énergie', cost: ['Lightning'], convertedEnergyCost: 1, damage: '', text: 'Déplacez 2 Énergies de votre Banc.' },
    { name: 'Photon Foudroyant', cost: ['Lightning', 'Lightning', 'Colorless'], convertedEnergyCost: 3, damage: '180+', text: 'Inflige 60 dégâts de plus si 4 Énergies ou plus sont attachées.' }
  ]),
  c('sv4', 'Faille Paradoxe', '164', 'Tapatoès-ex', 'Pokémon', ['Base', 'ex'], '260', ['Colorless'], 'Double Rare', 'PLANETA Mochizuki', [
    { name: 'Haut-Parleur Fou', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '120', text: '' }
  ]),

  // Illustration Rare
  c('sv4', 'Faille Paradoxe', '199', 'Groudon (Illustration)', 'Pokémon', ['Base'], '130', ['Fighting'], 'Illustration Rare', 'Nurikabe', [
    { name: 'Magma Éruptif', cost: ['Fighting', 'Fighting'], convertedEnergyCost: 2, damage: '60×', text: 'Défaussez jusqu’à 4 Énergies de votre main pour 60 dégâts chacune.' }
  ]),
  c('sv4', 'Faille Paradoxe', '205', 'Yveltal (Illustration)', 'Pokémon', ['Base'], '110', ['Darkness'], 'Illustration Rare', 'Jerky', [
    { name: 'Aile d’Ombre', cost: ['Darkness', 'Colorless'], convertedEnergyCost: 2, damage: '110', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '208', 'Steelix (Illustration)', 'Pokémon', ['Niveau 1'], '180', ['Metal'], 'Illustration Rare', 'Shinji Kanda', [
    { name: 'Tunnel Sismique', cost: ['Metal', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '130', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '206', 'Morpeko (Illustration)', 'Pokémon', ['Base'], '70', ['Lightning'], 'Illustration Rare', 'sowsow', [
    { name: 'Course Électrique Gourmande', cost: ['Lightning'], convertedEnergyCost: 1, damage: '70', text: '' }
  ]),
  c('sv4', 'Faille Paradoxe', '214', 'Porygon-Z (Illustration)', 'Pokémon', ['Niveau 2'], '150', ['Colorless'], 'Illustration Rare', 'Gou Kagairu', [
    { name: 'Bug Cybernétique', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '140', text: '' }
  ]),

  // Special Illustration Rare
  c('sv4', 'Faille Paradoxe', '251', 'Rugit-Lune-ex (Spécial Illustration)', 'Pokémon', ['Base', 'ex'], '230', ['Darkness'], 'Special Illustration Rare', 'Ryota Murayama', [
    { name: 'Calamité Ancestrale', cost: ['Darkness', 'Darkness', 'Colorless'], convertedEnergyCost: 3, damage: '220', text: 'Le prédateur suprême du temps immémorial dans toute sa sauvagerie.' }
  ]),
  c('sv4', 'Faille Paradoxe', '249', 'Garde-de-Fer-ex (Spécial Illustration)', 'Pokémon', ['Base', 'ex'], '220', ['Psychic'], 'Special Illustration Rare', 'Teeziro', [
    { name: 'Surcharge Tachyonique', cost: ['Psychic', 'Psychic', 'Colorless'], convertedEnergyCost: 3, damage: '210', text: 'L’intelligence artificielle combattante du futur lointain.' }
  ]),
  c('sv4', 'Faille Paradoxe', '245', 'Carchacrok-ex (Spécial Illustration)', 'Pokémon', ['Niveau 2', 'ex'], '320', ['Water'], 'Special Illustration Rare', 'Oswaldo KATO', [
    { name: 'Plongée Hydro-Draco', cost: ['Water'], convertedEnergyCost: 1, damage: '160', text: 'Attachez 3 Énergies Eau de votre défausse à vos Pokémon de Banc.' }
  ]),
  c('sv4', 'Faille Paradoxe', '254', 'Mashynn (Spécial Illustration)', 'Trainer', ['Supporter'], '', [], 'Special Illustration Rare', 'kirisAki', []),

  // Hyper Rare
  c('sv4', 'Faille Paradoxe', '262', 'Rugit-Lune-ex (Or Brillant)', 'Pokémon', ['Base', 'ex'], '230', ['Darkness'], 'Hyper Rare', 'PLANETA Mochizuki', [
    { name: 'Fureur Dorée Antique', cost: ['Darkness', 'Darkness', 'Colorless'], convertedEnergyCost: 3, damage: '230', text: 'La relique antique parée d’un éclat doré majestueux.' }
  ]),
  c('sv4', 'Faille Paradoxe', '261', 'Garde-de-Fer-ex (Or Brillant)', 'Pokémon', ['Base', 'ex'], '220', ['Psychic'], 'Hyper Rare', 'PLANETA Yamashita', [
    { name: 'Hyper-Technologie Or', cost: ['Psychic', 'Psychic', 'Colorless'], convertedEnergyCost: 3, damage: '220', text: 'Châssis futuriste plaqué or pur.' }
  ]),
  c('sv4', 'Faille Paradoxe', '260', 'Capsule Énergie Booster (Or Brillant)', 'Trainer', ['Item'], '', [], 'Hyper Rare', 'Studio Bora Inc.', [])
];

const fileContent = `import { ExpansionSet, PokemonCard } from '../types/pokemon';

export const EXPANSION_SETS: ExpansionSet[] = ${JSON.stringify(EXPANSION_SETS, null, 2)};

export const CARDS_DATABASE: PokemonCard[] = ${JSON.stringify(CARDS, null, 2)};

// Raretés par groupe
export const RARITY_GROUPS = {
  Common: CARDS_DATABASE.filter(c => c.rarity === 'Common'),
  Uncommon: CARDS_DATABASE.filter(c => c.rarity === 'Uncommon'),
  RareHolo: CARDS_DATABASE.filter(c => c.rarity === 'Rare' || c.rarity === 'Rare Holo'),
  DoubleRare: CARDS_DATABASE.filter(c => c.rarity === 'Double Rare'),
  IllustrationRare: CARDS_DATABASE.filter(c => c.rarity === 'Illustration Rare'),
  SpecialIllustrationRare: CARDS_DATABASE.filter(c => c.rarity === 'Special Illustration Rare'),
  HyperRare: CARDS_DATABASE.filter(c => c.rarity === 'Hyper Rare')
};

// Algorithme officiel de simulation de booster TCG
export function generateBoosterPack(setId: string = 'sv3pt5'): { cards: PokemonCard[]; isGodPack: boolean } {
  // Support à la fois de sv3 et sv03 au cas où
  const targetId = setId === 'sv03' ? 'sv3' : setId;
  let setCards = CARDS_DATABASE.filter(c => c.setId === targetId);
  if (setCards.length === 0) {
    setCards = CARDS_DATABASE.filter(c => c.setId === 'sv3pt5');
  }

  const commons = setCards.filter(c => c.rarity === 'Common');
  const uncommons = setCards.filter(c => c.rarity === 'Uncommon');
  const rareHolos = setCards.filter(c => c.rarity === 'Rare Holo' || c.rarity === 'Rare');
  const doubleRares = setCards.filter(c => c.rarity === 'Double Rare');
  const illustrationRares = setCards.filter(c => c.rarity === 'Illustration Rare');
  const specialIllustrationRares = setCards.filter(c => c.rarity === 'Special Illustration Rare');
  const hyperRares = setCards.filter(c => c.rarity === 'Hyper Rare');

  const randomFrom = (list: PokemonCard[]) => {
    if (list.length === 0) return setCards[Math.floor(Math.random() * setCards.length)];
    return list[Math.floor(Math.random() * list.length)];
  };

  // 1% de chance de \"God Pack\" (paquet mythique rempli uniquement de Full Art / SIR / Gold)
  const isGodPack = Math.random() < 0.01;
  if (isGodPack) {
    const godCards: PokemonCard[] = [];
    const pool = [...illustrationRares, ...specialIllustrationRares, ...hyperRares];
    const safePool = pool.length > 0 ? pool : setCards;
    for (let i = 0; i < 10; i++) {
      godCards.push(randomFrom(safePool));
    }
    return { cards: godCards, isGodPack: true };
  }

  const pack: PokemonCard[] = [];

  // Slot 1 à 4 : Communes (4 cartes)
  for (let i = 0; i < 4; i++) {
    pack.push(randomFrom(commons.length > 0 ? commons : setCards));
  }

  // Slot 5 à 7 : Peu Communes (3 cartes)
  for (let i = 0; i < 3; i++) {
    pack.push(randomFrom(uncommons.length > 0 ? uncommons : setCards));
  }

  // Slot 8 : Reverse Holo / Illustration Rare Slot (1 carte)
  const rollSlot8 = Math.random();
  if (rollSlot8 < 0.16 && illustrationRares.length > 0) {
    pack.push(randomFrom(illustrationRares));
  } else if (rollSlot8 < 0.5) {
    pack.push(randomFrom(uncommons.length > 0 ? uncommons : setCards));
  } else {
    pack.push(randomFrom(commons.length > 0 ? commons : setCards));
  }

  // Slot 9 : Carte Majeure / Ultra Rare Slot (1 carte)
  const rollSlot9 = Math.random();
  if (rollSlot9 < 0.03 && hyperRares.length > 0) {
    pack.push(randomFrom(hyperRares));
  } else if (rollSlot9 < 0.12 && specialIllustrationRares.length > 0) {
    pack.push(randomFrom(specialIllustrationRares));
  } else if (rollSlot9 < 0.30 && illustrationRares.length > 0) {
    pack.push(randomFrom(illustrationRares));
  } else if (rollSlot9 < 0.65 && doubleRares.length > 0) {
    pack.push(randomFrom(doubleRares));
  } else {
    pack.push(randomFrom(rareHolos.length > 0 ? rareHolos : (uncommons.length > 0 ? uncommons : setCards)));
  }

  // Slot 10 : Énergie ou Commune finale
  pack.push(randomFrom(commons.length > 0 ? commons : setCards));

  return { cards: pack, isGodPack: false };
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/pokemonData.ts'), fileContent, 'utf-8');
console.log('Successfully generated pokemonData.ts with', CARDS.length, 'cards across', EXPANSION_SETS.length, 'expansion sets!');
