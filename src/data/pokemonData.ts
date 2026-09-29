import { ExpansionSet, PokemonCard } from '../types/pokemon';

export const EXPANSION_SETS: ExpansionSet[] = [
  {
    "id": "sv3pt5",
    "name": "Écarlate et Violet 151",
    "series": "Écarlate et Violet",
    "totalCards": 165,
    "releaseDate": "2023-09-22",
    "logo": "https://images.pokemontcg.io/sv3pt5/logo.png",
    "boosterImage": "https://images.pokemontcg.io/sv3pt5/symbol.png",
    "accentColor": "#3b82f6",
    "description": "Faites équipe avec les premiers Pokémon partenaires Bulbizarre, Salamèche et Carapuce pour célébrer les 151 premiers Pokémon originels."
  },
  {
    "id": "sv3",
    "name": "Flammes Obsidiennes",
    "series": "Écarlate et Violet",
    "totalCards": 197,
    "releaseDate": "2023-08-11",
    "logo": "https://images.pokemontcg.io/sv3/logo.png",
    "boosterImage": "https://images.pokemontcg.io/sv3/symbol.png",
    "accentColor": "#f97316",
    "description": "Des braises incandescentes illuminent la nuit alors que Dracaufeu-ex s’élève avec de nouveaux pouvoirs ténébreux !"
  },
  {
    "id": "swsh7",
    "name": "Évolution Céleste",
    "series": "Épée et Bouclier",
    "totalCards": 203,
    "releaseDate": "2021-08-27",
    "logo": "https://images.pokemontcg.io/swsh7/logo.png",
    "boosterImage": "https://images.pokemontcg.io/swsh7/symbol.png",
    "accentColor": "#10b981",
    "description": "L’extension mythique réunissant Rayquaza VMAX et toutes les évolutions d’Évoli, dont le légendaire Noctali VMAX alternatif (Moonbreon)."
  },
  {
    "id": "base1",
    "name": "Set de Base Classique (1999)",
    "series": "Original Vintage",
    "totalCards": 102,
    "releaseDate": "1999-01-09",
    "logo": "https://images.pokemontcg.io/base1/logo.png",
    "boosterImage": "https://images.pokemontcg.io/base1/symbol.png",
    "accentColor": "#eab308",
    "description": "Le premier set légendaire de 1999 ! Retrouvez le Dracaufeu 1ère Édition, Tortank, Florizarre et l’émotion nostalgique des premiers paquets."
  },
  {
    "id": "sv4",
    "name": "Faille Paradoxe",
    "series": "Écarlate et Violet",
    "totalCards": 182,
    "releaseDate": "2023-11-03",
    "logo": "https://images.pokemontcg.io/sv4/logo.png",
    "boosterImage": "https://images.pokemontcg.io/sv4/symbol.png",
    "accentColor": "#d946ef",
    "description": "Les Pokémon Temps Passé et Temps Futur entrent en collision ! Déchaînez la férocité de Rugit-Lune-ex et la puissance cybernétique de Garde-de-Fer-ex."
  }
];

export const CARDS_DATABASE: PokemonCard[] = [
  {
    "id": "sv3pt5-1",
    "name": "Bulbizarre",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Grass"
    ],
    "number": "001",
    "artist": "Yuu Nishida",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/1.png",
      "large": "https://images.pokemontcg.io/sv3pt5/1_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Sangsue",
        "cost": [
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": "Soignez 10 dégâts de ce Pokémon."
      }
    ]
  },
  {
    "id": "sv3pt5-4",
    "name": "Salamèche",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Fire"
    ],
    "number": "004",
    "artist": "Naoki Saito",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/4.png",
      "large": "https://images.pokemontcg.io/sv3pt5/4_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Flammèche",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      },
      {
        "name": "Destruction Barbecue",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": "Défaussez un Stade en jeu."
      }
    ]
  },
  {
    "id": "sv3pt5-7",
    "name": "Carapuce",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Water"
    ],
    "number": "007",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/7.png",
      "large": "https://images.pokemontcg.io/sv3pt5/7_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Retirance",
        "cost": [
          "Water"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Lancez une pièce. Si c’est face, évitez les attaques."
      },
      {
        "name": "Pistolet à O",
        "cost": [
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-25",
    "name": "Pikachu",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Lightning"
    ],
    "number": "025",
    "artist": "Hiroyuki Yamamoto",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/25.png",
      "large": "https://images.pokemontcg.io/sv3pt5/25_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Charge",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Cherchez dans votre deck une carte Énergie Électrique."
      },
      {
        "name": "Éclair Rapide",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-133",
    "name": "Évoli",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Colorless"
    ],
    "number": "133",
    "artist": "Narumi Sato",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/133.png",
      "large": "https://images.pokemontcg.io/sv3pt5/133_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Regard Touchant",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Attachez une carte Énergie de votre main."
      },
      {
        "name": "Charge Enjouée",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-129",
    "name": "Magicarpe",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "30",
    "types": [
      "Water"
    ],
    "number": "129",
    "artist": "Kouki Saitou",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/129.png",
      "large": "https://images.pokemontcg.io/sv3pt5/129_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Trempette",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": "Lancez une pièce."
      }
    ]
  },
  {
    "id": "sv3pt5-92",
    "name": "Fantominus",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Psychic"
    ],
    "number": "092",
    "artist": "Tomokazu Komiya",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/92.png",
      "large": "https://images.pokemontcg.io/sv3pt5/92_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Onde Folie",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Le Pokémon Actif adverse est maintenant Confus."
      }
    ]
  },
  {
    "id": "sv3pt5-66",
    "name": "Machoc",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Fighting"
    ],
    "number": "066",
    "artist": "KEIICHIRO ITO",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/66.png",
      "large": "https://images.pokemontcg.io/sv3pt5/66_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Poing de Montagne",
        "cost": [
          "Fighting"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-39",
    "name": "Rondoudou",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Colorless"
    ],
    "number": "039",
    "artist": "Saya Tsuruta",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/39.png",
      "large": "https://images.pokemontcg.io/sv3pt5/39_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Berceuse",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Le Pokémon Actif adverse est maintenant Endormi."
      }
    ]
  },
  {
    "id": "sv3pt5-143",
    "name": "Ronflex",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "150",
    "types": [
      "Colorless"
    ],
    "number": "143",
    "artist": "Gou Kagairu",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/143.png",
      "large": "https://images.pokemontcg.io/sv3pt5/143_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Gros Dodo",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "80",
        "text": "Ce Pokémon s’endort et soigne 60 dégâts."
      }
    ]
  },
  {
    "id": "sv3pt5-2",
    "name": "Herbizarre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Bulbizarre",
    "number": "002",
    "artist": "Yuu Nishida",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/2.png",
      "large": "https://images.pokemontcg.io/sv3pt5/2_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Fouet Lianes",
        "cost": [
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-5",
    "name": "Reptincel",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Salamèche",
    "number": "005",
    "artist": "Naoki Saito",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/5.png",
      "large": "https://images.pokemontcg.io/sv3pt5/5_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Crocs Feu",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-8",
    "name": "Carabaffe",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Carapuce",
    "number": "008",
    "artist": "Mitsuhiro Arita",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/8.png",
      "large": "https://images.pokemontcg.io/sv3pt5/8_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Cascade",
        "cost": [
          "Water",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-93",
    "name": "Spectrum",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Psychic"
    ],
    "evolvesFrom": "Fantominus",
    "number": "093",
    "artist": "Tomokazu Komiya",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/93.png",
      "large": "https://images.pokemontcg.io/sv3pt5/93_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Ball’Ombre",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-148",
    "name": "Draco",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Dragon"
    ],
    "number": "148",
    "artist": "Ryo Ueda",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/148.png",
      "large": "https://images.pokemontcg.io/sv3pt5/148_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Danse Draco",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Au prochain tour, les attaques infligent 70 dégâts supplémentaires."
      }
    ]
  },
  {
    "id": "sv3pt5-94",
    "name": "Ectoplasma",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "130",
    "types": [
      "Psychic"
    ],
    "evolvesFrom": "Spectrum",
    "number": "094",
    "artist": "Masako Tomii",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/94.png",
      "large": "https://images.pokemontcg.io/sv3pt5/94_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Cauchemar Profond",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "90",
        "text": "Le Pokémon adverse s’endort."
      }
    ]
  },
  {
    "id": "sv3pt5-149",
    "name": "Dracolosse",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "180",
    "types": [
      "Dragon"
    ],
    "evolvesFrom": "Draco",
    "number": "149",
    "artist": "kodama",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/149.png",
      "large": "https://images.pokemontcg.io/sv3pt5/149_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Impact Météore",
        "cost": [
          "Water",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "140",
        "text": "Défaussez 2 cartes Énergie."
      }
    ]
  },
  {
    "id": "sv3pt5-150",
    "name": "Mewtwo",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "130",
    "types": [
      "Psychic"
    ],
    "number": "150",
    "artist": "Bun Toujo",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/150.png",
      "large": "https://images.pokemontcg.io/sv3pt5/150_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Rafale Psy",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      },
      {
        "name": "Onde Mentale",
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "130",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-130",
    "name": "Léviator",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "180",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Magicarpe",
    "number": "130",
    "artist": "nagimiso",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/130.png",
      "large": "https://images.pokemontcg.io/sv3pt5/130_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Cascade Ravageuse",
        "cost": [
          "Water",
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "100",
        "text": ""
      },
      {
        "name": "Hyper-Laser",
        "cost": [
          "Water",
          "Water",
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "200",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-144",
    "name": "Artikodin",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "120",
    "types": [
      "Water"
    ],
    "number": "144",
    "artist": "Shinji Kanda",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/144.png",
      "large": "https://images.pokemontcg.io/sv3pt5/144_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Blizzard Glacial",
        "cost": [
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 2,
        "damage": "110",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-3",
    "name": "Florizarre-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "340",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Herbizarre",
    "number": "003",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/3.png",
      "large": "https://images.pokemontcg.io/sv3pt5/3_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Fleur Guérisseuse",
        "cost": [
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "",
        "text": "Soignez 60 dégâts à l’un de vos Pokémon."
      },
      {
        "name": "Fouet Toxique",
        "cost": [
          "Grass",
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "150",
        "text": "Le Pokémon Défenseur est empoisonné et confus."
      }
    ]
  },
  {
    "id": "sv3pt5-6",
    "name": "Dracaufeu-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Reptincel",
    "number": "006",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/6.png",
      "large": "https://images.pokemontcg.io/sv3pt5/6_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Brave Aile",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "60+",
        "text": "Inflige 100 dégâts supplémentaires si blessé."
      },
      {
        "name": "Vortex Enflammé",
        "cost": [
          "Fire",
          "Fire",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "330",
        "text": "Défaussez 3 Énergies."
      }
    ]
  },
  {
    "id": "sv3pt5-9",
    "name": "Tortank-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Carabaffe",
    "number": "009",
    "artist": "PLANETA Yamashita",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/9.png",
      "large": "https://images.pokemontcg.io/sv3pt5/9_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Canon Jumelé",
        "cost": [
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 2,
        "damage": "140×",
        "text": "Défaussez jusqu’à 2 cartes Énergie Eau de votre main."
      }
    ]
  },
  {
    "id": "sv3pt5-65",
    "name": "Alakazam-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "310",
    "types": [
      "Psychic"
    ],
    "number": "065",
    "artist": "Mitsuhiro Arita",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/65.png",
      "large": "https://images.pokemontcg.io/sv3pt5/65_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Cuillère Mentale",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "",
        "text": "Placez 3 marqueurs de dégâts."
      },
      {
        "name": "Miroir Dimensionnel",
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "convertedEnergyCost": 2,
        "damage": "120",
        "text": "Peut être utilisé depuis le Banc."
      }
    ]
  },
  {
    "id": "sv3pt5-145",
    "name": "Électhor-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "200",
    "types": [
      "Lightning"
    ],
    "number": "145",
    "artist": "PLANETA Yamashita",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/145.png",
      "large": "https://images.pokemontcg.io/sv3pt5/145_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Éclair Volant",
        "cost": [
          "Lightning",
          "Lightning",
          "Lightning"
        ],
        "convertedEnergyCost": 3,
        "damage": "120",
        "text": "Pas de Coût de Retraite."
      }
    ]
  },
  {
    "id": "sv3pt5-151",
    "name": "Mew-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "180",
    "types": [
      "Psychic"
    ],
    "number": "151",
    "artist": "aky CG Works",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/151.png",
      "large": "https://images.pokemontcg.io/sv3pt5/151_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Redémarrage",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Piochez jusqu’à avoir 3 cartes en main."
      },
      {
        "name": "Piratage Génome",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "",
        "text": "Copiez l’attaque adverse."
      }
    ]
  },
  {
    "id": "sv3pt5-40",
    "name": "Grodoudou-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1",
      "ex"
    ],
    "hp": "250",
    "types": [
      "Colorless"
    ],
    "evolvesFrom": "Rondoudou",
    "number": "040",
    "artist": "Saki Hayashiro",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/40.png",
      "large": "https://images.pokemontcg.io/sv3pt5/40_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Étreinte Sommeil",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "180",
        "text": "Endort le Pokémon Défenseur."
      }
    ]
  },
  {
    "id": "sv3pt5-166",
    "name": "Bulbizarre (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Grass"
    ],
    "number": "166",
    "artist": "Yoriyuki Ikegami",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/166.png",
      "large": "https://images.pokemontcg.io/sv3pt5/166_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Sangsue Somptueuse",
        "cost": [
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": "Soignez 10 dégâts de ce Pokémon."
      }
    ]
  },
  {
    "id": "sv3pt5-168",
    "name": "Salamèche (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Fire"
    ],
    "number": "168",
    "artist": "MINAMINAMI Take",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/168.png",
      "large": "https://images.pokemontcg.io/sv3pt5/168_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Flammèche Brûlante",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": "Défaussez un Stade en jeu."
      }
    ]
  },
  {
    "id": "sv3pt5-170",
    "name": "Carapuce (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Water"
    ],
    "number": "170",
    "artist": "Miki Tanaka",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/170.png",
      "large": "https://images.pokemontcg.io/sv3pt5/170_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Surf ensoleillé",
        "cost": [
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-173",
    "name": "Pikachu (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Lightning"
    ],
    "number": "173",
    "artist": "Hiroyuki Yamamoto",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/173.png",
      "large": "https://images.pokemontcg.io/sv3pt5/173_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Éclair Majestueux",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-182",
    "name": "Draco (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Dragon"
    ],
    "number": "182",
    "artist": "Ryo Ueda",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/182.png",
      "large": "https://images.pokemontcg.io/sv3pt5/182_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Vol Féerique",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-198",
    "name": "Florizarre-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "340",
    "types": [
      "Grass"
    ],
    "number": "198",
    "artist": "Yoriyuki Ikegami",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/198.png",
      "large": "https://images.pokemontcg.io/sv3pt5/198_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Forêt Ancestrale",
        "cost": [
          "Grass",
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "180",
        "text": "Soignez 80 dégâts à tous vos Pokémon."
      }
    ]
  },
  {
    "id": "sv3pt5-199",
    "name": "Dracaufeu-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Fire"
    ],
    "number": "199",
    "artist": "MINAMINAMI Take",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/199.png",
      "large": "https://images.pokemontcg.io/sv3pt5/199_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Incandescence Primordiale",
        "cost": [
          "Fire",
          "Fire",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "330",
        "text": "La carte maîtresse ultime de l’extension 151."
      }
    ]
  },
  {
    "id": "sv3pt5-200",
    "name": "Tortank-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Water"
    ],
    "number": "200",
    "artist": "Mitsuhiro Arita",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/200.png",
      "large": "https://images.pokemontcg.io/sv3pt5/200_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Océan Profond",
        "cost": [
          "Water",
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "220",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-201",
    "name": "Alakazam-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "310",
    "types": [
      "Psychic"
    ],
    "number": "201",
    "artist": "Shinya Komatsu",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/201.png",
      "large": "https://images.pokemontcg.io/sv3pt5/201_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Dimension Cosmique",
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "convertedEnergyCost": 2,
        "damage": "150",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-202",
    "name": "Électhor-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "200",
    "types": [
      "Lightning"
    ],
    "number": "202",
    "artist": "Shinji Kanda",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/202.png",
      "large": "https://images.pokemontcg.io/sv3pt5/202_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Foudre Sauvage",
        "cost": [
          "Lightning",
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "190",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3pt5-196",
    "name": "Invitation d’Érika",
    "supertype": "Trainer",
    "subtypes": [
      "Supporter"
    ],
    "types": [],
    "number": "196",
    "artist": "Conkichi",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/196.png",
      "large": "https://images.pokemontcg.io/sv3pt5/196_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": []
  },
  {
    "id": "sv3pt5-205",
    "name": "Mew-ex (Or Brillant)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "180",
    "types": [
      "Psychic"
    ],
    "number": "205",
    "artist": "aky CG Works",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/205.png",
      "large": "https://images.pokemontcg.io/sv3pt5/205_hires.png"
    },
    "setId": "sv3pt5",
    "setName": "Écarlate et Violet 151",
    "attacks": [
      {
        "name": "Redémarrage Pur",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Piochez des cartes jusqu’à en avoir 3 en main."
      },
      {
        "name": "Génome Doré",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "",
        "text": "Copiez l’attaque de votre choix."
      }
    ]
  },
  {
    "id": "sv3-26",
    "name": "Salamèche",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Fire"
    ],
    "number": "026",
    "artist": "Shibuzoh.",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/26.png",
      "large": "https://images.pokemontcg.io/sv3/26_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Griffe Enflammée",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-56",
    "name": "Grenousse",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Water"
    ],
    "number": "056",
    "artist": "Kurumitsu",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/56.png",
      "large": "https://images.pokemontcg.io/sv3/56_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Gouttelette",
        "cost": [
          "Water"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      },
      {
        "name": "Bond Acrobatique",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-100",
    "name": "Axoloto de Paldea",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Darkness"
    ],
    "number": "100",
    "artist": "Kouki Saitou",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/100.png",
      "large": "https://images.pokemontcg.io/sv3/100_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Tir Venin",
        "cost": [
          "Darkness"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": "Empoisonne le Pokémon Actif."
      }
    ]
  },
  {
    "id": "sv3-40",
    "name": "Funécire",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Fire"
    ],
    "number": "040",
    "artist": "Tomokazu Komiya",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/40.png",
      "large": "https://images.pokemontcg.io/sv3/40_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Petite Flamme",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-149",
    "name": "Terhal",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Metal"
    ],
    "number": "149",
    "artist": "Shin Nagasawa",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/149.png",
      "large": "https://images.pokemontcg.io/sv3/149_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Charge Magnétique",
        "cost": [
          "Metal"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-142",
    "name": "Porygon",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Colorless"
    ],
    "number": "142",
    "artist": "Yuka Morii",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/142.png",
      "large": "https://images.pokemontcg.io/sv3/142_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Affûtage",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-152",
    "name": "Scalpion",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Metal"
    ],
    "number": "152",
    "artist": "Anesaki Dynamic",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/152.png",
      "large": "https://images.pokemontcg.io/sv3/152_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Lame Taillante",
        "cost": [
          "Metal",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-1",
    "name": "Chenipan",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Grass"
    ],
    "number": "001",
    "artist": "Sekio",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/1.png",
      "large": "https://images.pokemontcg.io/sv3/1_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Sécrétion Rapide",
        "cost": [
          "Grass"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": "Paralyse sur un lancer face."
      }
    ]
  },
  {
    "id": "sv3-27",
    "name": "Reptincel",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Salamèche",
    "number": "027",
    "artist": "Kouki Saitou",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/27.png",
      "large": "https://images.pokemontcg.io/sv3/27_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Flammèche Brûlante",
        "cost": [
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 2,
        "damage": "70",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-57",
    "name": "Croâporal",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Grenousse",
    "number": "057",
    "artist": "Teeziro",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/57.png",
      "large": "https://images.pokemontcg.io/sv3/57_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Lame Aquatique",
        "cost": [
          "Water"
        ],
        "convertedEnergyCost": 1,
        "damage": "40",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-150",
    "name": "Métang",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Metal"
    ],
    "evolvesFrom": "Terhal",
    "number": "150",
    "artist": "Gou Kagairu",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/150.png",
      "large": "https://images.pokemontcg.io/sv3/150_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Poing de Fer",
        "cost": [
          "Metal",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-84",
    "name": "Mélodelfe",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "110",
    "types": [
      "Psychic"
    ],
    "number": "084",
    "artist": "Mizue",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/84.png",
      "large": "https://images.pokemontcg.io/sv3/84_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Danse Lunaire",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "70",
        "text": "Soignez 30 dégâts."
      }
    ]
  },
  {
    "id": "sv3-41",
    "name": "Mélancolux",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Funécire",
    "number": "041",
    "artist": "Jerky",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/41.png",
      "large": "https://images.pokemontcg.io/sv3/41_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Feu Follet",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-136",
    "name": "Darkrai",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "130",
    "types": [
      "Darkness"
    ],
    "number": "136",
    "artist": "chibi",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/136.png",
      "large": "https://images.pokemontcg.io/sv3/136_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Cauchemar Obscur",
        "cost": [
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60+",
        "text": "Inflige 60 dégâts de plus si le Pokémon est Endormi."
      }
    ]
  },
  {
    "id": "sv3-141",
    "name": "Cizayox",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "140",
    "types": [
      "Metal"
    ],
    "number": "141",
    "artist": "KEIICHIRO ITO",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/141.png",
      "large": "https://images.pokemontcg.io/sv3/141_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Pince d’Acier",
        "cost": [
          "Metal"
        ],
        "convertedEnergyCost": 1,
        "damage": "60+",
        "text": "Inflige 20 dégâts par Pokémon adverse en jeu."
      }
    ]
  },
  {
    "id": "sv3-42",
    "name": "Lugulabre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "150",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Mélancolux",
    "number": "042",
    "artist": "Teeziro",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/42.png",
      "large": "https://images.pokemontcg.io/sv3/42_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Fournaise Fantôme",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "150",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-58",
    "name": "Amphinobi",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "150",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Croâporal",
    "number": "058",
    "artist": "Anesaki Dynamic",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/58.png",
      "large": "https://images.pokemontcg.io/sv3/58_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Sheauriken Shinobi",
        "cost": [
          "Water"
        ],
        "convertedEnergyCost": 1,
        "damage": "100",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-67",
    "name": "Tyranocif",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "180",
    "types": [
      "Darkness"
    ],
    "number": "067",
    "artist": "kawayoo",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/67.png",
      "large": "https://images.pokemontcg.io/sv3/67_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Séisme Dévastateur",
        "cost": [
          "Darkness",
          "Darkness"
        ],
        "convertedEnergyCost": 2,
        "damage": "180",
        "text": "Inflige 20 dégâts à chaque Pokémon de votre Banc."
      }
    ]
  },
  {
    "id": "sv3-125",
    "name": "Dracaufeu-ex (Téra Obscurité)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Darkness"
    ],
    "evolvesFrom": "Reptincel",
    "number": "125",
    "artist": "5ban Graphics",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/125.png",
      "large": "https://images.pokemontcg.io/sv3/125_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Règne Ténébreux",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Attachez jusqu’à 3 Énergies Feu à vos Pokémon."
      },
      {
        "name": "Braise Brûlante",
        "cost": [
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 2,
        "damage": "180+",
        "text": "Inflige 30 dégâts pour chaque carte Récompense prise par l’adversaire."
      }
    ]
  },
  {
    "id": "sv3-66",
    "name": "Tyranocif-ex (Téra Électrique)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "340",
    "types": [
      "Lightning"
    ],
    "number": "066",
    "artist": "5ban Graphics",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/66.png",
      "large": "https://images.pokemontcg.io/sv3/66_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Roc Foudroyant",
        "cost": [
          "Fighting"
        ],
        "convertedEnergyCost": 1,
        "damage": "120",
        "text": ""
      },
      {
        "name": "Tonnerre Colossal",
        "cost": [
          "Fighting",
          "Fighting"
        ],
        "convertedEnergyCost": 2,
        "damage": "250",
        "text": "Défaussez les 4 cartes du dessus de votre deck."
      }
    ]
  },
  {
    "id": "sv3-164",
    "name": "Roucarnage-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "280",
    "types": [
      "Colorless"
    ],
    "number": "164",
    "artist": "PLANETA Yamashita",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/164.png",
      "large": "https://images.pokemontcg.io/sv3/164_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Recherche Rapide",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Cherchez n’importe quelle carte dans votre deck."
      },
      {
        "name": "Bourrasque Flottante",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "120",
        "text": "Défaussez un Stade en jeu."
      }
    ]
  },
  {
    "id": "sv3-159",
    "name": "Dracolosse-ex (Téra Dragon)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Dragon"
    ],
    "number": "159",
    "artist": "5ban Graphics",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/159.png",
      "large": "https://images.pokemontcg.io/sv3/159_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Météore Envoûtant",
        "cost": [
          "Water",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "140",
        "text": ""
      },
      {
        "name": "Draco-Explosion",
        "cost": [
          "Water",
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "270",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-153",
    "name": "Melmetal-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1",
      "ex"
    ],
    "hp": "270",
    "types": [
      "Metal"
    ],
    "number": "153",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/153.png",
      "large": "https://images.pokemontcg.io/sv3/153_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Acier Lourd",
        "cost": [
          "Metal",
          "Metal"
        ],
        "convertedEnergyCost": 2,
        "damage": "160",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-202",
    "name": "Mélo (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "30",
    "types": [
      "Psychic"
    ],
    "number": "202",
    "artist": "HYOGONOSUKE",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/202.png",
      "large": "https://images.pokemontcg.io/sv3/202_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Tirage Scintillant",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Piochez des cartes jusqu’à en avoir 6 en main."
      }
    ]
  },
  {
    "id": "sv3-199",
    "name": "Feunard (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "120",
    "types": [
      "Fire"
    ],
    "number": "199",
    "artist": "Sie Nanahara",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/199.png",
      "large": "https://images.pokemontcg.io/sv3/199_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Chaleur Embrasée",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "90",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-204",
    "name": "Carabing (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Metal"
    ],
    "number": "204",
    "artist": "Tomokazu Komiya",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/204.png",
      "large": "https://images.pokemontcg.io/sv3/204_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Charge Carapace",
        "cost": [
          "Metal",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "40",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-205",
    "name": "Cizayox (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "140",
    "types": [
      "Metal"
    ],
    "number": "205",
    "artist": "OGACHI",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/205.png",
      "large": "https://images.pokemontcg.io/sv3/205_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Lame d’Or Miroir",
        "cost": [
          "Metal"
        ],
        "convertedEnergyCost": 1,
        "damage": "60+",
        "text": "Frappe chirurgicale dévastatrice."
      }
    ]
  },
  {
    "id": "sv3-207",
    "name": "Roucool (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Colorless"
    ],
    "number": "207",
    "artist": "Jerky",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/207.png",
      "large": "https://images.pokemontcg.io/sv3/207_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Piaf Voyant",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-208",
    "name": "Roucoups (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Colorless"
    ],
    "number": "208",
    "artist": "Jerky",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/208.png",
      "large": "https://images.pokemontcg.io/sv3/208_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Coup d’Aile Agile",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "40",
        "text": ""
      }
    ]
  },
  {
    "id": "sv3-223",
    "name": "Dracaufeu-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Darkness"
    ],
    "number": "223",
    "artist": "AKIRA EGAWA",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/223.png",
      "large": "https://images.pokemontcg.io/sv3/223_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Ténèbres Incandescentes",
        "cost": [
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 2,
        "damage": "220+",
        "text": "La forme Téracristal ténébreuse du dragon flamboyant."
      }
    ]
  },
  {
    "id": "sv3-225",
    "name": "Roucarnage-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "280",
    "types": [
      "Colorless"
    ],
    "number": "225",
    "artist": "Jerky",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/225.png",
      "large": "https://images.pokemontcg.io/sv3/225_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Vol Absolu",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "140",
        "text": "Maîtrise aérienne spectaculaire."
      }
    ]
  },
  {
    "id": "sv3-227",
    "name": "Papy-Moustache (Spécial Illustration)",
    "supertype": "Trainer",
    "subtypes": [
      "Supporter"
    ],
    "types": [],
    "number": "227",
    "artist": "sanity",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/227.png",
      "large": "https://images.pokemontcg.io/sv3/227_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": []
  },
  {
    "id": "sv3-226",
    "name": "Ortiga (Spécial Illustration)",
    "supertype": "Trainer",
    "subtypes": [
      "Supporter"
    ],
    "types": [],
    "number": "226",
    "artist": "Daisuke Tanaka",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/226.png",
      "large": "https://images.pokemontcg.io/sv3/226_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": []
  },
  {
    "id": "sv3-228",
    "name": "Dracaufeu-ex (Or Brillant)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "330",
    "types": [
      "Darkness"
    ],
    "number": "228",
    "artist": "5ban Graphics",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/228.png",
      "large": "https://images.pokemontcg.io/sv3/228_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": [
      {
        "name": "Flamme Dorée Suprême",
        "cost": [
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 2,
        "damage": "240",
        "text": "Édition prestigieuse gravée d’or pur."
      }
    ]
  },
  {
    "id": "sv3-230",
    "name": "Super Bonbon (Or Brillant)",
    "supertype": "Trainer",
    "subtypes": [
      "Item"
    ],
    "types": [],
    "number": "230",
    "artist": "Studio Bora Inc.",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv3/230.png",
      "large": "https://images.pokemontcg.io/sv3/230_hires.png"
    },
    "setId": "sv3",
    "setName": "Flammes Obsidiennes",
    "attacks": []
  },
  {
    "id": "swsh7-127",
    "name": "Évoli",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Colorless"
    ],
    "number": "127",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/127.png",
      "large": "https://images.pokemontcg.io/swsh7/127_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Éveil Végétal",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Cherchez dans votre deck une carte Évolution."
      },
      {
        "name": "Charge Sautillante",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-49",
    "name": "Pikachu",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Lightning"
    ],
    "number": "049",
    "artist": "Sanosuke Sakuma",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/49.png",
      "large": "https://images.pokemontcg.io/swsh7/49_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Éclair Vivant",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-106",
    "name": "Baggiguane",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Darkness"
    ],
    "number": "106",
    "artist": "Kouki Saitou",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/106.png",
      "large": "https://images.pokemontcg.io/swsh7/106_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Coup d’Tête",
        "cost": [
          "Darkness"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-99",
    "name": "Ténéfix",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Psychic"
    ],
    "number": "099",
    "artist": "Shigenori Negishi",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/99.png",
      "large": "https://images.pokemontcg.io/swsh7/99_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Regard Noir",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "L’adversaire ne peut pas battre en retraite."
      }
    ]
  },
  {
    "id": "swsh7-71",
    "name": "Flabébé",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Psychic"
    ],
    "number": "071",
    "artist": "sowsow",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/71.png",
      "large": "https://images.pokemontcg.io/swsh7/71_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Pollen Féerique",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-52",
    "name": "Emolga",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Lightning"
    ],
    "number": "052",
    "artist": "kirisAki",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/52.png",
      "large": "https://images.pokemontcg.io/swsh7/52_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Vol Électrik",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "30",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-30",
    "name": "Aquali",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "110",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Évoli",
    "number": "030",
    "artist": "You Iribi",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/30.png",
      "large": "https://images.pokemontcg.io/swsh7/30_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Vague Rafraîchissante",
        "cost": [
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60",
        "text": "Soignez 30 dégâts."
      }
    ]
  },
  {
    "id": "swsh7-51",
    "name": "Voltali",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Lightning"
    ],
    "evolvesFrom": "Évoli",
    "number": "051",
    "artist": "Kouki Saitou",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/51.png",
      "large": "https://images.pokemontcg.io/swsh7/51_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Éclair Foudroyant",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "70",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-24",
    "name": "Pyroli",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "110",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Évoli",
    "number": "024",
    "artist": "Souichirou Gunjima",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/24.png",
      "large": "https://images.pokemontcg.io/swsh7/24_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Brasier Ardent",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "70",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-115",
    "name": "Draco",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Dragon"
    ],
    "number": "115",
    "artist": "Mizue",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/115.png",
      "large": "https://images.pokemontcg.io/swsh7/115_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Plongeon Draco",
        "cost": [
          "Water",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-72",
    "name": "Floette",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "70",
    "types": [
      "Psychic"
    ],
    "evolvesFrom": "Flabébé",
    "number": "072",
    "artist": "Saya Tsuruta",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/72.png",
      "large": "https://images.pokemontcg.io/swsh7/72_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Fleur Magique",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "40",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-107",
    "name": "Baggaïd",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "120",
    "types": [
      "Darkness"
    ],
    "evolvesFrom": "Baggiguane",
    "number": "107",
    "artist": "HYOGONOSUKE",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/107.png",
      "large": "https://images.pokemontcg.io/swsh7/107_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Frappe Sournoise",
        "cost": [
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "80",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-31",
    "name": "Suicune",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "120",
    "types": [
      "Water"
    ],
    "number": "031",
    "artist": "Atsushi Furusawa",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/31.png",
      "large": "https://images.pokemontcg.io/swsh7/31_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Bourrasque Pure",
        "cost": [
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 2,
        "damage": "120",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-20",
    "name": "Victini",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Fire"
    ],
    "number": "020",
    "artist": "chibi",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/20.png",
      "large": "https://images.pokemontcg.io/swsh7/20_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Coup Vainqueur",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "20+",
        "text": "Si vous avez pris une Récompense, inflige 100 dégâts supplémentaires."
      }
    ]
  },
  {
    "id": "swsh7-124",
    "name": "Regidrago",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "130",
    "types": [
      "Dragon"
    ],
    "number": "124",
    "artist": "kawayoo",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/124.png",
      "large": "https://images.pokemontcg.io/swsh7/124_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Énergie Draconique",
        "cost": [
          "Grass",
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "160",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-90",
    "name": "Lougaroc",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "120",
    "types": [
      "Fighting"
    ],
    "number": "090",
    "artist": "Shinji Kanda",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/90.png",
      "large": "https://images.pokemontcg.io/swsh7/90_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Crocs Crépuscule",
        "cost": [
          "Fighting",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "100",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-111",
    "name": "Rayquaza VMAX",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "320",
    "types": [
      "Dragon"
    ],
    "number": "111",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/111.png",
      "large": "https://images.pokemontcg.io/swsh7/111_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Pulsion Azur",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Piochez 3 cartes en défaussant votre main."
      },
      {
        "name": "Spirale Volante",
        "cost": [
          "Fire",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "20+",
        "text": "Défaussez des Énergies pour infliger 80 dégâts par carte défaussée."
      }
    ]
  },
  {
    "id": "swsh7-95",
    "name": "Noctali VMAX",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Darkness"
    ],
    "number": "095",
    "artist": "PLANETA Tsuji",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/95.png",
      "large": "https://images.pokemontcg.io/swsh7/95_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Signe Obscur",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Forcez le Pokémon de Banc adverse sur le Poste Actif."
      },
      {
        "name": "Menace Max",
        "cost": [
          "Darkness",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "160",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-75",
    "name": "Nymphali VMAX",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Psychic"
    ],
    "number": "075",
    "artist": "PLANETA Igarashi",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/75.png",
      "large": "https://images.pokemontcg.io/swsh7/75_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Ruban Harmonieux",
        "cost": [
          "Psychic",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "70+",
        "text": "Inflige 30 dégâts pour chaque type de Pokémon différent sur votre Banc."
      }
    ]
  },
  {
    "id": "swsh7-123",
    "name": "Duralugon VMAX",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "330",
    "types": [
      "Dragon"
    ],
    "number": "123",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/123.png",
      "large": "https://images.pokemontcg.io/swsh7/123_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Gratte-Ciel",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Immunisé contre les attaques des Pokémon équipés d’Énergie Spéciale."
      },
      {
        "name": "Pulvérisation G-Max",
        "cost": [
          "Fighting",
          "Metal",
          "Metal"
        ],
        "convertedEnergyCost": 3,
        "damage": "220",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-65",
    "name": "Mentali VMAX",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Psychic"
    ],
    "number": "065",
    "artist": "PLANETA Tsuji",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/65.png",
      "large": "https://images.pokemontcg.io/swsh7/65_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Psyko Max",
        "cost": [
          "Psychic",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "60×",
        "text": "60 dégâts pour chaque Énergie attachée aux Pokémon adverses."
      }
    ]
  },
  {
    "id": "swsh7-41",
    "name": "Givrali VMAX",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Water"
    ],
    "number": "041",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/41.png",
      "large": "https://images.pokemontcg.io/swsh7/41_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Icicle Givré",
        "cost": [
          "Water",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "150",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-194",
    "name": "Rayquaza V (Full Art)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "V"
    ],
    "hp": "210",
    "types": [
      "Dragon"
    ],
    "number": "194",
    "artist": "Ryuta Fuse",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/194.png",
      "large": "https://images.pokemontcg.io/swsh7/194_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Vent Draconique",
        "cost": [
          "Fire",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "180",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-189",
    "name": "Noctali V (Full Art)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "V"
    ],
    "hp": "200",
    "types": [
      "Darkness"
    ],
    "number": "189",
    "artist": "Teeziro",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/189.png",
      "large": "https://images.pokemontcg.io/swsh7/189_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Oeil Lunaire",
        "cost": [
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "80",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-192",
    "name": "Dracolosse V (Full Art)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "V"
    ],
    "hp": "230",
    "types": [
      "Dragon"
    ],
    "number": "192",
    "artist": "Sanosuke Sakuma",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/192.png",
      "large": "https://images.pokemontcg.io/swsh7/192_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Charge Dévastatrice",
        "cost": [
          "Water",
          "Water",
          "Lightning"
        ],
        "convertedEnergyCost": 3,
        "damage": "250",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-184",
    "name": "Nymphali V (Full Art)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "V"
    ],
    "hp": "200",
    "types": [
      "Psychic"
    ],
    "number": "184",
    "artist": "You Iribi",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/184.png",
      "large": "https://images.pokemontcg.io/swsh7/184_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Voix Envoûtante",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "90",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-172",
    "name": "Aquali V (Full Art)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "V"
    ],
    "hp": "210",
    "types": [
      "Water"
    ],
    "number": "172",
    "artist": "Teeziro",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/172.png",
      "large": "https://images.pokemontcg.io/swsh7/172_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Torrent Suprême",
        "cost": [
          "Water",
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "160",
        "text": ""
      }
    ]
  },
  {
    "id": "swsh7-215",
    "name": "Noctali VMAX (Moonbreon Suprême)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Darkness"
    ],
    "number": "215",
    "artist": "KEIICHIRO ITO",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/215.png",
      "large": "https://images.pokemontcg.io/swsh7/215_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Lune Stellaire Sacrée",
        "cost": [
          "Darkness",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "180",
        "text": "La carte la plus célèbre et légendaire de l’ère moderne Pokémon."
      }
    ]
  },
  {
    "id": "swsh7-218",
    "name": "Rayquaza VMAX (Spécial Alternative)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "320",
    "types": [
      "Dragon"
    ],
    "number": "218",
    "artist": "Anesaki Dynamic",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/218.png",
      "large": "https://images.pokemontcg.io/swsh7/218_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Ascension Astrale",
        "cost": [
          "Fire",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "340",
        "text": "Le seigneur des cieux s’élève au-dessus des cimes."
      }
    ]
  },
  {
    "id": "swsh7-212",
    "name": "Nymphali VMAX (Spécial Alternative)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Psychic"
    ],
    "number": "212",
    "artist": "Teeziro",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/212.png",
      "large": "https://images.pokemontcg.io/swsh7/212_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Rêverie Féerique",
        "cost": [
          "Psychic",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "200",
        "text": "Nymphali entouré de tous ses compagnons Évoli."
      }
    ]
  },
  {
    "id": "swsh7-220",
    "name": "Duralugon VMAX (Spécial Alternative)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "330",
    "types": [
      "Dragon"
    ],
    "number": "220",
    "artist": "Saki Hayashiro",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/220.png",
      "large": "https://images.pokemontcg.io/swsh7/220_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Titanesque G-Max",
        "cost": [
          "Fighting",
          "Metal",
          "Metal"
        ],
        "convertedEnergyCost": 3,
        "damage": "240",
        "text": "Une citadelle d’acier infranchissable."
      }
    ]
  },
  {
    "id": "swsh7-209",
    "name": "Givrali VMAX (Spécial Alternative)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Water"
    ],
    "number": "209",
    "artist": "sowsow",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/209.png",
      "large": "https://images.pokemontcg.io/swsh7/209_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Glaciation Féerique",
        "cost": [
          "Water",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "210",
        "text": "L’élégance glaciale au cœur du blizzard."
      }
    ]
  },
  {
    "id": "swsh7-217",
    "name": "Rayquaza VMAX (Arc-en-Ciel Rainbow)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "320",
    "types": [
      "Dragon"
    ],
    "number": "217",
    "artist": "PLANETA Mochizuki",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/217.png",
      "large": "https://images.pokemontcg.io/swsh7/217_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Spirale Céleste Rainbow",
        "cost": [
          "Fire",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "280",
        "text": "Holographisme arc-en-ciel chatoyant de rareté maximale."
      }
    ]
  },
  {
    "id": "swsh7-214",
    "name": "Noctali VMAX (Arc-en-Ciel Rainbow)",
    "supertype": "Pokémon",
    "subtypes": [
      "VMAX"
    ],
    "hp": "310",
    "types": [
      "Darkness"
    ],
    "number": "214",
    "artist": "PLANETA Tsuji",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/swsh7/214.png",
      "large": "https://images.pokemontcg.io/swsh7/214_hires.png"
    },
    "setId": "swsh7",
    "setName": "Évolution Céleste",
    "attacks": [
      {
        "name": "Menace Suprême Rainbow",
        "cost": [
          "Darkness",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "260",
        "text": "Reflets prisme diamantés sur Noctali VMAX."
      }
    ]
  },
  {
    "id": "base1-46",
    "name": "Salamèche",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Fire"
    ],
    "number": "046",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/46.png",
      "large": "https://images.pokemontcg.io/base1/46_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Griffe",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      },
      {
        "name": "Flammèche",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": "Défaussez une Énergie Feu."
      }
    ]
  },
  {
    "id": "base1-44",
    "name": "Bulbizarre",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Grass"
    ],
    "number": "044",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/44.png",
      "large": "https://images.pokemontcg.io/base1/44_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Vampigraine",
        "cost": [
          "Grass",
          "Grass"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": "Soignez 10 dégâts de Bulbizarre."
      }
    ]
  },
  {
    "id": "base1-63",
    "name": "Carapuce",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Water"
    ],
    "number": "063",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/63.png",
      "large": "https://images.pokemontcg.io/base1/63_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Pistolet à O",
        "cost": [
          "Water"
        ],
        "convertedEnergyCost": 1,
        "damage": "10+",
        "text": "Inflige 10 dégâts de plus par Énergie Eau additionnelle."
      },
      {
        "name": "Repli",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Prévenez les dégâts sur lancer face."
      }
    ]
  },
  {
    "id": "base1-58",
    "name": "Pikachu (Joues Rouges Vintage)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Lightning"
    ],
    "number": "058",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/58.png",
      "large": "https://images.pokemontcg.io/base1/58_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Ronge",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      },
      {
        "name": "Étincelle",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": "Lancez une pièce. Si pile, Pikachu s’inflige 10 dégâts."
      }
    ]
  },
  {
    "id": "base1-45",
    "name": "Chenipan",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Grass"
    ],
    "number": "045",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/45.png",
      "large": "https://images.pokemontcg.io/base1/45_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Sécrétion",
        "cost": [
          "Grass"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Paralyse le Pokémon défenseur."
      }
    ]
  },
  {
    "id": "base1-61",
    "name": "Rattata",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "30",
    "types": [
      "Colorless"
    ],
    "number": "061",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/61.png",
      "large": "https://images.pokemontcg.io/base1/61_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Morsure",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-52",
    "name": "Machoc",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Fighting"
    ],
    "number": "052",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/52.png",
      "large": "https://images.pokemontcg.io/base1/52_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Poing Comète",
        "cost": [
          "Fighting"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-28",
    "name": "Caninos",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Fire"
    ],
    "number": "028",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/base1/28.png",
      "large": "https://images.pokemontcg.io/base1/28_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Flamme",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-24",
    "name": "Reptincel",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Salamèche",
    "number": "024",
    "artist": "Mitsuhiro Arita",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/base1/24.png",
      "large": "https://images.pokemontcg.io/base1/24_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Tranche",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "30",
        "text": ""
      },
      {
        "name": "Lance-Flammes",
        "cost": [
          "Fire",
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "50",
        "text": "Défaussez une Énergie Feu."
      }
    ]
  },
  {
    "id": "base1-30",
    "name": "Herbizarre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "60",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Bulbizarre",
    "number": "030",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/base1/30.png",
      "large": "https://images.pokemontcg.io/base1/30_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Fouet Lianes",
        "cost": [
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "30",
        "text": ""
      },
      {
        "name": "Poudre Toxik",
        "cost": [
          "Grass",
          "Grass"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": "Empoisonne le défenseur."
      }
    ]
  },
  {
    "id": "base1-42",
    "name": "Carabaffe",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "70",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Carapuce",
    "number": "042",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/base1/42.png",
      "large": "https://images.pokemontcg.io/base1/42_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Morsure",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "40",
        "text": ""
      },
      {
        "name": "Coup de Crâne",
        "cost": [
          "Water",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "40",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-29",
    "name": "Fantominus",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "50",
    "types": [
      "Psychic"
    ],
    "number": "029",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/base1/29.png",
      "large": "https://images.pokemontcg.io/base1/29_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Léchouille",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": "Paralyse sur un lancer face."
      }
    ]
  },
  {
    "id": "base1-34",
    "name": "Machopeur",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Fighting"
    ],
    "evolvesFrom": "Machoc",
    "number": "034",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/base1/34.png",
      "large": "https://images.pokemontcg.io/base1/34_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Frappe Karaté",
        "cost": [
          "Fighting",
          "Fighting",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-96",
    "name": "Double Énergie Incolore Vintage",
    "supertype": "Energy",
    "subtypes": [
      "Spéciale"
    ],
    "types": [],
    "number": "096",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/base1/96.png",
      "large": "https://images.pokemontcg.io/base1/96_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": []
  },
  {
    "id": "base1-17",
    "name": "Roucarnage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "80",
    "types": [
      "Colorless"
    ],
    "number": "017",
    "artist": "Kagemaru Himeno",
    "rarity": "Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/17.png",
      "large": "https://images.pokemontcg.io/base1/17_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Tornade",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": ""
      },
      {
        "name": "Cyclone Fantôme",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "40",
        "text": "Renvoie le Pokémon adverse sur le banc."
      }
    ]
  },
  {
    "id": "base1-18",
    "name": "Draco Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Colorless"
    ],
    "number": "018",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/18.png",
      "large": "https://images.pokemontcg.io/base1/18_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Charge Puissante",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "40",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-21",
    "name": "Électrode",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Lightning"
    ],
    "number": "021",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/21.png",
      "large": "https://images.pokemontcg.io/base1/21_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Explosion Sacrifiée",
        "cost": [
          "Lightning",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "100",
        "text": "Électrode s’inflige 80 dégâts."
      }
    ]
  },
  {
    "id": "base1-23",
    "name": "Arcanin",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Fire"
    ],
    "number": "023",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/23.png",
      "large": "https://images.pokemontcg.io/base1/23_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Bélier",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      },
      {
        "name": "Déflagration Historique",
        "cost": [
          "Fire",
          "Fire",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "80",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-4",
    "name": "Dracaufeu Holo 1ère Édition",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "120",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Reptincel",
    "number": "004",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/4.png",
      "large": "https://images.pokemontcg.io/base1/4_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Brûlure d’Énergie",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Toutes les cartes Énergie attachées deviennent de type Feu."
      },
      {
        "name": "Danseflamme",
        "cost": [
          "Fire",
          "Fire",
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 4,
        "damage": "100",
        "text": "Défaussez 2 cartes Énergie attachées à Dracaufeu pour utiliser cette attaque."
      }
    ]
  },
  {
    "id": "base1-2",
    "name": "Tortank Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "100",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Carabaffe",
    "number": "002",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/2.png",
      "large": "https://images.pokemontcg.io/base1/2_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Danse Pluie",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Attachez autant d’Énergies Eau que vous le souhaitez pendant votre tour."
      },
      {
        "name": "Hydrocanon",
        "cost": [
          "Water",
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 3,
        "damage": "40+",
        "text": "Inflige 10 dégâts par Énergie Eau additionnelle."
      }
    ]
  },
  {
    "id": "base1-15",
    "name": "Florizarre Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "100",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Herbizarre",
    "number": "015",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/15.png",
      "large": "https://images.pokemontcg.io/base1/15_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Transfo Solaire",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Déplacez des Énergies Plante entre vos Pokémon comme vous le souhaitez."
      },
      {
        "name": "Rayon Solaire",
        "cost": [
          "Grass",
          "Grass",
          "Grass",
          "Grass"
        ],
        "convertedEnergyCost": 4,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-10",
    "name": "Mewtwo Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Psychic"
    ],
    "number": "010",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/10.png",
      "large": "https://images.pokemontcg.io/base1/10_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Bouclier Psy",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Prévenez tous les effets et dégâts d’attaques."
      },
      {
        "name": "Psyko",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "10+",
        "text": "Inflige 10 dégâts supplémentaires par Énergie attachée au défenseur."
      }
    ]
  },
  {
    "id": "base1-6",
    "name": "Léviator Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "100",
    "types": [
      "Water"
    ],
    "number": "006",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/6.png",
      "large": "https://images.pokemontcg.io/base1/6_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Draco-Rage Suprême",
        "cost": [
          "Water",
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 3,
        "damage": "50",
        "text": ""
      },
      {
        "name": "Hydro-Fouet",
        "cost": [
          "Water",
          "Water",
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 4,
        "damage": "80",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-1",
    "name": "Alakazam Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "80",
    "types": [
      "Psychic"
    ],
    "number": "001",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/1.png",
      "large": "https://images.pokemontcg.io/base1/1_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Transfert de Dégâts",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Déplacez les marqueurs de dégâts entre vos Pokémon à volonté."
      },
      {
        "name": "Confusion Mentale",
        "cost": [
          "Psychic",
          "Psychic",
          "Psychic"
        ],
        "convertedEnergyCost": 3,
        "damage": "30",
        "text": "Le Pokémon adverse est maintenant Confus."
      }
    ]
  },
  {
    "id": "base1-16",
    "name": "Électhor Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "90",
    "types": [
      "Lightning"
    ],
    "number": "016",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/16.png",
      "large": "https://images.pokemontcg.io/base1/16_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Fatal-Foudre Épique",
        "cost": [
          "Lightning",
          "Lightning",
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "100",
        "text": "Lancez une pièce. Si pile, s’inflige 30 dégâts."
      }
    ]
  },
  {
    "id": "base1-8",
    "name": "Mackogneur Holo 1ère Édition",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "100",
    "types": [
      "Fighting"
    ],
    "evolvesFrom": "Machopeur",
    "number": "008",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/8.png",
      "large": "https://images.pokemontcg.io/base1/8_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Frappe Sismique",
        "cost": [
          "Fighting",
          "Fighting",
          "Fighting",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "base1-12",
    "name": "Feunard Holo Vintage",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Fire"
    ],
    "number": "012",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/base1/12.png",
      "large": "https://images.pokemontcg.io/base1/12_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Flamme Démoniaque",
        "cost": [
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": ""
      },
      {
        "name": "Déflagration 1999",
        "cost": [
          "Fire",
          "Fire",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "80",
        "text": "Défaussez une Énergie Feu."
      }
    ]
  },
  {
    "id": "base1-58",
    "name": "Pikachu Joues Jaunes Trésor",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Lightning"
    ],
    "number": "058",
    "artist": "Mitsuhiro Arita",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/58.png",
      "large": "https://images.pokemontcg.io/base1/58_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Tonnerre Historique",
        "cost": [
          "Lightning",
          "Lightning"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": "La version culte qui a marqué des générations."
      }
    ]
  },
  {
    "id": "base1-2",
    "name": "Tortank Shadowless Sans Ombre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "100",
    "types": [
      "Water"
    ],
    "number": "002",
    "artist": "Ken Sugimori",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/2.png",
      "large": "https://images.pokemontcg.io/base1/2_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Torrent Originel",
        "cost": [
          "Water",
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 3,
        "damage": "120",
        "text": "Tirage collector d’exception sans ombre latérale."
      }
    ]
  },
  {
    "id": "base1-15",
    "name": "Florizarre Shadowless Sans Ombre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "100",
    "types": [
      "Grass"
    ],
    "number": "015",
    "artist": "Mitsuhiro Arita",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/15.png",
      "large": "https://images.pokemontcg.io/base1/15_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Rayon Solaire Pur",
        "cost": [
          "Grass",
          "Grass",
          "Grass",
          "Grass"
        ],
        "convertedEnergyCost": 4,
        "damage": "100",
        "text": "Tirage sans ombre rarissime de 1999."
      }
    ]
  },
  {
    "id": "base1-4",
    "name": "Dracaufeu 1ère Édition Sans Ombre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "120",
    "types": [
      "Fire"
    ],
    "number": "004",
    "artist": "Mitsuhiro Arita",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/4.png",
      "large": "https://images.pokemontcg.io/base1/4_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Danseflamme Mythique",
        "cost": [
          "Fire",
          "Fire",
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 4,
        "damage": "150",
        "text": "La Sainte Trinité du TCG Pokémon. Estimée à des centaines de milliers d’euros en état PSA 10."
      }
    ]
  },
  {
    "id": "base1-4",
    "name": "Dracaufeu 1999 Gem Mint Collector",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "120",
    "types": [
      "Fire"
    ],
    "number": "004",
    "artist": "Mitsuhiro Arita",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/base1/4.png",
      "large": "https://images.pokemontcg.io/base1/4_hires.png"
    },
    "setId": "base1",
    "setName": "Set de Base Classique (1999)",
    "attacks": [
      {
        "name": "Danseflamme Immortelle",
        "cost": [
          "Fire",
          "Fire",
          "Fire",
          "Fire"
        ],
        "convertedEnergyCost": 4,
        "damage": "200",
        "text": "Le trésor absolu de tout collectionneur. Un véritable artefact du patrimoine Pokémon."
      }
    ]
  },
  {
    "id": "sv4-66",
    "name": "Pohm",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Lightning"
    ],
    "number": "066",
    "artist": "Atsushi Furusawa",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/66.png",
      "large": "https://images.pokemontcg.io/sv4/66_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Frotte-Frimousse",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": "Paralyse le Pokémon Défenseur."
      }
    ]
  },
  {
    "id": "sv4-26",
    "name": "Tritox",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Fire"
    ],
    "number": "026",
    "artist": "Narumi Sato",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/26.png",
      "large": "https://images.pokemontcg.io/sv4/26_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Gaz Brûlant",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-90",
    "name": "Axoloto de Paldea",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "60",
    "types": [
      "Darkness"
    ],
    "number": "090",
    "artist": "Kouki Saitou",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/90.png",
      "large": "https://images.pokemontcg.io/sv4/90_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Tir Fangeux",
        "cost": [
          "Darkness"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-25",
    "name": "Malvalame",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "80",
    "types": [
      "Fire"
    ],
    "number": "025",
    "artist": "hncl",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/25.png",
      "large": "https://images.pokemontcg.io/sv4/25_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Lame Étincelle",
        "cost": [
          "Fire"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-15",
    "name": "Poltchageist",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "30",
    "types": [
      "Grass"
    ],
    "number": "015",
    "artist": "HYOGONOSUKE",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/15.png",
      "large": "https://images.pokemontcg.io/sv4/15_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Éclaboussure de Thé",
        "cost": [
          "Grass"
        ],
        "convertedEnergyCost": 1,
        "damage": "10",
        "text": "Soignez 10 dégâts."
      }
    ]
  },
  {
    "id": "sv4-7",
    "name": "Coxy",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "50",
    "types": [
      "Grass"
    ],
    "number": "007",
    "artist": "Shibuzoh.",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/7.png",
      "large": "https://images.pokemontcg.io/sv4/7_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Poing Étoilé",
        "cost": [
          "Grass"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-85",
    "name": "Flabébé",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "40",
    "types": [
      "Psychic"
    ],
    "number": "085",
    "artist": "sowsow",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/85.png",
      "large": "https://images.pokemontcg.io/sv4/85_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Brise Féerique",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "20",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-70",
    "name": "Morpeko",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Lightning"
    ],
    "number": "070",
    "artist": "Teeziro",
    "rarity": "Common",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/70.png",
      "large": "https://images.pokemontcg.io/sv4/70_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Roue Électrique",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "30",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-67",
    "name": "Pohmotte",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Lightning"
    ],
    "evolvesFrom": "Pohm",
    "number": "067",
    "artist": "Kouki Saitou",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/67.png",
      "large": "https://images.pokemontcg.io/sv4/67_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Éclair Vivant",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-27",
    "name": "Malamandre",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "110",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Tritox",
    "number": "027",
    "artist": "Anesaki Dynamic",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/27.png",
      "large": "https://images.pokemontcg.io/sv4/27_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Venin Dévorant",
        "cost": [
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60+",
        "text": "Inflige 60 dégâts supplémentaires si le défenseur est empoisonné."
      }
    ]
  },
  {
    "id": "sv4-16",
    "name": "Théffroyable",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "70",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Poltchageist",
    "number": "016",
    "artist": "Mizue",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/16.png",
      "large": "https://images.pokemontcg.io/sv4/16_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Cérémonie du Thé",
        "cost": [
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "50",
        "text": "Piochez 2 cartes."
      }
    ]
  },
  {
    "id": "sv4-95",
    "name": "Forgelina",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "80",
    "types": [
      "Psychic"
    ],
    "number": "095",
    "artist": "chibi",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/95.png",
      "large": "https://images.pokemontcg.io/sv4/95_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Marteau Fracassant",
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "60",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-8",
    "name": "Coxyclaque",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "90",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Coxy",
    "number": "008",
    "artist": "Teeziro",
    "rarity": "Uncommon",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/8.png",
      "large": "https://images.pokemontcg.io/sv4/8_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Frappe Fulgurante",
        "cost": [
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "70",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-38",
    "name": "Carchacrok",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "160",
    "types": [
      "Fighting"
    ],
    "number": "038",
    "artist": "Shinji Kanda",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/38.png",
      "large": "https://images.pokemontcg.io/sv4/38_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Tranch’Air Rafale",
        "cost": [
          "Fighting",
          "Fighting"
        ],
        "convertedEnergyCost": 2,
        "damage": "160",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-114",
    "name": "Métalosse",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "170",
    "types": [
      "Metal"
    ],
    "number": "114",
    "artist": "kawayoo",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/114.png",
      "large": "https://images.pokemontcg.io/sv4/114_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Impact Météorite",
        "cost": [
          "Metal",
          "Metal",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "180",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-105",
    "name": "Steelix",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "180",
    "types": [
      "Metal"
    ],
    "number": "105",
    "artist": "Gou Kagairu",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/105.png",
      "large": "https://images.pokemontcg.io/sv4/105_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Séisme Terrestre",
        "cost": [
          "Metal",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "130",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-30",
    "name": "Heatran",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "140",
    "types": [
      "Fire"
    ],
    "number": "030",
    "artist": "chibi",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/30.png",
      "large": "https://images.pokemontcg.io/sv4/30_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Magma Tempête",
        "cost": [
          "Fire",
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "140",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-150",
    "name": "Boréas",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "110",
    "types": [
      "Colorless"
    ],
    "number": "150",
    "artist": "nagimiso",
    "rarity": "Rare Holo",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/150.png",
      "large": "https://images.pokemontcg.io/sv4/150_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Typhon Ravageur",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "80",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-124",
    "name": "Rugit-Lune-ex (Temps Passé)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "230",
    "types": [
      "Darkness"
    ],
    "number": "124",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/124.png",
      "large": "https://images.pokemontcg.io/sv4/124_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Frénésie Furieuse",
        "cost": [
          "Darkness",
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "",
        "text": "Mettez K.O. le Pokémon Actif adverse. Rugit-Lune s’inflige 200 dégâts."
      },
      {
        "name": "Tempête Calamiteuse",
        "cost": [
          "Darkness",
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "140+",
        "text": "Défaussez un Stade en jeu pour infliger 80 dégâts de plus."
      }
    ]
  },
  {
    "id": "sv4-89",
    "name": "Garde-de-Fer-ex (Temps Futur)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "220",
    "types": [
      "Psychic"
    ],
    "number": "089",
    "artist": "PLANETA Yamashita",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/89.png",
      "large": "https://images.pokemontcg.io/sv4/89_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Particules Tachyon",
        "cost": [],
        "convertedEnergyCost": 0,
        "damage": "",
        "text": "Placez 2 marqueurs de dégâts sur un Pokémon adverse lors de son entrée en jeu."
      },
      {
        "name": "Lame Laser",
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "200",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-58",
    "name": "Mewtwo-ex (Téra Électrique)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "230",
    "types": [
      "Lightning"
    ],
    "number": "058",
    "artist": "5ban Graphics",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/58.png",
      "large": "https://images.pokemontcg.io/sv4/58_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Transfert Énergie",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Déplacez 2 Énergies de votre Banc."
      },
      {
        "name": "Photon Foudroyant",
        "cost": [
          "Lightning",
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "180+",
        "text": "Inflige 60 dégâts de plus si 4 Énergies ou plus sont attachées."
      }
    ]
  },
  {
    "id": "sv4-164",
    "name": "Tapatoès-ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "260",
    "types": [
      "Colorless"
    ],
    "number": "164",
    "artist": "PLANETA Mochizuki",
    "rarity": "Double Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/164.png",
      "large": "https://images.pokemontcg.io/sv4/164_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Haut-Parleur Fou",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "120",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-199",
    "name": "Groudon (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "130",
    "types": [
      "Fighting"
    ],
    "number": "199",
    "artist": "Nurikabe",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/199.png",
      "large": "https://images.pokemontcg.io/sv4/199_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Magma Éruptif",
        "cost": [
          "Fighting",
          "Fighting"
        ],
        "convertedEnergyCost": 2,
        "damage": "60×",
        "text": "Défaussez jusqu’à 4 Énergies de votre main pour 60 dégâts chacune."
      }
    ]
  },
  {
    "id": "sv4-205",
    "name": "Yveltal (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "110",
    "types": [
      "Darkness"
    ],
    "number": "205",
    "artist": "Jerky",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/205.png",
      "large": "https://images.pokemontcg.io/sv4/205_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Aile d’Ombre",
        "cost": [
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "110",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-208",
    "name": "Steelix (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 1"
    ],
    "hp": "180",
    "types": [
      "Metal"
    ],
    "number": "208",
    "artist": "Shinji Kanda",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/208.png",
      "large": "https://images.pokemontcg.io/sv4/208_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Tunnel Sismique",
        "cost": [
          "Metal",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "130",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-206",
    "name": "Morpeko (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base"
    ],
    "hp": "70",
    "types": [
      "Lightning"
    ],
    "number": "206",
    "artist": "sowsow",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/206.png",
      "large": "https://images.pokemontcg.io/sv4/206_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Course Électrique Gourmande",
        "cost": [
          "Lightning"
        ],
        "convertedEnergyCost": 1,
        "damage": "70",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-214",
    "name": "Porygon-Z (Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2"
    ],
    "hp": "150",
    "types": [
      "Colorless"
    ],
    "number": "214",
    "artist": "Gou Kagairu",
    "rarity": "Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/214.png",
      "large": "https://images.pokemontcg.io/sv4/214_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Bug Cybernétique",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "140",
        "text": ""
      }
    ]
  },
  {
    "id": "sv4-251",
    "name": "Rugit-Lune-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "230",
    "types": [
      "Darkness"
    ],
    "number": "251",
    "artist": "Ryota Murayama",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/251.png",
      "large": "https://images.pokemontcg.io/sv4/251_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Calamité Ancestrale",
        "cost": [
          "Darkness",
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "220",
        "text": "Le prédateur suprême du temps immémorial dans toute sa sauvagerie."
      }
    ]
  },
  {
    "id": "sv4-249",
    "name": "Garde-de-Fer-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "220",
    "types": [
      "Psychic"
    ],
    "number": "249",
    "artist": "Teeziro",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/249.png",
      "large": "https://images.pokemontcg.io/sv4/249_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Surcharge Tachyonique",
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "210",
        "text": "L’intelligence artificielle combattante du futur lointain."
      }
    ]
  },
  {
    "id": "sv4-245",
    "name": "Carchacrok-ex (Spécial Illustration)",
    "supertype": "Pokémon",
    "subtypes": [
      "Niveau 2",
      "ex"
    ],
    "hp": "320",
    "types": [
      "Water"
    ],
    "number": "245",
    "artist": "Oswaldo KATO",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/245.png",
      "large": "https://images.pokemontcg.io/sv4/245_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Plongée Hydro-Draco",
        "cost": [
          "Water"
        ],
        "convertedEnergyCost": 1,
        "damage": "160",
        "text": "Attachez 3 Énergies Eau de votre défausse à vos Pokémon de Banc."
      }
    ]
  },
  {
    "id": "sv4-254",
    "name": "Mashynn (Spécial Illustration)",
    "supertype": "Trainer",
    "subtypes": [
      "Supporter"
    ],
    "types": [],
    "number": "254",
    "artist": "kirisAki",
    "rarity": "Special Illustration Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/254.png",
      "large": "https://images.pokemontcg.io/sv4/254_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": []
  },
  {
    "id": "sv4-262",
    "name": "Rugit-Lune-ex (Or Brillant)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "230",
    "types": [
      "Darkness"
    ],
    "number": "262",
    "artist": "PLANETA Mochizuki",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/262.png",
      "large": "https://images.pokemontcg.io/sv4/262_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Fureur Dorée Antique",
        "cost": [
          "Darkness",
          "Darkness",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "230",
        "text": "La relique antique parée d’un éclat doré majestueux."
      }
    ]
  },
  {
    "id": "sv4-261",
    "name": "Garde-de-Fer-ex (Or Brillant)",
    "supertype": "Pokémon",
    "subtypes": [
      "Base",
      "ex"
    ],
    "hp": "220",
    "types": [
      "Psychic"
    ],
    "number": "261",
    "artist": "PLANETA Yamashita",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/261.png",
      "large": "https://images.pokemontcg.io/sv4/261_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": [
      {
        "name": "Hyper-Technologie Or",
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "220",
        "text": "Châssis futuriste plaqué or pur."
      }
    ]
  },
  {
    "id": "sv4-260",
    "name": "Capsule Énergie Booster (Or Brillant)",
    "supertype": "Trainer",
    "subtypes": [
      "Item"
    ],
    "types": [],
    "number": "260",
    "artist": "Studio Bora Inc.",
    "rarity": "Hyper Rare",
    "images": {
      "small": "https://images.pokemontcg.io/sv4/260.png",
      "large": "https://images.pokemontcg.io/sv4/260_hires.png"
    },
    "setId": "sv4",
    "setName": "Faille Paradoxe",
    "attacks": []
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

  // 1% de chance de "God Pack" (paquet mythique rempli uniquement de Full Art / SIR / Gold)
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
