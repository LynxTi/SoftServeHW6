'use strict'

let currentLength = 100;

let tiles = [];;
for (let i = 0; i < currentLength; i++) {
  let tile = document.createElement('div');

  tile.className = 'tile';
  tiles.push(tile)
}

document.querySelector('.container').append(...tiles);
const endMenu = document.querySelector('.endMenu')

let colorTime = setInterval(() => {
  const randomColor =`rgb(${~~(Math.random() * 256)},${~~(Math.random() * 256)},${~~(Math.random() * 256)}`
  const randomIndex = ~~(Math.random() * currentLength);
  const tile = tiles[randomIndex];

  tile.style.backgroundColor = randomColor;
  
  if (currentLength - 1 > 0) {
    tiles = [...tiles].filter((elem) => elem !== tile);
    currentLength--;
  } else {
    endMenu.style.display = 'block';
    clearInterval(colorTime);
  }
}, 100);