# Psychic-Game
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 10;
var guessTracker = [];
var randomLetter;


function random(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);
    return randomLetter;
}

random();


document.onkeyup = function(event, randomLetter) {
    var userGuess = event.key;
    computerGuess = randomLetter;
    console.log(computerGuess);
    
    if (userGuess !== computerGuess) {
        alert ("Try again");
        guessCounter --;
        guessTracker = guessTracker + event.key + ", ";
        
    } else if (userGuess === computerGuess) {
        alert ("Congratulations");
        winCounter ++;
        guessCounter = 10;
        guessTracker = [];
        computerGuess = random();
        
    }


    if (guessCounter === 0) {
        alert ("You lose. Sorry buddy");
        lossCounter ++;
        guessCounter = 10;
        guessTracker = [];
    }
  
    
    var html =
          "<h2>Guess what I'm thinking of!</h2>" +
          "<h2>Winner: " + winCounter + "</h2>" +
          "<h2>Losses: " + lossCounter + "</h2>" +
          "<h2>Guesses left: " + guessCounter + "</h2>" +
          "<h2>Previous Guesses: " + guessTracker + "</h2>" +
          "<h2>Open the console to see the answer ;)</h2>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
}