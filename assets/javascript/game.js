
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var winCount = 0;
        var lossCount = 0;
        var guessCount = 9;
        var userSelection = [];
        var randomletter;

        function random() {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomLetter);
            return randomLetter;

        }
        randomLetter = random();


        document.onkeyup = function (event) {

            var userGuess = event.key.toLowerCase();
            var compGuess = randomLetter;
            console.log(compGuess);

            var guessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


            
                if (guessOptions.indexOf(userGuess) > -1 && (userSelection.indexOf(userGuess) === -1) ){ 
                        
                       
                         if (userGuess === compGuess) {
                            winCount ++;
                            guessCount = 9;
                            userSelection = [];
                            compGuess = random();
                        }
                       if (userGuess !== compGuess){
                            guessCount --;
                            userSelection =  userSelection + "," + event.key;
                            userSelection = userSelection.replace(/^,/,'');
                        }
                    

                        if (guessCount === 0) {
                            guessCount = 9;
                            lossCount ++;
                            userSelection = [];
                        }

                        }

                var html =
                    "<h1> The Psychic Game </h1>" +
                    "<p> Guess what letter I'm thinking of </p>" +
                    "<p> Wins: " + winCount + "</p>" +
                    "<p> Losses: " + lossCount + "</p>" +
                    "<p> Guesses Left: " + guessCount + "</p>" +
                    "<p> Your Guesses so far: " + userSelection + "</p>";
             // Set the inner HTML contents of the #game div to our html string
                document.querySelector("#game").innerHTML = html;
            }



        ;


    
