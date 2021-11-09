import { Character, Element } from './character';

export class PepePotencia2 implements Character {

  name: string;
  health: number;
  attack: number;
  defense: number;
  elementAttack: Element;
  elementDefense: Element;
  warcry: string;

  constructor() {
    this.name = 'Pepe el potencia';
    this.health = 200;
    this.attack = 100;
    this.defense = 400;
    this.elementAttack = 'wind';
    this.elementDefense = 'wind';
    this.warcry = 'hay que esnifarse la vida, querido amigo';
  }

  doAttack(): Element {
    const aleatorio = Math.random() * 100;
    let element: Element;
    if (aleatorio >= 0 && aleatorio <= 25){
      element = 'fire';
    } else if (aleatorio > 25 && aleatorio <= 50){
      element = 'water';
    } else if (aleatorio > 50 && aleatorio <= 75){
      element = 'wind';
    } else {
      element = 'earth';
    } 
    return element;
  }
  doDefense(): Element {
    const aleatorio = Math.random() * 100;
    let element: Element;
    if (aleatorio >= 0 && aleatorio <= 25){
      element = 'water';
    } else if (aleatorio > 25 && aleatorio <= 50){
      element = 'fire';
    } else if (aleatorio > 50 && aleatorio <= 75){
      element = 'earth';
    } else {
      element = 'wind';
    }
    return element;
  }

  criticalEvent() {
    return this.warcry;
  }
}