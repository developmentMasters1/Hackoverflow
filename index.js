var numRects = 3;
var colors = [];
var pickedColor;
var rects= document.querySelectorAll(".rect");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var bodyColor = document.querySelector("body");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();

function init(){ 
	setupMode();
	setupRect();
	reset();
}

function setupMode(){
	
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			this.classList.add("selected");
			switch(this.textContent) {
			    case "Easy":
			        numRects = 3;
			        break;
			    case "Hard":
			        numRects = 6;
			        break;
			    default:
			       console.log(numRects);
			}
			reset();
		});
	}
}


function setupRect(){
	for(var i = 0; i < rects.length; i++){
	//add click listeners to rectangles
		rects[i].addEventListener("click", function(){
			//grab color of clicked rectangles
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				bodyColor.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
				messageDisplay.style.color = "#232323";
			}
		});
	}
}




resetButton.addEventListener("click", function(){
	reset();
})


function reset(){
	colors = generateRandomColors(numRects);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	
		colorDisplay.textContent = pickedColor;
	
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of rectangles
	for(var i = 0; i < rects.length; i++){
		if(colors[i]){
			rects[i].style.display = "block"
			rects[i].style.backgroundColor = colors[i];
		} else {
			rects[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#232323";
}


function changeColors(color){
	for (var i = 0; i < rects.length; i++) {
		rects[i].style.backgroudColor = color;
	}
}

function pickColor(){
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateRandomColors(num){
	var colors = [];

	for (var i = 0; i < num; i++) {
		colors.push(randomRGB());
	}
	return colors;
}

function randomRGB(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

