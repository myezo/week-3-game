var words = ["jaws", "jurassicpark", "fightclub"];
var computerChoice = words[Math.floor(Math.random()*words.length)];
var numberOfGuesses = computerChoice.length + 3;
var lettersGuessed = [];
var lineArr = [];
var key = "";
var guess = "";
var displayGuessNum = document.querySelector("#score");


document.querySelector("#lettersTyped").innerHTML = guess;

var initialDraw = function(){
    for(var i = 0; i < computerChoice.length; i++){
        var span = document.createElement('span'); //create new span element set equal to i
        span.setAttribute('class', i.toString()); // Sets the ID to = the index
        span.innerHTML = " _ ";
        display.appendChild(span);
    }
}();


document.onkeyup = function(event){
    key = event.key;
    
    for(var i = 0; i < computerChoice.length; i++){
        if(computerChoice[i] == key){
            var index = display.getElementsByClassName(i.toString());
            index[0].innerHTML = key.toUpperCase();
            lettersGuessed.push(key);
            numberOfGuesses -= 1;
            displayGuessNum.innerHTML = "You have this many attempts left: " + numberOfGuesses;
            console.log(key);
            console.log(lettersGuessed);
		}

	}

}



