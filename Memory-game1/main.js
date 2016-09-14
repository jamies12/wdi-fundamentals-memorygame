var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";

//if (cardOne == cardTwo) {
//	alert ("You found a match!")
//} else if (cardThree == cardFour) {
//	alert ("You found a match!")
//} else if (cardOne == !cardTwo) {
//	alert ("Sorry, try again")
//} else if (cardThree == !cardFour) {
//	alert ("Sorry, try again")
//}
var board = document.getElementById("game-board");
function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement("div");
		cardElement.classname = 'card';
		board.appendChild(cardElement);
	}
}