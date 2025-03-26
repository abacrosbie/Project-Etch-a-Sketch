function createGrid(column, row){
    //selects container
    const createDiv = document.querySelector(".container");
    //creates divs called gridSquare based on required input
    for(let i = 0; i < row * column; i++) {
        const div = document.createElement('div');
        div.classList.add("gridSquare")
        createDiv.appendChild(div);
    }
}

//calls function
createGrid(16,16)

//adds listener events for squares
document.querySelectorAll(".gridSquare").forEach(square => {
    square.addEventListener("mouseover", runMouseOver);
    square.addEventListener("mouseout", runMouseOut);
});

//colours squares when moused over
function runMouseOver(e){
    e.target.style.backgroundColor = "rgb(40,40,40)"
    console.log('Event Type: ' + e.type);
}

//colours squares when moused leaves box
function runMouseOut(e){
    e.target.style.backgroundColor = "rgb(200,200,200)"
    console.log('Event Type: ' + e.type);
}