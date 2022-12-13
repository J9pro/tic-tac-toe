const restartBtn = document.querySelector("#restart");
const myTurn = document.querySelector("#turn");
const board = document.querySelectorAll(".board div");
const result = document.querySelector("#gameResult");
const botTurn = document.querySelector("#bot");
const wins = document.querySelector("#wins");
const looses = document.querySelector("#looses");
const ties = document.querySelector("#ties");

let gameOn = true;
let turn = "X";
let didBotPlay = true;
let timer;

//LOCAL STORAGE W/L/T STORAGE
if (!localStorage.getItem("winEasy")) {
  localStorage.setItem("winEasy", 0);
}
if (!localStorage.getItem("looseEasy")) {
  localStorage.setItem("looseEasy", 0);
}
if (!localStorage.getItem("tiedEasy")) {
  localStorage.setItem("tiedEasy", 0);
}

showTurn();
updateScore();

// function restarT() {
restartBtn.addEventListener("click", () => {
  let a1 = document.querySelector("#a1").innerHTML;
  let a2 = document.querySelector("#a2").innerHTML;
  let a3 = document.querySelector("#a3").innerHTML;
  let b1 = document.querySelector("#b1").innerHTML;
  let b2 = document.querySelector("#b2").innerHTML;
  let b3 = document.querySelector("#b3").innerHTML;
  let c1 = document.querySelector("#c1").innerHTML;
  let c2 = document.querySelector("#c2").innerHTML;
  let c3 = document.querySelector("#c3").innerHTML;
  if (
    gameOn &&
    (a1 !== "" ||
      a2 !== "" ||
      a3 !== "" ||
      b1 !== "" ||
      b2 !== "" ||
      b3 !== "" ||
      c1 !== "" ||
      c2 !== "" ||
      c3 !== "")
  ) {
    localStorage.setItem("looseEasy", +localStorage.getItem("looseEasy") + 1);
    updateScore();
  }
  clearTimeout(timer);
  board.forEach((element) => {
    element.innerHTML = "";

    result.innerHTML = "";
    element.style.color = "black";
    gameOn = true;
    didBotPlay = true;
    turn = "X";
    myTurn.style.display = "";
  });
  showTurn();
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

        // UNCOMMENT TO PLAY AGAINST A RANDOM BOT

        didBotPlay = false;
        timer = setTimeout(() => {
          randomMove();
        }, Math.floor(Math.random() * 800) + 400);
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
    //updates localstorage score
    localStorage.setItem("tiedEasy", +localStorage.getItem("tiedEasy") + 1);
    updateScore();

    gameOn = false;

    //dont show turn
    document.querySelector("#turn").style.display = "none";
  }
}
// CHANGE COLORS ON WIN
function showWinnerSet(first, second, third) {
  winners = [first, second, third];
  if (turn === "X") {
    document.querySelector("#gameResult").innerHTML = `You won! `;
    //updates localstorage score
    localStorage.setItem("winEasy", +localStorage.getItem("winEasy") + 1);
    updateScore();
  } else if (turn === "O") {
    document.querySelector("#gameResult").innerHTML = `You loose! `;
    //updates localstorage score
    localStorage.setItem("looseEasy", +localStorage.getItem("looseEasy") + 1);
    updateScore();
  }
  winners.forEach((e) => (e.style.color = "limegreen"));
  gameOn = false;
  myTurn.innerHTML = "";
}
//Run show turn to see first move
function showTurn() {
  if (turn === "X") {
    myTurn.innerHTML = `It is your move`;
  } else if (turn === "O") {
    myTurn.innerHTML = `The bot is Thinking`;
  }
}
//CHANGES TURN VALUE AND DISPLAY
function changeTurns() {
  turn === "O" ? (turn = "X") : (turn = "O");
  showTurn();
}

// PLACES A BOT MOVE
function botMove(place) {
  if (gameOn) {
    if (document.querySelector(`#${place}`).innerHTML === "") {
      document.querySelector(`#${place}`).innerHTML = turn;
      checkWin();
      changeTurns();
      didBotPlay = true;
    } else {
      randomMove();
    }
  }
}

// RANDOM PLAYS FOR BOT
function randomMove() {
  let numb = Math.ceil(Math.random() * 9);
  switch (numb) {
    case 1:
      botMove("a1");
      break;

    case 2:
      botMove("a2");
      break;

    case 3:
      botMove("a3");
      break;

    case 4:
      botMove("b1");
      break;

    case 5:
      botMove("b2");
      break;

    case 6:
      botMove("b3");
      break;
    case 7:
      botMove("c1");
      break;

    case 8:
      botMove("c2");
      break;

    case 9:
      botMove("c3");
      break;
  }
}

//Updates the score displayed
function updateScore() {
  wins.innerHTML = localStorage.getItem("winEasy");
  looses.innerHTML = localStorage.getItem("looseEasy");
  ties.innerHTML = localStorage.getItem("tiedEasy");
}
