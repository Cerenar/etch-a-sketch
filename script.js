const gridContainer = document.querySelector("#container");
let isMouseDown = false;

gridContainer.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement("div");
        gridContainer.appendChild(gridSquare);
    }
}

let gridSquares = document.querySelectorAll("#container div");

for (const gridSquare of gridSquares) {
    gridSquare.addEventListener("mousedown", () => {
        gridSquare.style.backgroundColor = "grey";
        isMouseDown = true;
    });
    gridSquare.addEventListener("mouseover", () => {
        if (isMouseDown) {
            gridSquare.style.backgroundColor = "grey";
        }
    });
    gridSquare.addEventListener("mouseup", () => {
        isMouseDown = false;
    });
}

