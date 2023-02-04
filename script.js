const mainContainer = document.getElementById('main-container');
const createDiv = document.createElement('div')
mainContainer.setAttribute("style", 'display: grid; grid-template-rows: repeat(16, 33.75px) ; grid-template-columns: repeat(16, 33.75px) ;')

function addDiv(x){
    for (let i = 0 ; i < (x * x) ; i++ ){
    let createDiv = document.createElement('div')
    createDiv.style.backgroundColor = 'blue'
    createDiv.style.width = 'auto'
    createDiv.style.height = 'auto'
    mainContainer.appendChild(createDiv);
    }
}

/* const gridSize = A variable that determines the square dimension of container 
(16x16 to start) */

/* function determinePxSize() {
    A function that'll take our gridSize and determine the dimensions for each <div>
    to have in order to evenly fill the mainContainer (the canvas)
    Ex)
        On a 16x16 grid with our canvas being 540x540px each <div> would have to be...
        
} */

/*function addDiv(){
    for (let i=0; i <= 32 ; i++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', ' flex: 1; border:solid red 2px; width: 33.75px; height: 33.75px;')
    mainContainer.appendChild(newDiv);
    console.log('add') }
}*/

addDiv(16)
