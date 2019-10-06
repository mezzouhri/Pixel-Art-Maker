// Select color input

// Select size input
let valueHeight;
let valueWidth;

// When size is submitted by the user, call makeGrid()
document.querySelectorAll("input")[2].addEventListener('click', makeGrid);
document.querySelector("#pixelCanvas").addEventListener('click', colorGrid);

function makeGrid(evt) {
    // Your code goes here!
    // Select color input
    // Select size input
    valueHeight = document.getElementById('inputHeight').value;
    valueWidth = document.getElementById('inputWidth').value;


    const docFragement = document.createDocumentFragment();
    const tablecanvas = document.getElementById('pixelCanvas');
    tablecanvas.innerHTML = "";
    for(i=1; i<=valueHeight; i++){
        let trElement = document.createElement('tr');
        
        for(let j=1; j<=valueWidth; j++){
            let tdElement = document.createElement('td');
            trElement.appendChild(tdElement);
        }
        docFragement.appendChild(trElement);
    }
    tablecanvas.appendChild(docFragement);
    evt.preventDefault();
  }

  function colorGrid(evt){
      if(evt.target.nodeName === 'TD')
        evt.target.style.backgroundColor = document.getElementById('colorPicker').value;
  }
  