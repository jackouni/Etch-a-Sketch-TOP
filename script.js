/* ---- VARIABLES & ELEMENT SELECTIONS */

const canvas = document.getElementById('canvas-container');

const lowerContainer = document.getElementById('lower-container')
const slider = document.getElementById('slide');
const output = document.getElementById('value');

const rainbowBtn = document.getElementById('rainbow-btn'); 

const colorBtn = document.getElementById('color-btn');
const colorInput = document.getElementById('input-color');

const eraserBtn = document.getElementById('eraser-btn');
const resetBtn = document.getElementById('reset-btn');

const audioTrack = document.querySelector('audio') ;
const audioButtons = document.getElementsByClassName('audio-btn')
const speakerOn = document.getElementById('speaker-on')
const speakerOff = document.getElementById('speaker-off')

const infoModal = document.getElementById('info-modal')
const infoIcon = document.getElementById('info-icon-container')
const xIcon = document.getElementById('x-icon')


/* ------ DEFAULT/INITIAL VALUES ----- */

// Global variables to set default states and to track the state 
var px = slider.value
var colorPickerActive = true
var rainbowActive = false
var eraserActive = false
var audioActive = true

// Sets the default color of 'blue' 
let color = "#0000ff"

// Sets initial canvas default size (16x16)
setCanvas(16);

// Sets the default output text for the canvas size
output.textContent = `${16} x ${16}` ;

// Sets the default position of the slider
slider.value = 16 ; 

// Sets the default color input value
colorInput.value = color

// Sets initial pen color
handleColorEvent(color);

// Sets the audio volume for our page
audioTrack.volume = 0.075


/* ------ EVENT LISTENERS -------------*/

// ".oninput": method that listen for a user's input as an event
slider.oninput = function() { 
    output.textContent = `${this.value} x ${this.value}` ;
}

slider.addEventListener('mouseup', function() { 
    px = slider.value
    resetCanvas(px) ;
});

rainbowBtn.addEventListener('click', function(){
    colorPickerActive = false
    rainbowActive = true
    eraserActive = false

    handleRainbowEvent();
})

eraserBtn.addEventListener('click', function(){
    colorPickerActive = false
    rainbowActive = false
    eraserActive = true

    handleEraseEvent();
})

colorInput.addEventListener('click', function(){
    colorPickerActive = true
    rainbowActive = false
    eraserActive = false
    color = colorInput.value

    handleColorEvent(color);
})

colorInput.addEventListener('input', function(){
    colorPickerActive = true
    rainbowActive = false
    eraserActive = false
    color = colorInput.value

   handleColorEvent(color);
})

resetBtn.addEventListener('click', function(){ 
    resetCanvas(px) 
});

speakerOn.addEventListener('click', function() {
    console.log("Speaker clicked (on - off)")
    audioActive = false
    audioTrack.volume = 0
    speakerOn.setAttribute('style', 'display: none;')
    speakerOff.setAttribute('style', 'display: block;')
})

speakerOff.addEventListener('click', function() {
    console.log("Speaker clicked (off - on)")
    audioActive = true
    audioTrack.volume = 0.075
    speakerOn.setAttribute('style', 'display: block;')
    speakerOff.setAttribute('style', 'display: none;')
})

infoIcon.addEventListener('click', function() {
    console.log('info icon clicked')
    infoModal.setAttribute('style', 'display: block;');
    xIcon.setAttribute('style', 'display: block;')
})

xIcon.addEventListener('click', function() {
    console.log('x-icon clicked')
    infoModal.setAttribute('style', 'display: none;');
    xIcon.setAttribute('style', 'display: none;')
})


/* ------ FUNCTIONS -----------------*/

// Adds event listeners to all the <div> elements in the canvas.
    function handleColorEvent(){
        let canvasPxs = document.querySelectorAll('.canvas-px');
        canvasPxs.forEach((canvasPx) => 
        canvasPx.addEventListener('mouseover', () => {
            canvasPx.setAttribute('style', `background-color: ${color};`);
        }));
        console.log('handleDrawEvent() invoked')
}

// The setGrid(), addDiv() & handleDrawEvent functions in sequence.
    function setCanvas(px){
        setGrid(px);
        addDiv(px);
        color = colorInput.value
        if (rainbowActive == true){
            return handleRainbowEvent();
        } else if (eraserActive == true){
            return handleEraseEvent();
        } else if (colorPickerActive == true){
            return handleColorEvent(color);
        }
}

// The removeDiv(), resetGrid() and setCanvas() functions in sequence.
    function resetCanvas(px){
        removeDiv(px);
        resetGrid();
        setCanvas(px);
}

// Sets the CSS Grid dimensions for the canvas.
    function setGrid(px){
        canvas.setAttribute('style', `grid-template-rows: repeat(${px}, auto); grid-template-columns: repeat(${px}, auto);`)
        return console.log('setGrid() invoked');
}

// Creates <div> elements that fill the canvas' CSS grid dimensions.
    function addDiv(px){ 
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

// Resets the CSS grid by changing the 'style' properties to their original state.
    function resetGrid(){ 
        canvas.setAttribute('style', `grid-template-rows: repeat(8, auto); grid-template-columns: repeat(8, auto);`)
        return console.log('resetGrid() invoked')
}

// Resets the grid by removing all the <div> elements in the canvas.
    function removeDiv(){
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

// Adds event listeners to all the <div> elements in the canvas.
    function handleDrawEvent(){
        var colorPickerActive = true
        var rainbowActive = false
        var eraserActive = false

        let canvasPxs = document.querySelectorAll('.canvas-px');
        canvasPxs.forEach((canvasPx) => 
        canvasPx.addEventListener('mouseover', () => {
            canvasPx.setAttribute('style', 'background-color: black;');
        }));
        console.log('handleDrawEvent() invoked')
}

// Returns a random rbg color value - this function is used for 'rainbow mode'.
    function randomColor(){
        // Returns a random int between 0 and 255 (the range for rgb values)
        function randomRgbValue(){
            // Math.floor rounds any decimal number to the closest whole number
            // Math.random produces a random float between 0 and 1
            return (Math.floor(Math.random() * 255)) 
        }
        return (`rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`) 
}

// Adds 'mouseover' event listeners to all the <div> elements that generates a random color
    function handleRainbowEvent(){
        let canvasPxs = document.querySelectorAll('.canvas-px');
        canvasPxs.forEach((canvasPx) => 
        canvasPx.addEventListener('mouseover', () => {
            canvasPx.setAttribute('style', `background-color: ${randomColor()};`);
        }));
        console.log('handleRainbowEvent() invoked')
}

// Adds 'mouseover' event listeners to all the <div> elements that changes background-color to white
    function handleEraseEvent(){
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










