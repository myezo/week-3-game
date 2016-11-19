var words = ["fight"];
var computerChoice = words[Math.floor(Math.random()*words.length)];
var numberOfGuesses = 10;
var lettersGuessed = [];
var drawnWord = [];
var lettersGuessed = [];
var movieSplit = [];
var a;
//letters of the movie in an array
//var movieSplit = computerChoice.split("");
//console.log(movieSplit);


var display = [];

document.querySelector("#score").innerHTML = numberOfGuesses;


//draw initial lines on screen
function initialDraw(){
    for(var i = 0; i < computerChoice.length; i++){
        //movieLetters.innerHTML += " _ ";
        display[i] += " _ ";
    }
    a = display.join(" ");
    document.querySelector("#display").innerHTML = a;
}


initialDraw();


function draw(key){
    drawnWord = ""; //reset each time
    for(var i = 0; i < computerChoice.length; i++){

     /*   if (lettersGuessed.indexOf(computerChoice[i]) == i){
        drawnWord += computerChoice[i];
    }else{
        drawnWord += " _ ";
        }*/
	    if(computerChoice[i] == key){

	    }
    }
    console.log(drawnWord);
}

/*
document.onkeyup = function(event){
    key = event.key;
    --numberOfGuesses;
    console.log(key);
    console.log(numberOfGuesses);
    
     if ((computerChoice.indexOf(key) >= 0) && (lettersGuessed.indexOf(key) == -1)){
      lettersGuessed.push(key);
      draw();
      movieLetters.innerHTML = drawnWord;
  	}else{
      console.log(key, "wrong")
  	}

  	draw();
  
  document.querySelector("#score").innerHTML = numberOfGuesses;
}
*/