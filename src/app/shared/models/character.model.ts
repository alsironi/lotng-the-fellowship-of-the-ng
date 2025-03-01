export interface Character {
  id: string;
  name: string;
  realm: string;
  race: string;
  abilities: Ability[];
  level: number;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  power: number;
}

export interface Realm {
  id: string;
  name: string;
  description: string;
}
