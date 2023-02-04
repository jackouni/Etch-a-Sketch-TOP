const mainContainer = document.getElementById('main-container');



function setGridSize(px){// Sets the CSS Grid size/dimensions for the canvas, mainContainer.
    mainContainer.setAttribute('style', `grid-template-rows: repeat(${px}px, auto) ; grid-template-columns: repeat(${px}px, auto) ;`)
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


/* function determinePxSize() {
    A function that'll take our gridSize and determine the dimensions for each <div>
    to have in order to evenly fill the mainContainer (the canvas)
    Ex)
        On a 16x16 grid with our canvas being 540x540px each <div> would have to be...
        
} */

addDiv(16)
