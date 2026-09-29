export type CardType = 
  | 'Colorless'
  | 'Darkness'
  | 'Dragon'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Grass'
  | 'Lightning'
  | 'Metal'
  | 'Psychic'
  | 'Water';

export type CardRarity = 
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Rare Holo'
  | 'Double Rare'
  | 'Ultra Rare'
  | 'Illustration Rare'
  | 'Special Illustration Rare'
  | 'Hyper Rare'; // Gold

export interface CardAttack {
  name: string;
  cost: CardType[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface PokemonCard {
  id: string;
  name: string;
  supertype: 'Pokémon' | 'Trainer' | 'Energy';
  subtypes?: string[];
  hp?: string;
  types?: CardType[];
  evolvesFrom?: string;
  attacks?: CardAttack[];
  weaknesses?: { type: CardType; value: string }[];
  resistances?: { type: CardType; value: string }[];
  retreatCost?: CardType[];
  number: string;
  artist?: string;
  rarity: CardRarity;
  flavorText?: string;
  images: {
    small: string;
    large: string;
  };
  setId: string;
  setName: string;
}

export interface ExpansionSet {
  id: string;
  name: string;
  series: string;
  totalCards: number;
  releaseDate: string;
  logo: string;
  boosterImage: string;
  accentColor: string;
  description: string;
}

export interface CardInCollection {
  cardId: string;
  count: number;
  firstObtainedAt: number;
  isFavorite: boolean;
}

export interface PackOpeningHistory {
  id: string;
  setId: string;
  setName: string;
  openedAt: number;
  cards: PokemonCard[];
  bestRarity: CardRarity;
  isGodPack?: boolean;
}
