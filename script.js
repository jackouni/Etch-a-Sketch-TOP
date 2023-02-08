/*------ Color-Picker feature Branch -----*/

/* ----- VARIABLES & ELEMENT SELECTIONS -*/

    const canvas = document.getElementById('main-container');
    const slider = document.getElementById('slide');
    const output = document.getElementById('value');
    const rainbowBtn = document.getElementById('rainbow-btn'); 
    const colorBtn = document.getElementById('color-btn');
    const eraserBtn = document.getElementById('eraser-btn');

    var px = slider.value
    var colorPickerActive = true
    var rainbowActive = false
    var eraserActive = false


/* ----- INITIALIZING FUNCTIONS ---------*/

    setCanvas(16); // Has to run first to set the canvas default (16x16)
    handleDrawEvent(); // Has to run in order to set the 'pen' color


/* ----- POST-INITIALIZING --------------*/

    output.textContent = `${slider.value} x ${slider.value}` ; 

    slider.oninput = function() { // ".oninput": method that listen for a user's input as an event
        output.textContent = `${this.value} x ${this.value}` ;
    }

    slider.addEventListener('mouseup', function() { 
        px = slider.value
        resetCanvas(px) ;
    });
    
    rainbowBtn.addEventListener('click', function(){
        colorPickerActive = false
        rainbowActive = true
        var eraserActive = false

        handleRainbowEvent();
    })

    eraserBtn.addEventListener('click', function(){
        colorPickerActive = false
        rainbowActive = false
        var eraserActive = true

        handleEraseEvent();
    })


/* ----- FUNCTIONS ----------------------*/

    function setCanvas(px){ // The setGrid(), addDiv() & handleDrawEvent functions in sequence.
        setGrid(px);
        addDiv(px);
        if (rainbowActive == true){
            return handleRainbowEvent();
        } else if (colorPickerActive == true){
            return handleDrawEvent();
        } else if (eraserActive == true){
            return handleEraseEvent();
        }
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

    function addDiv(px){ // Creates <div> elements that fill the canvas.
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
        var colorPickerActive = true
        var rainbowActive = false
        var eraserActive = false

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

    function handleRainbowEvent(){ // Adds event listeners to all the <div> elements that generates a random color everytime
        let canvasPxs = document.querySelectorAll('.canvas-px');
        canvasPxs.forEach((canvasPx) => 
        canvasPx.addEventListener('mouseover', () => {
            canvasPx.setAttribute('style', `background-color: ${randomColor()};`);
        }));
        console.log('handleRainbowEvent() invoked')
    }

    function handleEraseEvent(){ // Adds event listeners to all the <div> elements in the canvas.
        var colorPickerActive = false
        var rainbowActive = false
        var eraserActive = true

        let canvasPxs = document.querySelectorAll('.canvas-px');
        canvasPxs.forEach((canvasPx) => 
        canvasPx.addEventListener('mouseover', () => {
            canvasPx.setAttribute('style', 'background-color: white;');
        }));
        console.log('handleDrawEvent() invoked')
    }

/* ----- TESTING & PSEUDO-CODE ----------------------*/  










