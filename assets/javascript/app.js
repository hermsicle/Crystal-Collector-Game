
//create a function that would add all the clicked crystals and show the number
//have it reset every time you win or lose, while keeping the wins and losses on page.

$(document).ready(function(){

//Create a random winning number 
var winningNum = Math.floor(Math.random() * 100) + 15;
console.log ('winningNum ' + winningNum);
$('#randomNUmber').html(winningNum);

//create random number generator for each of the gems
var blueGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + blueGem);
$('#blueGem').html()

var greenGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 2: " + greenGem);

var redGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + redGem);

var yellowGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + yellowGem);

//Create wim, loss, and score
var win = 0;
console.log ('wins: '+ win);

var losses = 0;
console.log ('losses: ' + losses);

var score = 0;
console.log ('score: ' + score);
















});