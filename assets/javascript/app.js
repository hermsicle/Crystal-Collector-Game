
//create a function that would add all the clicked crystals and show the number
//have it reset every time you win or lose, while keeping the wins and losses on page.

$(document).ready(function(){

//Create a random winning number 
//winning number should be between 15-115.
var winningNum = Math.floor(Math.random() * 100) + 15;
console.log ('winningNum ' + winningNum);
$('.numberToMatch').html(winningNum);

//create random number generator for each of the gems
//random numbers of jewels should be anywhere from 1 - 13
var blueGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + blueGem);
$('#blueGem').html("value" + blueGem + '>');

var greenGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 2: " + greenGem);
$('#greenGem').html("value" + greenGem + '>');

var redGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 3: " + redGem);
$('#redGem').html("value" + redGem + '>');

var yellowGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 4: " + yellowGem);
$('#yellowGem').html("value" + yellowGem + '>');

//Create wim, loss, and score
var win = 0;
console.log ('wins: '+ win);

var losses = 0;
console.log ('losses: ' + losses);

var score = 0;
console.log ('score: ' + score);



//create the function that resets the game
function reset () {
    var winningNum = Math.floor(Math.random() * 100) + 15;
    console.log ('winningNum ' + winningNum);
    $('#randomNUmber').html(winningNum);

    score = 0;
    $('#totalScore').html(score);

var blueGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 1: " + blueGem);
$('#blueGem').html("value" + blueGem + '>');

var greenGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 2: " + greenGem);
$('#greenGem').html("value" + greenGem + '>');

var redGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 3: " + redGem);
$('#redGem').html("value" + redGem + '>');

var yellowGem = Math.floor(Math.random() * 12 + 1);
console.log ("Gem 4: " + yellowGem);
$('#yellowGem').html("value" + yellowGem + '>');





}

//create the click event for gems
$('.blueGem').click (function () {
    score = score + blueGem
    console.log ("New Score " + score);
    $('#totalScore').text(score);
    //Setting win/loss conditions
    if (score === winningNum){
        yay();
    }
    else if (score > winningNum){
        loss();
    }
})

















});












