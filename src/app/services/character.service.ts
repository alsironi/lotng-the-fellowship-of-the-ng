import { Injectable } from '@angular/core';

export interface Character {
  id: string;
  name: string;
  realm: string;
  level: number;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [];

  getCharacters(): Character[] {
    return this.characters;
  }

  getCharacterById(id: string): Character | undefined {
    return this.characters.find(c => c.id === id);
  }

  getCharactersByRealm(realm: string): Character[] {
    return this.characters.filter(c => c.realm === realm);
  }
}
