const restartBtn = document.querySelector("#restart");
const myTurn = document.querySelector("#turn");
const board = document.querySelectorAll(".board div");
const result = document.querySelector("#gameResult");
const botTurn = document.querySelector("#bot");

let gameOn = true;
let turn = "X";
let didBotPlay = true;
// function restarT() {
restartBtn.addEventListener("click", () => {
  showTurn();
  // clears every cell
  board.forEach((element) => {
    element.innerHTML = "";

    result.innerHTML = "";
    element.style.color = "black";
    gameOn = true;
    didBotPlay = true;
    document.querySelector("#turn").style.display = "";
  });
});

//Main Functionality
board.forEach((element) => {
  element.addEventListener("click", () => {
    if (gameOn && didBotPlay) {
      if (element.innerHTML === "") {
        element.innerHTML = turn;
        checkWin();
        if (gameOn) {
          changeTurns();
          showTurn();
        }
      }
    }
  });
});

//Winning conditions
function checkWin() {
  // SHORTCUTS TO VALUES
  let a1 = document.querySelector("#a1").innerHTML;
  let a2 = document.querySelector("#a2").innerHTML;
  let a3 = document.querySelector("#a3").innerHTML;
  let b1 = document.querySelector("#b1").innerHTML;
  let b2 = document.querySelector("#b2").innerHTML;
  let b3 = document.querySelector("#b3").innerHTML;
  let c1 = document.querySelector("#c1").innerHTML;
  let c2 = document.querySelector("#c2").innerHTML;
  let c3 = document.querySelector("#c3").innerHTML;

  //SHORTCUTS TO CELLS
  let a1C = document.querySelector("#a1");
  let a2C = document.querySelector("#a2");
  let a3C = document.querySelector("#a3");
  let b1C = document.querySelector("#b1");
  let b2C = document.querySelector("#b2");
  let b3C = document.querySelector("#b3");
  let c1C = document.querySelector("#c1");
  let c2C = document.querySelector("#c2");
  let c3C = document.querySelector("#c3");

  // conditional to check for winning conditions
  if (b1 === b2 && b2 === b3 && b1 !== "") {
    showWinnerSet(b1C, b2C, b3C);
  } else if (c1 === c2 && c2 === c3 && c1 !== "") {
    showWinnerSet(c1C, c2C, c3C);
  } else if (a1 === b1 && b1 === c1 && a1 !== "") {
    showWinnerSet(a1C, b1C, c1C);
  } else if (a2 === b2 && b2 === c2 && a2 !== "") {
    showWinnerSet(a2C, b2C, c2C);
  } else if (a3 === b3 && b3 === c3 && a3 !== "") {
    showWinnerSet(a3C, b3C, c3C);
  } else if (a1 === b2 && b2 === c3 && a1 !== "") {
    showWinnerSet(a1C, b2C, c3C);
  } else if (a3 === b2 && b2 === c1 && a3 !== "") {
    showWinnerSet(a3C, b2C, c1C);
  } else if (a1 === a2 && a2 === a3 && a1 !== "") {
    showWinnerSet(a1C, a2C, a3C);
  } //IN CASE OF DRAW
  else if ((a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) !== "") {
    // show tie result
    document.querySelector("#gameResult").innerHTML = "It's a DRAW!";
    gameOn = false;
    //dont show turn
    document.querySelector("#turn").style.display = "none";
  }
}
// CHANGE COLORS ON WIN
function showWinnerSet(first, second, third) {
  winners = [first, second, third];
  document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;
  winners.forEach((e) => (e.style.color = "limegreen"));
  gameOn = false;
  myTurn.innerHTML = "";
}
//Run show turn to see first move
showTurn();
function showTurn() {
  myTurn.innerHTML = `It is ${turn}'s move`;
}
//CHANGES TURN VALUE AND DISPLAY
function changeTurns() {
  turn === "X" ? (turn = "O") : (turn = "X");
  showTurn();
}
