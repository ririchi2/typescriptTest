import { Character, Element } from './character';

export class PepePotencia2 implements Character {
    name: string;
    health: number;
    attack: number;
    defense: number;
    elementAttack: Element;
    elementDefense: Element;

    constructor() {
      this.name = 'Pepe el potencia';
      this.health = 500;
      this.attack = 100;
      this.defense = 400;
      this.elementAttack = 'earth';
      this.elementDefense = 'fire';
    }
}