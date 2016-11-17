var words = ["fight", "jaws", "jurassic"];
var computerChoice = words[Math.floor(Math.random()*words.length)];
var numberOfGuesses = 10;
var lettersGuessed = [];
var count = 0;
var lineArr = []; //making the lines on screen
var lineCount = computerChoice.length;
var correctLetter = "";
var drawnWord = "";

//not sure what the difference between guess and key is
var guess = "";
var key = "";

//letters of the movie in an array
var movieSplit = computerChoice.split("");

var display = [];

document.querySelector("#score").innerHTML = numberOfGuesses;


for(var i = 0; i < lineCount; i++){
	lineArr.push("_ ");
	movieLetters.innerHTML = lineArr;
	lineArr.join(" ");
}


function draw(){
	var drawnWord = "";
	for(var i = 0; i < lineCount; i++){
		if (lettersGuessed.indexOf(computerChoice[i]) == i){
                drawnWord += guess[i];
            }else{
                drawnWord += " _ ";
		}
	}
}


document.onkeyup = function(event){
	key = event.key;
	
	guess = guess + key;
	
	 if (computerChoice.indexOf(guess) >= 0) {
            lettersGuessed.push(key);
            draw();
            movieLetters.innerHTML = drawnWord;

        }else{
            console.log(guess, "wrong")
        }
}
