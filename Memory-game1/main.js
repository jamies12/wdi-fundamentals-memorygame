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
    board.appendChild(cardElement);
  }

}
function isTwoCards () {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card')) === 'king' {
    this.innerHTML = '<img src="https://s-media-cache-ak0.pinimg.com/236x/62/c7/78/62c77858f718a5298f4d8cb3ad407b43.jpg"'
  } else {
    this.innerHTML = '<img src="https://s-media-cache-ak0.pinimg.com/564x/9f/1a/e4/9f1ae4bc1c344873907920bd6eb8c407.jpg"'
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