/*----- constants -----*/
var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
var deck = newArray()

const backCard = {
  blue: "images/backs/blue.svg",
  red: "images/backs/red.svg",
}
const clubs = {
  A: "images/clubs/clubs-A.svg",
  J: "images/clubs/clubs-J.svg",
  K: "images/clubs/clubs-K.svg",
  Q: "images/clubs/clubs-Q.svg",
  02: "images/clubs/clubs-r02.svg",
  03: "images/clubs/clubs-r03.svg",
  04: "images/clubs/clubs-r04.svg",
  05: "images/clubs/clubs-r05.svg",
  06: "images/clubs/clubs-r06.svg",
  07: "images/clubs/clubs-r07.svg",
  08: "images/clubs/clubs-r08.svg",
  09: "images/clubs/clubs-r09.svg",
  10: "images/clubs/clubs-r10.svg",
}
const diamonds = {
  A: "images/diamonds/diamonds-A.svg",
  J: "images/diamonds/diamonds-J.svg",
  K: "images/diamonds/diamonds-K.svg",
  Q: "images/diamonds/diamonds-Q.svg",
  02: "images/diamonds/diamonds-r02.svg",
  03: "images/diamonds/diamonds-r03.svg",
  04: "images/diamonds/diamonds-r04.svg",
  05: "images/diamonds/diamonds-r05.svg",
  06: "images/diamonds/diamonds-r06.svg",
  07: "images/diamonds/diamonds-r07.svg",
  08: "images/diamonds/diamonds-r08.svg",
  09: "images/diamonds/diamonds-r09.svg",
  10: "images/diamonds/diamonds-r10.svg",
}
const hearts = {
  A: "images/hearts/hearts-A.svg",
  J: "images/hearts/hearts-J.svg",
  K: "images/hearts/hearts-K.svg",
  Q: "images/hearts/hearts-Q.svg",
  02: "images/hearts/hearts-r02.svg",
  03: "images/hearts/hearts-r03.svg",
  04: "images/hearts/hearts-r04.svg",
  05: "images/hearts/hearts-r05.svg",
  06: "images/hearts/hearts-r06.svg",
  07: "images/hearts/hearts-r07.svg",
  08: "images/hearts/hearts-r08.svg",
  09: "images/hearts/hearts-r09.svg",
  10: "images/hearts/hearts-r10.svg",
}
const spades = {
  A: "images/spades/spades-A.svg",
  J: "images/spades/spades-J.svg",
  K: "images/spades/spades-K.svg",
  Q: "images/spades/spades-Q.svg",
  02: "images/spades/spades-r02.svg",
  03: "images/spades/spades-r03.svg",
  04: "images/spades/spades-r04.svg",
  05: "images/spades/spades-r05.svg",
  06: "images/spades/spades-r06.svg",
  07: "images/spades/spades-r07.svg",
  08: "images/spades/spades-r08.svg",
  09: "images/spades/spades-r09.svg",
  10: "images/spades/spades-r10.svg",
}



var masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;

/*----- cached element references -----*/
var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('#Hit').addEventListener('click', renderShuffledDeck);
document.querySelector('#Stay').addEventListener('click', drawCard);
document.querySelector('#Shuffle').addEventListener('click', dealerDraw);

/*----- functions -----*/
function renderShuffledDeck() {
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = 'cards';
  var cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

function buildMasterDeck() {
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        face: `${suit}${rank}`,
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

renderShuffledDeck();