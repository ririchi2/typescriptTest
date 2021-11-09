import { Character } from './personajes/character';
import { maxStats } from './index';

export class Arena {
  player1: Character;
  player2: Character;

  constructor(player1: Character, player2: Character) {
    this.player1 = player1;
    this.player2 = player2;
    this.check();
  }


  fight(): string {
    console.log(this.player1.warcry); 
    console.log(this.player2.warcry);
    const damagePlayer1 = Math.max(this.player2.attack - this.player1.defense, 0);
    const damagePlayer2 = Math.max(this.player1.attack - this.player2.defense, 0);
    // let round = 1;


    while (this.player1.health > 0 && this.player2.health > 0) {
      // console.log(`Ronda ${round++}: `, damagePlayer1, damagePlayer2);
      // console.log(`Player 1: ${this.player1.doAttack()} attack`);
      // console.log(`Player 2: ${this.player2.doAttack()} attack`);
      // console.log(this.player1, this.player2);

      this.player1.health -= damagePlayer1;
      this.player2.health -= damagePlayer2;

      // this.player1.doAttack();
      // this.player2.doAttack();
    }
    
    // console.log('-> ', this.player1.health, this.player2.health); 

    if (this.player1.health <= 0 && this.player2.health <= 0) {
      return 'draw';
    } else if (this.player1.health > 0 && this.player2.health <= 0) {
      return this.player1.name;
    }
    return this.player2.name;
  }

  check(): void {
    if (this.player1.health < 1) {
      this.player1.health = 0;
    }
    if (this.player1.attack < 1) {
      this.player1.attack = 0;
    }
    if (this.player1.defense < 1) {
      this.player1.defense = 0;
    }
    if (this.player2.health < 1) {
      this.player2.health = 0;
    }
    if (this.player2.attack < 1) {
      this.player2.attack = 0;
    }
    if (this.player2.defense < 1) {
      this.player2.defense = 0;
    }
    if (this.player1.health + this.player1.attack + this.player1.defense > maxStats) {
      console.log('he entrado');
      this.player1.health = 1;
      this.player1.attack = 1;
      this.player1.defense = 1;
    }
    if (this.player2.health + this.player2.attack + this.player2.defense > maxStats) {
      console.log('he entrado');
      this.player2.health = 1;
      this.player2.attack = 1;
      this.player2.defense = 1;
    }
  }
}
