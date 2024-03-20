const gridContainer = document.querySelector("#container");
const colorPicker = document.querySelector("#colorPicker");
let isMouseDown = false;
let isRightMouseDown = false;

gridContainer.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

gridContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement("div");
        gridContainer.appendChild(gridSquare);
    }
}

let gridSquares = document.querySelectorAll("#container div");

for (const gridSquare of gridSquares) {
    gridSquare.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
            gridSquare.style.backgroundColor = colorPicker.value;
            isMouseDown = true;
        }
        else if (e.button === 2) {
            gridSquare.style.backgroundColor = "#ffffff";
            isRightMouseDown = true;
        }
        
    });
    gridSquare.addEventListener("mouseover", () => {
        if (isMouseDown) {
            gridSquare.style.backgroundColor = colorPicker.value;
        }
        if (isRightMouseDown) {
            gridSquare.style.backgroundColor = "#ffffff";
        }
    });
    gridSquare.addEventListener("mouseup", () => {
        isMouseDown = false;
        isRightMouseDown = false;
    });
}

