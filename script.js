const canvas = document.getElementById('main-container');
let slider = document.getElementById('grid-range');
let output = document.getElementById('value');
let px = slider.value;

output.textContent = slider.value ;

slider.oninput = function() {
    output.textContent = this.value ;
}

function runProgram(){
    setGridSize(px)
    addDiv(px)

    const canvasPxs = document.querySelectorAll('.canvas-px');
    canvasPxs.forEach((canvasPx) => {
    canvasPx.addEventListener('mouseover', () => {
        canvasPx.setAttribute('style', 'background-color: red;')
    });
    });
}

function setGridSize(px){ // Sets the CSS Grid size/dimensions for the canvas, canvas.
    canvas.setAttribute('style', `grid-template-rows: repeat(${px}, auto); grid-template-columns: repeat(${px}, auto);`)
}

function addDiv(px){// Creates & adds the <div>s to fill the canvas, canvas.
    for (let i = 0 ; i < (px * px) ; i++ ){
    let createDiv = document.createElement('div')
    createDiv.style.backgroundColor = 'blue'
    createDiv.classList.add('canvas-px')
    createDiv.style.width = 'auto'
    createDiv.style.height = 'auto'
    canvas.appendChild(createDiv);
    }
}

function resetGrid(){ // Resets the grid by removing all created pxs
    const canvasPxs = document.querySelectorAll('.canvas-px');
    canvasPxs.forEach((canvasPx) => {
        canvas.removeChild(canvasPx)
    });     
}


runProgram()
