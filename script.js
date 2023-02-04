const mainContainer = document.getElementById('main-container');
let px = 16

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

function setGridSize(px){// Sets the CSS Grid size/dimensions for the canvas, mainContainer.
    mainContainer.setAttribute('style', `grid-template-rows: repeat(${px}, auto); grid-template-columns: repeat(${px}, auto);`)
}

function addDiv(px){// Creates & adds the <div>s to fill the canvas, mainContainer.
    for (let i = 0 ; i < (px * px) ; i++ ){
    let createDiv = document.createElement('div')
    createDiv.style.backgroundColor = 'blue'
    createDiv.classList.add('canvas-px')
    createDiv.style.width = 'auto'
    createDiv.style.height = 'auto'
    mainContainer.appendChild(createDiv);
    }
}




runProgram()
