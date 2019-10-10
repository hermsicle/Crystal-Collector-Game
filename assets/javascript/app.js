
//create a function that would add all the clicked crystals and show the number
//have it reset every time you win or lose, while keeping the wins and losses on page.

$(document).ready(function () {

    //Create a random winning number 
    //winning number should be between 15-115.
    var winningNum = Math.floor(Math.random() * 100) + 15;
    console.log('winningNum ' + winningNum);
    $('.numberToMatch').html(winningNum);

    //create random number generator for each of the gems
    //random numbers of jewels should be anywhere from 1 - 13
    var blueGem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 1: " + blueGem);
    $('#blueGem').html(blueGem);

    var greenGem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + greenGem);
    $('#greenGem').html(greenGem);

    var redGem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 3: " + redGem);
    $('#redGem').html(redGem);

    var yellowGem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 4: " + yellowGem);
    $('#yellowGem').html(yellowGem);

    //Create wim, loss, and score
    var win = 0;
    console.log('wins: ' + win);

    var losses = 0;
    console.log('losses: ' + losses);

    var score = 0;
    console.log('score: ' + score);

    //create the function that resets the game
    function reset() {
        winningNum = Math.floor(Math.random() * 100) + 15;
        console.log('winningNum ' + winningNum);
        $('.numberToMatch').html(winningNum);

        score = 0;
        $('#totalScore').html(score);


    }

    function checkCondition() {
        console.log(score)

        if (score === winningNum) {
            win++;
            $('#numberWins').text(win)
            reset()
        } else if (score > winningNum) {
            losses++;
            $('#numberLosses').text(losses)
            reset()
        }

    }

    //create the click event for gems
    $('#blueGem').on('click', function () {
        score = score + blueGem;
        checkCondition()
        console.log(score);
        $('#totalScore').text(score)


    });
    $('#greenGem').on('click', function () {
        score = score + greenGem;
        checkCondition()
        $('#totalScore').text(score)
    });
    $('#redGem').on('click', function () {
        score = score + redGem;
        checkCondition()
        $('#totalScore').text(score)
    });
    $('#yellowGem').on('click', function () {
        score = score + yellowGem;
        checkCondition()
        $('#totalScore').text(score)
    });











});












