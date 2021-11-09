// export const 
const maxHP = 1024;
const maxATK = 255;
const maxDEF = 128;

class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.check();
  }

  fight(): string {
    while (this.player1.life > 0 && this.player2.life > 0) {
      this.player1.life = (this.player2.attack - this.player1.defense) - this.player1.life;

      this.player2.life = (this.player1.attack - this.player2.defense) - this.player2.life;
    }

    if (this.player1.life <= 0 && this.player2.life <= 0) {
      return 'draw';
    } else if (this.player1.life > 0 && this.player2.life <= 0) {
      return this.player1.name;
    }
    return this.player2.name;
  }

  check(): void {
    if (this.player1.life > maxHP) {
      this.player1.life = maxHP;
    }
    if (this.player2.life > maxHP) {
      this.player2.life = maxHP;
    }
    if (this.player1.attack > maxATK) {
      this.player1.attack = maxATK;
    }
    if (this.player2.attack > maxATK) {
      this.player2.attack = maxATK;
    }
    if (this.player1.defense > maxDEF) {
      this.player1.defense = maxDEF;
    }
    if (this.player2.defense > maxDEF) {
      this.player2.defense = maxDEF;
    }
  }
}