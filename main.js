const restartBtn = document.querySelector('#restart');
const myTurn = document.querySelector('#turn');
const board = document.querySelectorAll('.board div');
const result = document.querySelector('#gameResult');
// const play = document.querySelector('.gameboard')


// let cells = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
// console.log(cells)

let gameOn = true;
let turn = "X";


// function restarT() {
restartBtn.addEventListener("click", () => {
    board.forEach(element => {
        element.innerHTML = "";

        result.innerHTML = "";
        element.style.color = 'black'
        gameOn = true;
        // letsPlay();
    });
});
//}

// function letsPlay(){
//   play.innerHTML = "Let's play!"
// }

function showTurn() {
    myTurn.innerHTML = `It is ${turn}'s move`
}

//Main Functionality
board.forEach(element => {
    element.addEventListener("click", () => {
        if (gameOn) {
            if (element.innerHTML === "") {
                element.innerHTML = turn;
                turn === "O" ? (turn = "X") : (turn = "O");

            }
            checkWin();
            // letsPlay();
            showTurn()
        }
    });
});


//Winning conditions
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

    if (a1 === a2 && a2 === a3 && a1 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");
        // winners = ['a1', 'a2', 'a3']
        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;
        // winners.forEach(e => document.getElementById(`${e}`).style.color = 'limegreen');

        document.getElementById('a1').style.color = 'limegreen';
        document.getElementById('a2').style.color = 'limegreen';
        document.getElementById('a3').style.color = 'limegreen';
        gameOn = false;

    } else if (b1 === b2 && b2 === b3 && b1 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");
        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;

        document.getElementById('b1').style.color = 'limegreen';
        document.getElementById('b2').style.color = 'limegreen';
        document.getElementById('b3').style.color = 'limegreen';
        gameOn = false;

    } else if (c1 === c2 && c2 === c3 && c1 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");

        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;

        document.getElementById('c1').style.color = 'limegreen';
        document.getElementById('c2').style.color = 'limegreen';
        document.getElementById('c3').style.color = 'limegreen';
        gameOn = false;



    } else if (a1 === b1 && b1 === c1 && a1 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");

        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;

        document.getElementById('a1').style.color = 'limegreen';
        document.getElementById('b1').style.color = 'limegreen';
        document.getElementById('c1').style.color = 'limegreen';
        gameOn = false;

    } else if (a2 === b2 && b2 === c2 && a2 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");

        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;

        document.getElementById('a2').style.color = 'limegreen';
        document.getElementById('b2').style.color = 'limegreen';
        document.getElementById('c2').style.color = 'limegreen';
        gameOn = false;

    } else if (a3 === b3 && b3 === c3 && a3 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");
        winners = ['a3', 'b3', 'c3']
        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;
        winners.forEach(e => document.getElementById(`${e}`).style.color = 'limegreen');
        gameOn = false;

    } else if (a1 === b2 && b2 === c3 && a1 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");
        winners = ['a1', 'b2', 'c3']
        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;
        winners.forEach(e => document.getElementById(`${e}`).style.color = 'limegreen');
        gameOn = false;

    } else if (a3 === b2 && b2 === c1 && a3 !== "") {
        turn === "O" ? (turn = "X") : (turn = "O");
        winners = ['a3', 'b2', 'c1']
        document.querySelector("#gameResult").innerHTML = `${turn}'s Win! `;
        winners.forEach(e => document.getElementById(`${e}`).style.color = 'limegreen');
        gameOn = false;





        //stop the game
        gameOn = false;
    } else if ((a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) !== "") {
        // show tie result
        document.querySelector("#gameResult").innerHTML = "It's a DRAW!";
        gameOn = false;
        //dont show turn
        document.querySelector("#turn").style.display = 'none';

    }
}

//Run show turn to see first move
showTurn()


