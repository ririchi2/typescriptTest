import { Arena } from './Arena';
// import { ElcreMoso } from './personajes/ElcreMoso';
import { GolangTerrible } from './personajes/GolangTerrible';
// import { CharacterMiserable } from './personajes/CharacterMiserable';
import { PepePotencia2 } from './personajes/PepePotencia2';
// import { DummyCharacter } from './personajes/character';


export const maxStats = 1000;

// const elCremoso = new ElcreMoso();

const pepePotencia = new PepePotencia2();

// const characterMiserable = new CharacterMiserable();

const golangTerrible = new GolangTerrible();


const arena = new Arena(pepePotencia,golangTerrible);

const winner = arena.fight();

// console.log(elCremoso, pepePotencia, characterMiserable, golangTerrible);


console.log('El ganador es : ', winner);