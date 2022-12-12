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
  board.forEach((element) => {
    element.innerHTML = "";

    result.innerHTML = "";
    element.style.color = "black";
    gameOn = true;
    didBotPlay = true;
    turn = "X";
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

        // UNCOMMENT TO PLAY AGAINST A RANDOM BOT

        didBotPlay = false;
        setTimeout(function () {
          randomMove();
        }, Math.floor(Math.random() * 1200) + 400);
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
  if (turn === "X") {
    document.querySelector("#gameResult").innerHTML = `You won! `;
  } else if (turn === "O") {
    document.querySelector("#gameResult").innerHTML = `You loose! `;
  }
  winners.forEach((e) => (e.style.color = "limegreen"));
  gameOn = false;
  myTurn.innerHTML = "";
}
//Run show turn to see first move
showTurn();
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
//THIS FUNCTION DOES THE STEPS NECCESARY AFTER DOING THE ACTUAL MOVE
function afterMove() {
checkWin();
changeTurns();
didBotPlay = true;
}
// PLACES A BOT MOVE
function botMove(place) {
  if (gameOn) {
    if (isThereAWin()) {
        botWin(isThereAWin());
        afterMove()
    } else if (isThereABlock()) {
        botBlock(isThereABlock());
      afterMove()
    } else if (document.querySelector(`#${place}`).innerHTML === "") {
      document.querySelector(`#${place}`).innerHTML = turn;
      afterMove()
    } else {
      randomMove();
    }
  }
}

// A FUNCTION THAT CHECKS IF THERE IS A WINNING MOVE
function isThereAWin() {
  let a1 = document.querySelector("#a1").innerHTML;
  let a2 = document.querySelector("#a2").innerHTML;
  let a3 = document.querySelector("#a3").innerHTML;
  let b1 = document.querySelector("#b1").innerHTML;
  let b2 = document.querySelector("#b2").innerHTML;
  let b3 = document.querySelector("#b3").innerHTML;
  let c1 = document.querySelector("#c1").innerHTML;
  let c2 = document.querySelector("#c2").innerHTML;
  let c3 = document.querySelector("#c3").innerHTML;

  //THIS MESS LOOKS IF THERE IS A BOT'S WINNING MOVE, HUGE CONDITIONAL THAT SHOULD NOT EXIST
  switch (true) {
    case a1 === "" &&
      ((a2 === "O" && a3 === "O") ||
        (b1 === "O" && c1 === "O") ||
        (b2 === "O" && c3 === "O")):
      return "a1";

    case a3 === "" &&
      ((a2 === "O" && a1 === "O") ||
        (b3 === "O" && c3 === "O") ||
        (b2 === "O" && c1 === "O")):
      return "a3";

    case c1 === "" &&
      ((c2 === "O" && c3 === "O") ||
        (b1 === "O" && a1 === "O") ||
        (b2 === "O" && a3 === "O")):
      return "c1";

    case c3 === "" &&
      ((c2 === "O" && c1 === "O") ||
        (b3 === "O" && a3 === "O") ||
        (b2 === "O" && a1 === "O")):
      return "c3";

    case a2 === "" &&
      ((a1 === "O" && a3 === "O") || (b2 === "O" && c2 === "O")):
      return "a2";

    case c2 === "" &&
      ((c1 === "O" && c3 === "O") || (b2 === "O" && a2 === "O")):
      return "c2";

    case b1 === "" &&
      ((b2 === "O" && b3 === "O") || (a1 === "O" && c1 === "O")):
      return "b1";

    case b3 === "" &&
      ((b2 === "O" && b1 === "O") || (a3 === "O" && c3 === "O")):
      return "b3";

    case b2 === "" &&
      ((a1 === "O" && c3 === "O") ||
        (b1 === "O" && b3 === "O") ||
        (c1 === "O" && a3 === "O") ||
        (c2 === "O" && a2 === "O")):
      return "b2";

    default:
      return false;
  }
}

//plays the winning move for bot, given by the conditional above
function botWin(winner) {
  document.querySelector(`#${winner}`).innerHTML = turn;
}

function isThereABlock() {
  let a1 = document.querySelector("#a1").innerHTML;
  let a2 = document.querySelector("#a2").innerHTML;
  let a3 = document.querySelector("#a3").innerHTML;
  let b1 = document.querySelector("#b1").innerHTML;
  let b2 = document.querySelector("#b2").innerHTML;
  let b3 = document.querySelector("#b3").innerHTML;
  let c1 = document.querySelector("#c1").innerHTML;
  let c2 = document.querySelector("#c2").innerHTML;
  let c3 = document.querySelector("#c3").innerHTML;

  //THIS MESS LOOKS IF THERE IS A PLAYERS WINNING MOVE, HUGE CONDITIONAL THAT SHOULD NOT EXIST
  switch (true) {
    case a1 === "" &&
      ((a2 === "X" && a3 === "X") ||
        (b1 === "X" && c1 === "X") ||
        (b2 === "X" && c3 === "X")):
      return "a1";

    case a3 === "" &&
      ((a2 === "X" && a1 === "X") ||
        (b3 === "X" && c3 === "X") ||
        (b2 === "X" && c1 === "X")):
      return "a3";

    case c1 === "" &&
      ((c2 === "X" && c3 === "X") ||
        (b1 === "X" && a1 === "X") ||
        (b2 === "X" && a3 === "X")):
      return "c1";

    case c3 === "" &&
      ((c2 === "X" && c1 === "X") ||
        (b3 === "X" && a3 === "X") ||
        (b2 === "X" && a1 === "X")):
      return "c3";

    case a2 === "" &&
      ((a1 === "X" && a3 === "X") || (b2 === "X" && c2 === "X")):
      return "a2";

    case c2 === "" &&
      ((c1 === "X" && c3 === "X") || (b2 === "X" && a2 === "X")):
      return "c2";

    case b1 === "" &&
      ((b2 === "X" && b3 === "X") || (a1 === "X" && c1 === "X")):
      return "b1";

    case b3 === "" &&
      ((b2 === "X" && b1 === "X") || (a3 === "X" && c3 === "X")):
      return "b3";

    case b2 === "" &&
      ((a1 === "X" && c3 === "X") ||
        (b1 === "X" && b3 === "X") ||
        (c1 === "X" && a3 === "X") ||
        (c2 === "X" && a2 === "X")):
      return "b2";

    default:
      return false;
  }
}
//a function to block the players winning move
function botBlock(place) {
    document.querySelector(`#${place}`).innerHTML = turn;
}
