const canvas = document.getElementById('main-container');
const slider = document.getElementById('grid-range');
const output = document.getElementById('value');

let px = 50; 

output.textContent = slider.value ;
slider.oninput = function() {
    output.textContent = this.value ;
}

function setCanvas(px){
    setGrid(px);
    addDiv(px);
}

function resetCanvas(px){
    removeDiv(px);
    resetGrid();
    setCanvas(px);
}

function setGrid(px){ // Sets the CSS Grid dimensions for the canvas.
    canvas.setAttribute('style', `grid-template-rows: repeat(${px}, auto); grid-template-columns: repeat(${px}, auto);`)
    return console.log('setGrid() invoked');
}

function addDiv(px){ // Creates <div> elements that fill the canvas & invokes handleDrawEvent().
    for (let i = 0 ; i < (px * px) ; i++ ){
    let createDiv = document.createElement('div')
    createDiv.style.backgroundColor = 'white'
    createDiv.classList.add('canvas-px')
    createDiv.style.width = 'auto'
    createDiv.style.height = 'auto'
    canvas.appendChild(createDiv);
    } 
    handleDrawEvent();
    return console.log('addDiv() invoked');
}

function resetGrid(){ // Resets the CSS grid by changing the 'style' properties to their original state.
    canvas.setAttribute('style', `grid-template-rows: repeat(8, auto); grid-template-columns: repeat(8, auto);`)
    return console.log('resetGrid() invoked')
}

function removeDiv(px){ // Resets the grid by removing all the <div> elements in the canvas.
    const canvasPxs = document.querySelectorAll('.canvas-px');
    canvasPxs.forEach((canvasPx) => {
        canvasPx.remove();
    });     
    canvasPxs.forEach((canvasPx) => 
    canvasPx.removeEventListener('mouseover', () => {
        canvasPx.setAttribute('style', 'background-color: white;');
    })); 
    return console.log('removeDiv() invoked')
}

function handleDrawEvent(){ // Adds event listeners to all the <div> elements in the canvas.
    let canvasPxs = document.querySelectorAll('.canvas-px');
    canvasPxs.forEach((canvasPx) => 
    canvasPx.addEventListener('mouseover', () => {
        canvasPx.setAttribute('style', 'background-color: red;');
    }));
    console.log('handleDrawEvent() invoked')
}


/*--------------- TESTING AREA ------------------*/
    // Testing functions in this area

setCanvas(50);




