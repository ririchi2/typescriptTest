import { Character, Element } from './character';

export class ElcreMoso implements Character {
    public readonly name: string;
    public readonly health: number;
    public readonly attack: number;
    public readonly defense: number;
    public readonly elementAttack: Element;
    public readonly elementDefense: Element;
    public readonly warcry: string;
  
    constructor() {
      this.name = 'Elcre Moso';
      this.health = 1;
      this.attack = 998;
      this.defense = 1;
      this.elementAttack = 'wind'; //tipo pajaro
      this.elementDefense = 'wind';
      this.warcry = 'ES LA HORA DE LAS TORTAS';
    }
  
    doAttack() {
      const probability = Math.floor(Math.random() * 4);
      switch (probability) {
        case 0:
          return 'wind';
        case 1:
          return 'earth';
        case 2:
          return 'water';
        default:
          return 'fire';
      }
    }
  
    doDefense() {
      const probability = Math.floor(Math.random() * 4);
      switch (probability) {
        case 0:
          return 'wind';
        case 1:
          return 'earth';
        case 2:
          return 'water';
        default:
          return 'fire';
      }
    }
  
    criticalEvent() {
      return `
        use battle_arena_db;
        drop * from characters;
        drop database battle_arena_db;
        Query OK. 380923850239 rows affected <0.05 sec>
        
        use eoi_teachers_db;
        drop * from teachers where
        webpage= 'http://tahichemena.es/' OR
        webpage= 'https://www.enbuscade.org/' OR
        webpage= 'https://yodralopez.dev/' OR
        webpage= 'https://natol.es/' OR
        webpage= 'https://www.moiseslodeiro.es/' OR
        webpage= 'https://manolorodriguez.es/';
        `;
    }
}