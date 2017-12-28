import readlineSync from 'readline-sync';

console.log("Welcome");
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');


