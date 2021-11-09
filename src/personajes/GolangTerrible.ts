import { Character, Element } from './character';


export class GolangTerrible implements Character {
    name: string;
    health: number;
    attack: number;
    defense: number;
    elementAttack: Element;
    elementDefense: Element;
    warcry: string;

    constructor() {
      this.name = 'Golang El Terrible';
      this.health = 300;
      this.attack = 300;
      this.defense = 400;
      this.elementAttack = 'fire';
      this.elementDefense = 'fire';
      this.warcry = 'Let`s go Goroutines';
    }

    doAttack(): Element{
    //   let randomNumber = Math.floor(Math.random() * 3);
      return 'water';
    }
    
    doDefense(): Element{
    //   let randomNumber = Math.floor(Math.random() * 3);
      return 'water';
    }
    
    criticalEvent(){
      return this.warcry;
    }
}