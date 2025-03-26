function createGrid(column, row){

    const createDiv = document.querySelector("div");
    for(let i = 1; i < row * column; i++) {
        const div = document.createElement('div');
        createDiv.appendChild(div);
    }
}

createGrid(16,16)