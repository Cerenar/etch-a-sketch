const gridContainer = document.querySelector("#container");
const colorPicker = document.querySelector("#colorPicker");
const gridSizer = document.querySelector("#gridSizer");
const gridEraser = document.querySelector("#gridEraser");
const CONTAINER_SIZE = 700;
let isMouseDown = false;
let isRightMouseDown = false;
let gridSize = 16;
createGrid(gridSize);

gridContainer.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

gridContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

gridSizer.addEventListener("click", () => {
    gridSize = prompt("Grid size?");
    if(gridSize === null) return;
    while (gridSize < 4 || gridSize > 100) {
        if (gridSize === null) {
            return;
        }
        gridSize = prompt("Please select a grid size between 4 and 100.")
    }
    createGrid(gridSize);
});

gridEraser.addEventListener("click", () => {
    eraseGrid();
})

function createGrid(gridSize) {
    removeGrid();
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.style.height = CONTAINER_SIZE/gridSize + "px";
            gridSquare.style.width = CONTAINER_SIZE/gridSize + "px";
            gridContainer.appendChild(gridSquare);
        }
    }

    const gridSquares = document.querySelectorAll("#container div");
    for (const gridSquare of gridSquares) {
        gridSquare.addEventListener("mousedown", (e) => {
            if (e.button === 0) {
                gridSquare.style.backgroundColor = colorPicker.value;
                isMouseDown = true;
            }
            else if (e.button === 2) {
                gridSquare.style["background-color"] = null;
                isRightMouseDown = true;
            }
            
        });
        gridSquare.addEventListener("mouseover", () => {
            if (isMouseDown) {
                gridSquare.style.backgroundColor = colorPicker.value;
            }
            if (isRightMouseDown) {
                gridSquare.style["background-color"] = null;
            }
        });
        gridSquare.addEventListener("mouseup", () => {
            isMouseDown = false;
            isRightMouseDown = false;
        });
    }
}

function eraseGrid() {
    const gridSquares = document.querySelectorAll("#container div");
    for (const gridSquare of gridSquares) {
        gridSquare.style["background-color"] = null;
    }
}

function removeGrid() {
    while (gridContainer.children.length > 0) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}





