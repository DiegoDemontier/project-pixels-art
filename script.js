window.onload = (function () {
  // cria uma lista de box que vai receber a paleta de cores
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
    color[1].style.backgroundColor = 'yellow';
    color[2].style.backgroundColor = 'blue';
    color[3].style.backgroundColor = 'red';
  }
  colorPalette();
  /* cria as divs pai das linhas da tabelas */
  function tableRow() {
    for (let index = 0; index < 5; index += 1) {
      const row = document.createElement('div');
      row.className = 'row';
      row.style.display = 'table-row';
      document.querySelector('#pixel-board').appendChild(row);
    }
  }
  tableRow();
  /* cria as colunas da tabela */
  function boxRow(box) {
    for (let index = 0; index < 5; index += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      box.appendChild(cell);
    }
  }
  /* cria as linhas da table */
  function createLine() {
    const row = document.querySelectorAll('.row');
    for (let index = 0; index < 5; index += 1) {
      boxRow(row[index]);
    }
  }
  createLine();
  /* reseta as classes colors selected nao utilizada para colors */
  function resetClassColor() {
    const color = document.querySelectorAll('.color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].className = 'color';
    }
  }
  /* adiciona a classe selected a paleta de cores que é clicada */
  function selectColor() {
    const color = document.querySelectorAll('.color')[0];
    color.className = 'color selected';
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('color')) {
        resetClassColor();
        event.target.className = 'color selected';
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
    const cell = document.querySelectorAll('.pixel')
    button.addEventListener('click', function() {
      for (let index = 0; index < cell.length; index += 1) {
        cell[index].style.backgroundColor = 'white';
      }
    })
  }
  cleanFrame();
 

});
