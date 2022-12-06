// GAME SWITCH
let gameOn = true;

// RESTART BUTTON
document.querySelector("#restart").addEventListener("click", () => {
    // Clear board
    document.querySelectorAll(".board div").forEach((element) => {
        element.innerHTML = "";
        document.querySelector("#gameResult").innerHTML = "";
        gameOn = true;
    });
});

// WHO'S TURN IS IT
let turn = "X";
function showTurn() {
    //update html turn
    document.querySelector("#turn").innerHTML = `It's ${turn}'s move`
}
// MAIN FUNCTIONALLITY

//select every cell
document.querySelectorAll(".board div").forEach((element) => {
    //give each one its own eventListner and function
    element.addEventListener("click", () => {
    // conditional to turn the game on or off
    if (gameOn) {
        //check if cell is empty
        if (element.innerHTML === "") {
            //change empty cell for current turn
            element.innerHTML = turn;
            //change turn accordingly
            turn === "O" ? (turn = "X") : (turn = "O");
        }
        //check if last move won
        checkWin();
        //update turn
        showTurn()
    }
});
});

//FUNCTION TO CHECK FOR WINNING OR TIED CONDITIONS
function checkWin(cell) {
    // SHORTCUTS TO CELLS
    let a1 = document.querySelector("#a1").innerHTML;
    let a2 = document.querySelector("#a2").innerHTML;
    let a3 = document.querySelector("#a3").innerHTML;
    let b1 = document.querySelector("#b1").innerHTML;
    let b2 = document.querySelector("#b2").innerHTML;
    let b3 = document.querySelector("#b3").innerHTML;
    let c1 = document.querySelector("#c1").innerHTML;
    let c2 = document.querySelector("#c2").innerHTML;
    let c3 = document.querySelector("#c3").innerHTML;
    // conditional to check for winning conditions
    if (
        (a1 === a2 && a2 === a3 && a1 !== "") ||
        (b1 === b2 && b2 === b3 && b1 !== "") ||
        (c1 === c2 && c2 === c3 && c1 !== "") ||
        (a1 === b1 && b1 === c1 && a1 !== "") ||
        (a2 === b2 && b2 === c2 && a2 !== "") ||
        (a3 === b3 && b3 === c3 && a3 !== "") ||
    (a1 === b2 && b2 === c3 && a1 !== "") ||
    (a3 === b2 && b2 === c1 && a3 !== "")
    ) {
        // if there's a winning condition
        //show last move as winner
        turn === "O" ? (turn = "X") : (turn = "O");
        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;
        //stop the game
        gameOn = false;
    } else if (
        //check for completed board
        (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) !== ""
        ) {
        // show tie result
        document.querySelector("#gameResult").innerHTML = "It's a TIE!";
        gameOn = false;
        //dont show turn
        document.querySelector("#turn").style.display ='none' ;

        }
    }
    
    //Run show turn to see first move
    showTurn()