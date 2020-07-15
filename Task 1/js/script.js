'use strict'

let currentLength = 100;

const tiles = [];;
for (let i = 0; i < currentLength; i++) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tiles.push(tile)
}

// console.log(tiles);

document.querySelector('.container').append(...tiles);

let colorTime = setInterval(() => {
  const randomColor =`rgb(${~~(Math.random() * 256)},${~~(Math.random() * 256)},${~~(Math.random() * 256)}`
  const randomIndex = ~~(Math.random() * currentLength);
debugger
  tiles[randomIndex].style.backgroundColor = randomColor;
  // Удалить єлемент из колекции

  if (currentLength > 0) {
    currentLength--;
  } else {
    clearInterval(colorTime);
  }
});