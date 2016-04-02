
/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var winningNumber = Math.floor(Math.random()*100)+1;
	return winningNumber;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	var playersGuess = +document.getElementById("guess").value;
	document.getElementById('guess').value = "";
	
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	if (playersGuess != winningNumber){
		if (playersGuess < winningNumber){
			var lowerOrHigher = "lower";
			//The guess is lower than the right number.
		}else{
			var lowerOrHiger = "higher";
			//The guess is higher than the right number.
		}
		if (Math.abs(winningNumber - playersGuess) < 10){
			var close = true;
		}
		else{
			var close = false;
		}
	}


function guessMessage(){
	lowerOrHigher();
	var message1 = "Your guess is " + lowerOrHigher + "than the right number.";
	var message2 = " and it is farther than ten away.";
	if (close == true){
		var message2 = " and it is within ten of the right number."
	}
	return message1+message2;
}



}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	/*need to figure out  check through previous guesses to see if the current
	guess is a repeat.*/
	var prevGuesses = [];
	var numOfTries = 0;

	if (playersGuess == winningNumber){
		alert("You win!");
	}else (playersGuess < winningNumber){
		alert("Try again.");
		prevGuesses.push(playersGuess);
		numOfTries++;}
	
}


// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	decoyNumber1 = Math.floor(Math.random()*100)+1;
	decoyNumber2 = Math.floor(Math.random()*100)+1;
	unscrambledHintArray = [winningNumber, decoyNumber1, decoyNumber2];
	scrambledHintArray = shuffle(unscrambledHintArray);
	return scrambledHintArray;
}

// Allow the "Player" to Play Again

function playAgain(){
	generateWinningNumber();
	var prevGuesses = [];
	var numOfTries = 0;
}


/* **** Event Listeners/Handlers ****  */





















