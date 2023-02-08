const canvas = document.getElementById('main-container');
const slider = document.getElementById('slide');
const output = document.getElementById('value');
const rainbowBtn = document.getElementById('rainbow-btn');

setCanvas(16); // Has to run first to set the canvas default (16x16)
output.textContent = `${slider.value} x ${slider.value}` ;

slider.oninput = function() { // ".oninput": method that listen for a user's input as an event
    output.textContent = `${this.value} x ${this.value}` ;
}

var px = slider.value 

slider.addEventListener('mouseup', function() { 
    px = slider.value
    resetCanvas(px) ;
});  



 
function setCanvas(px){ // The setGrid() & addDiv() functions in sequence.
    setGrid(px);
    addDiv(px);
}

function resetCanvas(px){ // The removeDiv(), resetGrid() and setCanvas() functions in sequence.
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

function removeDiv(){ // Resets the grid by removing all the <div> elements in the canvas.
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

function randomColor(){ // Returns a random rbg color value.
    function randomRgbValue(){
        // Math.floor rounds any decimal number to the closest whole number
        // Math.random produces a random float between 0 and 1
        return (Math.floor(Math.random() * 255)) 
    }
    return (`rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`) 
}


/*--------------- TESTING AREA ------------------*/











