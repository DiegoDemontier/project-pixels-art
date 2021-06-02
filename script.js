window.onload = (function () {

  // cria uma lista de box que vai receber a paleta de cores
  function palette () {
    for (let index = 0; index < 4; index += 1) {
      let palette = document.createElement('li');
      palette.className = 'color';
      document.querySelector('#color-palette').appendChild(palette);
    }
  }
  palette();

  //preenche a paleta com cores pré definidas
  function colorPalette() {
    let colorPalette = document.querySelectorAll('.color');
    colorPalette[0].style.backgroundColor = 'black';
    colorPalette[1].style.backgroundColor = 'yellow';
    colorPalette[2].style.backgroundColor = 'blue';
    colorPalette[3].style.backgroundColor = 'red';
  }
  colorPalette();


  // cria as divs pai das linhas da tabelas
  function tableRow () {
    for (let index = 0; index < 5; index += 1) {
      let tableRow = document.createElement('div');
      tableRow.className = 'row';
      tableRow.style.display = 'table-row';
      document.querySelector('#pixel-board').appendChild(tableRow);
    }
  }
  tableRow();


  // cria as linhas da tabela
  function createLine () {
    row = document.querySelectorAll('.row');
    for(let index = 0; index < 5; index += 1) {
      boxRow(row[index]);
  }
 }

 createLine();

 //cria as células da table
 function boxRow(box) {
   for (let index = 0; index < 5; index += 1) {
     let cell = document.createElement('div')
     cell.className = 'pixel';
     box.appendChild(cell)
   }
  }

  function resetClassColor () {
    let color = document.querySelectorAll('.color');
    for(let index = 0; index < color.length; index += 1) {
      color[index].className = 'color';
    }
  }

  
  function selectColor () {
    let color = document.querySelectorAll('.color')[0];
    color.className = 'color selected';
    document.addEventListener('click', function (event) {
      if ( event.target.classList.contains( 'color' ) ) {
          resetClassColor();
          event.target.className = 'color selected';
      }
  }, false);
 }
 selectColor();


 /* function initialColor() {
  

    color.addEventListener('click', function() {
      let color2 = document.querySelectorAll('.pixel')[0];
      color2.style.backgroundColor = color.style.backgroundColor;
    })
    
  }
  initialColor(); */
  
})
