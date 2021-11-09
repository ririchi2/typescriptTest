import { Character, Element } from './character';

export class CharacterMiserable implements Character {
    name: string;
    health: number;
    attack: number;
    defense: number;
    elementAttack: Element;
    elementDefense: Element;
  
    constructor() {
      this.name = 'Miserable';
      this.health = 250;
      this.attack = 400;
      this.defense = 350;
      this.elementAttack = 'fire';
      this.elementDefense = 'water';
    }
}