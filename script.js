const canvas = document.getElementById('main-container');
const slider = document.getElementById('grid-range');
const output = document.getElementById('value');


let px = 8; 

output.textContent = slider.value ;
slider.oninput = function() {
    output.textContent = this.value ;
}


/* function runProgram(){
    console.log('runProgram() invoked')

     slider.addEventListener('mouseup', () => {
        resetGrid();
        removeDiv();
        setGrid(slider.value);
        addDiv(slider.value);
        console.log('slider "mouseup" event')
    }) 
} */

function setGrid(px){ // Sets the CSS Grid size/dimensions for the canvas, canvas.
    canvas.setAttribute('style', `grid-template-rows: repeat(${px}, auto); grid-template-columns: repeat(${px}, auto);`)
    return console.log('setGrid() invoked');
}

function addDiv(px){// Creates & adds the <div>s to fill the canvas, canvas.
    for (let i = 0 ; i < (px * px) ; i++ ){
    let createDiv = document.createElement('div')
    createDiv.style.backgroundColor = 'white'
    createDiv.classList.add('canvas-px')
    createDiv.style.width = 'auto'
    createDiv.style.height = 'auto'
    canvas.appendChild(createDiv);
    }
    return console.log('addDiv() invoked');
}

function resetGrid(){ // Resets the CSS grid by changing the 'style' properties to their original.
    canvas.setAttribute('style', `grid-template-rows: repeat(8, auto); grid-template-columns: repeat(8, auto);`)
    return console.log('resetGrid() invoked')
}

function removeDiv(px){ // Resets the grid by removing all created pxs
    const canvasPxs = document.querySelectorAll('.canvas-px');
    canvasPxs.forEach((canvasPx) => {
        canvasPx.remove();
    });     
    return console.log('removeDiv() invoked')
}



/*----------- TESTING AREA ------------------*/
    // Testing functions in this area

setGrid(px);
addDiv(px);

let canvasPxs = document.querySelectorAll('.canvas-px');
canvasPxs.forEach((canvasPx) => 
canvasPx.addEventListener('mouseover', () => {
    canvasPx.setAttribute('style', 'background-color: red;');
} ));

