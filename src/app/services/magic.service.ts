import { Injectable } from '@angular/core';

export interface Spell {
  id: string;
  name: string;
  power: number;
  manaCost: number;
}

@Injectable({
  providedIn: 'root'
})
export class MagicService {
  private spells: Spell[] = [];

  castSpell(characterLevel: number, spell: Spell): boolean {
    return characterLevel > spell.manaCost;
  }

  calculatePower(characterLevel: number, spell: Spell): number {
    return spell.power * (1 + characterLevel * 0.1);
  }
}
