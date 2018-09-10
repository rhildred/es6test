import readlineSync from 'readline-sync';
import Game from './Game';

let oGame = new Game();

let sInput = readlineSync.question("Type \"quit\" to end ... " + oGame.makeAMove("hello") + " ");

while("quit" != sInput){
    let sNewInput = readlineSync.question(oGame.makeAMove(sInput) + " ");
    sInput = sNewInput;
}