var	numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var	colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

resetButton.addEventListener("click", function(){
	reset();
});


// functions used below: 

function init(){
	// setup event listeners
	setupModeButtons();
	setupSquares();
	// setup colors and other visuals
	reset()
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			// Change color to h1 colour
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
				
			// Change number of squares and reset
			// Turnary operator on next line like if statement
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		// Add click listeners to square
		squares[i].addEventListener("click", function(){ 
			// Grab colour of picked square -- interestingly this worked when squares[i] did not
			var clickedColor = this.style.backgroundColor
			// Compare colour to pickedColor
			if (clickedColor === pickedColor) { 
				messageDisplay.textContent = "Correctimondo!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	
	// Change colors
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// Reset game
	for(var i = 0; i < squares.length; i++){
		if (i < numSquares) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = null;
}



function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++) {
	// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	// pick random number
	var random = Math.floor(Math.random() * colors.length); 
	// 
	return colors[random];
}

function generateRandomColors(num){
	// generate array
	var arr = [];
	// fill with num random colours to arr
	for(var i = 0; i < num; i++){
		random = randomColor();
		arr.push(random);
	}
	// return array
	return arr;
}

function randomColor(){
	// pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var green = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var blue = Math.floor(Math.random() * 256);

	// create color string
	color = "rgb(" + red + ", " + green + ", " + blue + ")"

	return color;
}