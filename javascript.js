function createGrid(gridSize){
    //selects container
    const createDiv = document.querySelector(".container");

    //clears grid
    createDiv.innerHTML = '';

    //sets grid size to fit squares
    const squareSize = `${600 / gridSize}px`;

    //creates divs called gridSquare based on required input
    for(let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add("gridSquare")
        div.style.width = squareSize;
        div.style.height = squareSize;
        createDiv.appendChild(div);
    }
}

//calls default functions
let gridSize = 16;
createGrid(gridSize);
addHover();

//adds listener events for squares
function addHover(){
    document.querySelectorAll(".gridSquare").forEach(square => {
        square.addEventListener("mouseover", runMouseOver);
        square.addEventListener("mouseout", runMouseOut);
    });
}
//colours squares when moused over
function runMouseOver(e){
    e.target.style.backgroundColor = "rgb(40,40,40)"
}

//colours squares when moused leaves box
function runMouseOut(e){
    e.target.style.backgroundColor = randRGB();
}

//button clicked to create new grid
document.getElementById('btn').addEventListener('click', buttonClick);
function buttonClick(){
    let gridSize = parseInt(prompt("Input Grid Size! (Up to 100x100)"))
        if (isNaN(gridSize) || gridSize > 100 || gridSize <= 0){
            alert("Select a number between 1 and 100!");
        } else {
            createGrid(gridSize);
            addHover();
        }
}

function randRGB(){
    const min = 0;
    const max = 255;
    let randR = Math.floor(Math.random() * max - min +1) + min;
    let randG = Math.floor(Math.random() * max - min +1) + min;
    let randB = Math.floor(Math.random() * max - min +1) + min;
    return "rgb("+randR+","+randG+","+randB+")"
}