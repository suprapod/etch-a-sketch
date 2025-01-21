const container = document.querySelector("#etchbox")
gridMaker (16)


function gridMaker(userinput) {

    container.innerHTML = ""

    for (let i = 0; i < userinput; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        for (let j = 0; j < userinput; j++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid grey";
            column.appendChild(row);
        }

        container.appendChild(column);
        console.log("All grids loaded.");
    }

    const gridrows = document.querySelectorAll(".row")

    gridrows.forEach(row => {
        row.addEventListener("mouseover", function() {
            row.style.background = "black";
        })
    })
}

function getUserInput() {
    const userInput = prompt("Choose the number of squares per side for the grid, the maximum beeing 100.")

    if (userInput > 100 || isNaN(userInput)) {
        alert("You need to enter a number between 1 and 100.")
        return getUserInput();
    }
    gridMaker(userInput)
}

const askbutton = document.querySelector("#askbtn")

askbutton.addEventListener("click", getUserInput);