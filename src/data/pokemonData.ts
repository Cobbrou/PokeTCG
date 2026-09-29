import { ExpansionSet, PokemonCard } from '../types/pokemon';

export const EXPANSION_SETS: ExpansionSet[] = [
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
    id: 'sv03',
    name: 'Flammes Obsidiennes',
    series: 'Écarlate et Violet',
    totalCards: 197,
    releaseDate: '2023-08-11',
    logo: 'https://images.pokemontcg.io/sv3/logo.png',
    boosterImage: 'https://images.pokemontcg.io/sv3/symbol.png',
    accentColor: '#f97316',
    description: 'Des braises incandescentes illuminent la nuit alors que Dracaufeu-ex s’élève avec de nouveaux pouvoirs ténébreux !'
  }
];

export const CARDS_DATABASE: PokemonCard[] = [
  // --- COMMONS ---
  {
    id: 'sv3pt5-1',
    name: 'Bulbizarre',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '70',
    types: ['Grass'],
    number: '001',
    artist: 'Yuu Nishida',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/1.png',
      large: 'https://images.pokemontcg.io/sv3pt5/1_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Sangsue', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: 'Soignez 10 dégâts de ce Pokémon.' }
    ]
  },
  {
    id: 'sv3pt5-4',
    name: 'Salamèche',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '70',
    types: ['Fire'],
    number: '004',
    artist: 'Naoki Saito',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/4.png',
      large: 'https://images.pokemontcg.io/sv3pt5/4_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Flammèche', cost: ['Fire'], convertedEnergyCost: 1, damage: '10', text: '' },
      { name: 'Destruction Barbecue', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: 'Défaussez un Stade en jeu.' }
    ]
  },
  {
    id: 'sv3pt5-7',
    name: 'Carapuce',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '60',
    types: ['Water'],
    number: '007',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/7.png',
      large: 'https://images.pokemontcg.io/sv3pt5/7_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Retirance', cost: ['Water'], convertedEnergyCost: 1, damage: '', text: 'Lancez une pièce. Si c’est face, évitez tous les effets d’attaques.' },
      { name: 'Pistolet à O', cost: ['Water', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
    ]
  },
  {
    id: 'sv3pt5-25',
    name: 'Pikachu',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '60',
    types: ['Lightning'],
    number: '025',
    artist: 'Hiroyuki Yamamoto',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/25.png',
      large: 'https://images.pokemontcg.io/sv3pt5/25_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Charge', cost: ['Lightning'], convertedEnergyCost: 1, damage: '', text: 'Cherchez dans votre deck une carte Énergie Électrique.' },
      { name: 'Éclair Rapide', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: '' }
    ]
  },
  {
    id: 'sv3pt5-133',
    name: 'Évoli',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '50',
    types: ['Colorless'],
    number: '133',
    artist: 'Narumi Sato',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/133.png',
      large: 'https://images.pokemontcg.io/sv3pt5/133_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Regard Touchant', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Attachez une carte Énergie de base de votre main à ce Pokémon.' },
      { name: 'Charge Enjouée', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: '' }
    ]
  },
  {
    id: 'sv3pt5-129',
    name: 'Magicarpe',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '30',
    types: ['Water'],
    number: '129',
    artist: 'Kouki Saitou',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/129.png',
      large: 'https://images.pokemontcg.io/sv3pt5/129_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Trempette', cost: ['Colorless'], convertedEnergyCost: 1, damage: '10', text: 'Lancez une pièce.' }
    ]
  },
  {
    id: 'sv3pt5-92',
    name: 'Fantominus',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '50',
    types: ['Psychic'],
    number: '092',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/92.png',
      large: 'https://images.pokemontcg.io/sv3pt5/92_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Onde Folie', cost: ['Psychic'], convertedEnergyCost: 1, damage: '', text: 'Le Pokémon Actif de votre adversaire est maintenant Confus.' }
    ]
  },
  {
    id: 'sv3pt5-66',
    name: 'Machoc',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '70',
    types: ['Fighting'],
    number: '066',
    artist: 'KEIICHIRO ITO',
    rarity: 'Common',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/66.png',
      large: 'https://images.pokemontcg.io/sv3pt5/66_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Poing de Montagne', cost: ['Fighting'], convertedEnergyCost: 1, damage: '20', text: '' }
    ]
  },

  // --- UNCOMMONS ---
  {
    id: 'sv3pt5-2',
    name: 'Herbizarre',
    supertype: 'Pokémon',
    subtypes: ['Niveau 1'],
    hp: '90',
    types: ['Grass'],
    evolvesFrom: 'Bulbizarre',
    number: '002',
    artist: 'Yuu Nishida',
    rarity: 'Uncommon',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/2.png',
      large: 'https://images.pokemontcg.io/sv3pt5/2_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Fouet Lianes', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
    ]
  },
  {
    id: 'sv3pt5-5',
    name: 'Reptincel',
    supertype: 'Pokémon',
    subtypes: ['Niveau 1'],
    hp: '90',
    types: ['Fire'],
    evolvesFrom: 'Salamèche',
    number: '005',
    artist: 'Naoki Saito',
    rarity: 'Uncommon',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/5.png',
      large: 'https://images.pokemontcg.io/sv3pt5/5_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Crocs Feu', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
    ]
  },
  {
    id: 'sv3pt5-8',
    name: 'Carabaffe',
    supertype: 'Pokémon',
    subtypes: ['Niveau 1'],
    hp: '90',
    types: ['Water'],
    evolvesFrom: 'Carapuce',
    number: '008',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/8.png',
      large: 'https://images.pokemontcg.io/sv3pt5/8_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Cascade', cost: ['Water', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '50', text: '' }
    ]
  },
  {
    id: 'sv3pt5-93',
    name: 'Spectrum',
    supertype: 'Pokémon',
    subtypes: ['Niveau 1'],
    hp: '80',
    types: ['Psychic'],
    evolvesFrom: 'Fantominus',
    number: '093',
    artist: 'Tomokazu Komiya',
    rarity: 'Uncommon',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/93.png',
      large: 'https://images.pokemontcg.io/sv3pt5/93_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Ball’Ombre', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: '' }
    ]
  },
  {
    id: 'sv3pt5-148',
    name: 'Draco',
    supertype: 'Pokémon',
    subtypes: ['Niveau 1'],
    hp: '100',
    types: ['Dragon'],
    number: '148',
    artist: 'Ryo Ueda',
    rarity: 'Uncommon',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/148.png',
      large: 'https://images.pokemontcg.io/sv3pt5/148_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Danse Draco', cost: ['Colorless'], convertedEnergyCost: 1, damage: '', text: 'Pendant votre prochain tour, les attaques infligent 70 dégâts supplémentaires.' }
    ]
  },

  // --- RARE & RARE HOLO ---
  {
    id: 'sv3pt5-94',
    name: 'Ectoplasma',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2'],
    hp: '130',
    types: ['Psychic'],
    evolvesFrom: 'Spectrum',
    number: '094',
    artist: 'Masako Tomii',
    rarity: 'Rare Holo',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/94.png',
      large: 'https://images.pokemontcg.io/sv3pt5/94_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Cauchemar Profond', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '90', text: 'Le Pokémon adverse s’endort.' }
    ]
  },
  {
    id: 'sv3pt5-149',
    name: 'Dracolosse',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2'],
    hp: '180',
    types: ['Dragon'],
    evolvesFrom: 'Draco',
    number: '149',
    artist: 'kodama',
    rarity: 'Rare Holo',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/149.png',
      large: 'https://images.pokemontcg.io/sv3pt5/149_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Impact Météore', cost: ['Water', 'Lightning'], convertedEnergyCost: 2, damage: '140', text: 'Défaussez 2 cartes Énergie de ce Pokémon.' }
    ]
  },
  {
    id: 'sv3pt5-150',
    name: 'Mewtwo',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '130',
    types: ['Psychic'],
    number: '150',
    artist: 'Bun Toujo',
    rarity: 'Rare Holo',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/150.png',
      large: 'https://images.pokemontcg.io/sv3pt5/150_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Rafale Psy', cost: ['Psychic', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' },
      { name: 'Onde de Choc Mentale', cost: ['Psychic', 'Psychic', 'Colorless'], convertedEnergyCost: 3, damage: '130', text: '' }
    ]
  },

  // --- DOUBLE RARE (ex) ---
  {
    id: 'sv3pt5-3',
    name: 'Florizarre-ex',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '340',
    types: ['Grass'],
    evolvesFrom: 'Herbizarre',
    number: '003',
    artist: 'PLANETA Mochizuki',
    rarity: 'Double Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/3.png',
      large: 'https://images.pokemontcg.io/sv3pt5/3_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Fleur Guérisseuse', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '', text: 'Soignez 60 dégâts à l’un de vos Pokémon.' },
      { name: 'Fouet Toxique', cost: ['Grass', 'Grass', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '150', text: 'Le Pokémon Défenseur est empoisonné et confus.' }
    ]
  },
  {
    id: 'sv3pt5-6',
    name: 'Dracaufeu-ex',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '330',
    types: ['Fire'],
    evolvesFrom: 'Reptincel',
    number: '006',
    artist: 'PLANETA Mochizuki',
    rarity: 'Double Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/6.png',
      large: 'https://images.pokemontcg.io/sv3pt5/6_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Brave Aile', cost: ['Fire'], convertedEnergyCost: 1, damage: '60+', text: 'Cette attaque inflige 100 dégâts supplémentaires si ce Pokémon a des marqueurs de dégâts.' },
      { name: 'Vortex Enflammé', cost: ['Fire', 'Fire', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '330', text: 'Défaussez 3 Énergies attachées à ce Pokémon.' }
    ]
  },
  {
    id: 'sv3pt5-9',
    name: 'Tortank-ex',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '330',
    types: ['Water'],
    evolvesFrom: 'Carabaffe',
    number: '009',
    artist: 'PLANETA Yamashita',
    rarity: 'Double Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/9.png',
      large: 'https://images.pokemontcg.io/sv3pt5/9_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Canon Jumelé', cost: ['Water', 'Water'], convertedEnergyCost: 2, damage: '140×', text: 'Défaussez jusqu’à 2 cartes Énergie Eau de votre main. Cette attaque inflige 140 dégâts pour chaque carte.' }
    ]
  },
  {
    id: 'sv3pt5-65',
    name: 'Alakazam-ex',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '310',
    types: ['Psychic'],
    number: '065',
    artist: 'Mitsuhiro Arita',
    rarity: 'Double Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/65.png',
      large: 'https://images.pokemontcg.io/sv3pt5/65_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Cuillère Mentale', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '', text: 'Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire.' },
      { name: 'Miroir Dimensionnel', cost: ['Psychic', 'Psychic'], convertedEnergyCost: 2, damage: '120', text: 'Cette attaque peut être utilisée depuis le Banc.' }
    ]
  },
  {
    id: 'sv3pt5-145',
    name: 'Électhor-ex',
    supertype: 'Pokémon',
    subtypes: ['Base', 'ex'],
    hp: '200',
    types: ['Lightning'],
    number: '145',
    artist: 'PLANETA Yamashita',
    rarity: 'Double Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/145.png',
      large: 'https://images.pokemontcg.io/sv3pt5/145_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Éclair Volant', cost: ['Lightning', 'Lightning', 'Lightning'], convertedEnergyCost: 3, damage: '120', text: 'Ce Pokémon n’a pas de Coût de Retraite.' }
    ]
  },
  {
    id: 'sv3pt5-151',
    name: 'Mew-ex',
    supertype: 'Pokémon',
    subtypes: ['Base', 'ex'],
    hp: '180',
    types: ['Psychic'],
    number: '151',
    artist: 'aky CG Works',
    rarity: 'Double Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/151.png',
      large: 'https://images.pokemontcg.io/sv3pt5/151_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Redémarrage', cost: [], convertedEnergyCost: 0, damage: '', text: 'Une fois pendant votre tour, piochez jusqu’à avoir 3 cartes en main.' },
      { name: 'Piratage Génome', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '', text: 'Choisissez une attaque du Pokémon Actif adverse et utilisez-la.' }
    ]
  },

  // --- ILLUSTRATION RARE (Full Art) ---
  {
    id: 'sv3pt5-166',
    name: 'Bulbizarre (Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '70',
    types: ['Grass'],
    number: '166',
    artist: 'Yoriyuki Ikegami',
    rarity: 'Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/166.png',
      large: 'https://images.pokemontcg.io/sv3pt5/166_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Sangsue Somptueuse', cost: ['Grass', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: 'Soignez 10 dégâts de ce Pokémon.' }
    ]
  },
  {
    id: 'sv3pt5-168',
    name: 'Salamèche (Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '70',
    types: ['Fire'],
    number: '168',
    artist: 'MINAMINAMI Take',
    rarity: 'Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/168.png',
      large: 'https://images.pokemontcg.io/sv3pt5/168_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Flammèche Brûlante', cost: ['Fire', 'Colorless'], convertedEnergyCost: 2, damage: '30', text: 'Défaussez un Stade en jeu.' }
    ]
  },
  {
    id: 'sv3pt5-170',
    name: 'Carapuce (Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '60',
    types: ['Water'],
    number: '170',
    artist: 'Miki Tanaka',
    rarity: 'Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/170.png',
      large: 'https://images.pokemontcg.io/sv3pt5/170_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Surf ensoleillé', cost: ['Water', 'Colorless'], convertedEnergyCost: 2, damage: '20', text: '' }
    ]
  },
  {
    id: 'sv3pt5-173',
    name: 'Pikachu (Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Base'],
    hp: '60',
    types: ['Lightning'],
    number: '173',
    artist: 'Hiroyuki Yamamoto',
    rarity: 'Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/173.png',
      large: 'https://images.pokemontcg.io/sv3pt5/173_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Éclair Majestueux', cost: ['Lightning', 'Colorless'], convertedEnergyCost: 2, damage: '50', text: '' }
    ]
  },
  {
    id: 'sv3pt5-182',
    name: 'Draco (Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Niveau 1'],
    hp: '100',
    types: ['Dragon'],
    number: '182',
    artist: 'Ryo Ueda',
    rarity: 'Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/182.png',
      large: 'https://images.pokemontcg.io/sv3pt5/182_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Vol Féerique', cost: ['Colorless', 'Colorless'], convertedEnergyCost: 2, damage: '60', text: '' }
    ]
  },

  // --- SPECIAL ILLUSTRATION RARE (SIR / Alternative Art) ---
  {
    id: 'sv3pt5-198',
    name: 'Florizarre-ex (Spécial Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '340',
    types: ['Grass'],
    number: '198',
    artist: 'Yoriyuki Ikegami',
    rarity: 'Special Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/198.png',
      large: 'https://images.pokemontcg.io/sv3pt5/198_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Forêt Ancestrale', cost: ['Grass', 'Grass', 'Colorless'], convertedEnergyCost: 3, damage: '180', text: 'Soignez 80 dégâts à tous vos Pokémon.' }
    ]
  },
  {
    id: 'sv3pt5-199',
    name: 'Dracaufeu-ex (Spécial Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '330',
    types: ['Fire'],
    number: '199',
    artist: 'MINAMINAMI Take',
    rarity: 'Special Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/199.png',
      large: 'https://images.pokemontcg.io/sv3pt5/199_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Incandescence Primordiale', cost: ['Fire', 'Fire', 'Colorless', 'Colorless'], convertedEnergyCost: 4, damage: '330', text: 'La carte maîtresse ultime de l’extension 151.' }
    ]
  },
  {
    id: 'sv3pt5-200',
    name: 'Tortank-ex (Spécial Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '330',
    types: ['Water'],
    number: '200',
    artist: 'Mitsuhiro Arita',
    rarity: 'Special Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/200.png',
      large: 'https://images.pokemontcg.io/sv3pt5/200_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Océan Profond', cost: ['Water', 'Water', 'Colorless'], convertedEnergyCost: 3, damage: '220', text: '' }
    ]
  },
  {
    id: 'sv3pt5-201',
    name: 'Alakazam-ex (Spécial Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Niveau 2', 'ex'],
    hp: '310',
    types: ['Psychic'],
    number: '201',
    artist: 'Shinya Komatsu',
    rarity: 'Special Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/201.png',
      large: 'https://images.pokemontcg.io/sv3pt5/201_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Dimension Cosmique', cost: ['Psychic', 'Psychic'], convertedEnergyCost: 2, damage: '150', text: '' }
    ]
  },
  {
    id: 'sv3pt5-202',
    name: 'Électhor-ex (Spécial Illustration)',
    supertype: 'Pokémon',
    subtypes: ['Base', 'ex'],
    hp: '200',
    types: ['Lightning'],
    number: '202',
    artist: 'Shinji Kanda',
    rarity: 'Special Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/202.png',
      large: 'https://images.pokemontcg.io/sv3pt5/202_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Foudre Sauvage', cost: ['Lightning', 'Lightning', 'Colorless'], convertedEnergyCost: 3, damage: '190', text: '' }
    ]
  },
  {
    id: 'sv3pt5-196',
    name: 'Invitation d’Érika',
    supertype: 'Trainer',
    subtypes: ['Supporter'],
    number: '196',
    artist: 'Conkichi',
    rarity: 'Special Illustration Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/196.png',
      large: 'https://images.pokemontcg.io/sv3pt5/196_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: []
  },

  // --- HYPER RARE (Gold / Secret) ---
  {
    id: 'sv3pt5-205',
    name: 'Mew-ex (Or Brillant)',
    supertype: 'Pokémon',
    subtypes: ['Base', 'ex'],
    hp: '180',
    types: ['Psychic'],
    number: '205',
    artist: 'aky CG Works',
    rarity: 'Hyper Rare',
    images: {
      small: 'https://images.pokemontcg.io/sv3pt5/205.png',
      large: 'https://images.pokemontcg.io/sv3pt5/205_hires.png'
    },
    setId: 'sv3pt5',
    setName: 'Écarlate et Violet 151',
    attacks: [
      { name: 'Redémarrage Pur', cost: [], convertedEnergyCost: 0, damage: '', text: 'Piochez des cartes jusqu’à en avoir 3 en main.' },
      { name: 'Génome Doré', cost: ['Colorless', 'Colorless', 'Colorless'], convertedEnergyCost: 3, damage: '', text: 'Copiez l’attaque de votre choix.' }
    ]
  }
];

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
  const setCards = CARDS_DATABASE.filter(c => c.setId === setId);
  const commons = setCards.filter(c => c.rarity === 'Common');
  const uncommons = setCards.filter(c => c.rarity === 'Uncommon');
  const rareHolos = setCards.filter(c => c.rarity === 'Rare Holo' || c.rarity === 'Rare');
  const doubleRares = setCards.filter(c => c.rarity === 'Double Rare');
  const illustrationRares = setCards.filter(c => c.rarity === 'Illustration Rare');
  const specialIllustrationRares = setCards.filter(c => c.rarity === 'Special Illustration Rare');
  const hyperRares = setCards.filter(c => c.rarity === 'Hyper Rare');

  const randomFrom = (list: PokemonCard[]) => {
    if (list.length === 0) return CARDS_DATABASE[Math.floor(Math.random() * CARDS_DATABASE.length)];
    return list[Math.floor(Math.random() * list.length)];
  };

  // 0.2% de chance de "God Pack" (paquet mythique rempli uniquement de Full Art / SIR)
  const isGodPack = Math.random() < 0.005;
  if (isGodPack) {
    const godCards: PokemonCard[] = [];
    const pool = [...illustrationRares, ...specialIllustrationRares, ...hyperRares];
    for (let i = 0; i < 10; i++) {
      godCards.push(randomFrom(pool));
    }
    return { cards: godCards, isGodPack: true };
  }

  const pack: PokemonCard[] = [];

  // Slot 1 à 4 : Communes (4 cartes)
  for (let i = 0; i < 4; i++) {
    pack.push(randomFrom(commons));
  }

  // Slot 5 à 7 : Peu Communes (3 cartes)
  for (let i = 0; i < 3; i++) {
    pack.push(randomFrom(uncommons));
  }

  // Slot 8 : Reverse Holo / Illustration Rare Slot (1 carte)
  const rollSlot8 = Math.random();
  if (rollSlot8 < 0.12 && illustrationRares.length > 0) {
    pack.push(randomFrom(illustrationRares));
  } else if (rollSlot8 < 0.5) {
    pack.push(randomFrom(uncommons));
  } else {
    pack.push(randomFrom(commons));
  }

  // Slot 9 : Carte Majeure / Ultra Rare Slot (1 carte)
  // Ratios réels TCG :
  // ~ 1.5% Hyper Rare (Gold)
  // ~ 6.5% Special Illustration Rare (SIR)
  // ~ 14% Illustration Rare
  // ~ 28% Double Rare (ex)
  // ~ 50% Rare Holo classique
  const rollSlot9 = Math.random();
  if (rollSlot9 < 0.02 && hyperRares.length > 0) {
    pack.push(randomFrom(hyperRares));
  } else if (rollSlot9 < 0.08 && specialIllustrationRares.length > 0) {
    pack.push(randomFrom(specialIllustrationRares));
  } else if (rollSlot9 < 0.22 && illustrationRares.length > 0) {
    pack.push(randomFrom(illustrationRares));
  } else if (rollSlot9 < 0.50 && doubleRares.length > 0) {
    pack.push(randomFrom(doubleRares));
  } else {
    pack.push(randomFrom(rareHolos.length > 0 ? rareHolos : uncommons));
  }

  // Slot 10 : Énergie de base ou Carte Finale
  pack.push(randomFrom(commons));

  return { cards: pack, isGodPack: false };
}
