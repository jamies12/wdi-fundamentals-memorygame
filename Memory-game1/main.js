// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';

// if (cardOne === cardTwo) {
//  alert('You found a match!');  
// } else {
//   alert('Sorry, try again.');
// }
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }

}
function isTwoCards () {
  cardsInPlay.push(this.getAttribute('data-card'));
  if ('data-card' === 'king') {
    document.cardElement.innerHTML = '<img src="hearts-884196_1280.png"'
  } else {
    document.cardElement.innerHTML = '<img src="spades-884203_1280.png"'
  }
  if cardsInPlay === 2 {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch() {
  if (cards[0] === cards[1]) {
  alert('You found a match!');  
} else {
  alert('Sorry, try again.');
}
createBoard ();