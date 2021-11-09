export type Element = 'fire' | 'water' | 'earth' | 'wind';

export interface Character {
    name: string;
    health: number;
    attack: number;
    defense: number;
    elementAttack: Element;
    elementDefense: Element;
    warcry: string;

    doAttack: () => Element;
    doDefense: () => Element;
}

export class DummyCharacter implements Character {
    name: string;
    health: number;
    attack: number;
    defense: number;
    elementAttack: Element;
    elementDefense: Element;
    warcry: string;

    constructor() {
      this.name = 'Dummy';
      this.health = Math.floor(Math.random() * (100 - 1) + 1);
      this.attack = Math.floor(Math.random() * (20 - 1) + 1);
      this.defense = Math.floor(Math.random() * (10 - 1) + 1);
      this.elementAttack = 'fire';
      this.elementDefense = 'fire';
      this.warcry = 'hola';
    }

    doAttack(): Element {
      return 'fire';
    }

    doDefense(): Element {
      return 'fire';
    }
}


// export class CharacterCrema implements Character {
//     health = 100;
//     attack = 100;
//     defense = 100;
//     name = 'Cremoso'
// }

// const personajeCrema = new CharacterCrema();

// personajeCrema.health;