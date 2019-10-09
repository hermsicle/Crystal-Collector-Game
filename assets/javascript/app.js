//create variables 
//Create a random number generator for the winning number
//create random number generator for the four different crystals
//create a function that would add all the clicked crystals and show the number
//create a wins and losses variable
//have it reset every time you win or lose, while keeping the wins and losses on page.

$(document).ready(function(){


//Create a random winning number 
var winningNum = Math.floor(Math.random() * 100) + 15;
console.log ('winningNum ' + winningNum);


//create random number generator for each of the gems
//blueGem :

var blueGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + blueGem);

var greenGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 2: " + greenGem);

var redGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + redGem);

var yellowGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + yellowGem);


//Create win and loss and score var

var win = 0;

var losses = 0;

var score = 0;
















});