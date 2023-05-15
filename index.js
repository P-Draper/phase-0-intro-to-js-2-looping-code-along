const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
  const messageCards = [];
  for (let i = 0; i < cards.length; i++) {
    messageCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  }

    return messageCards;
}

writeCards(cards);

function countDown() {
  for(let i=10; i >= 0; i--){
    console.log(i);
  }
}
countDown();
