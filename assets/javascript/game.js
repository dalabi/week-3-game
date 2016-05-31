// Create an array that lists out all of the options
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// initialize counters
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess;
var lastChange = [];  


document.querySelector('#game').innerHTML = '<p>Please press a letter key to begin</p>';

// Captures Key Clicks
document.onkeyup = function(event) {

// Determines which exact key was selected. Make it lowercase
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// console.log(userGuess);

// Create code to randomly choose one of the letter options (Computer) 
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	
//
userGuess = ' ' + userGuess;
lastChange.push(userGuess);

if (userGuess === computerGuess) {
	
	var guessedLetters
	wins++;
	guessesLeft = 10;

} else if (userGuess !== computerGuess) {
	losses++;
	
	if (guessesLeft > 0) {
		guessesLeft--;
	}else{
		guessesLeft = 10;
	}
	

}
	document.querySelector('#game').innerHTML =
		'<p>Guess which letter I am thinking of</p>' +
	    '<p>Wins: ' + wins + '</p>' +
	    '<p>Losses: ' + losses + '</p>' +
	    '<p>Guesses Left: ' + guessesLeft + '</p>' +
		'Previous Guess: ' + lastChange;
	  
		
  
};