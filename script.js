/* cria uma lista de box que vai receber a paleta de cores */
function createPalette() {
  for (let index = 0; index < 4; index += 1) {
    const palette = document.createElement('li');
    palette.className = 'color';
    document.querySelector('#color-palette').appendChild(palette);
  }
}
createPalette();
/* preenche a paleta com cores pré definidas */
function colorPalette() {
  const color = document.querySelectorAll('.color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
  color[2].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
  color[3].style.backgroundColor = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)})`;
}
colorPalette();
/* Cria tabela em branco */
function creatColumn(box, number) {
  for (let index = 0; index < number; index += 1) {
    const cell = document.createElement('div');
    cell.className = 'pixel';
    box.appendChild(cell);
  }
}

function creatTable(number) {
  for (let index = 0; index < number; index += 1) {
    const line = document.createElement('div');
    line.style.display = 'table-row';
    line.className = 'column';
    document.querySelector('#pixel-board').appendChild(line);
    const column = document.querySelectorAll('.column');
    creatColumn(column[index], number);
  }
}
creatTable(5);
/* reseta as classes contidas na paleta de cores para que fiquem so com a classe color */
function resetClassColor() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].className = 'color';
  }
}
/* adiciona a classe selected a paleta de cores que é clicada */
function selectColor() {
  const color = document.querySelectorAll('.color')[0];
  color.classList.add('selected');
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      resetClassColor();
      event.target.classList.add('selected');
    }
  }, false);
}
selectColor();
/* colore a celula clicada */
function fillCell() {
  document.addEventListener('click', function (event) {
    const color = document.querySelector('.selected').style.backgroundColor;
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = color;
    }
  }, false);
}
fillCell();
/* limpa todo quadro com a cor branca */
function cleanFrame() {
  const button = document.querySelector('#clear-board');
  const cell = document.querySelectorAll('.pixel');
  button.addEventListener('click', function () {
    for (let index = 0; index < cell.length; index += 1) {
      cell[index].style.backgroundColor = 'white';
    }
  });
}
cleanFrame();

function setNumber(size) {
  if (size === '') {
    alert('Board inválido!');
    creatTable(5);
  } else if (size <= 5) {
    creatTable(5);
  } else if (size >= 50) {
    creatTable(50);
  } else {
    creatTable(size);
  }
}

function removePixel() {
  const pixels = document.querySelectorAll('.column');
  for (let index = 0; index < pixels.length; index += 1) {
    document.querySelectorAll('.column')[0].remove();
  }
}

function tableControls() {
  const button = document.querySelector('#generate-board');
  button.addEventListener('click', function () {
    const number = document.querySelector('#board-size');
    removePixel();
    setNumber(number.value);
    number.value = '';
  });
}
tableControls();
