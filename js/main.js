// event listners for each cell

//function to start the game, maybe ask for a name

//maybe a function that "flips a coin" to choose who is going first

//function to let the first player play

//similar function to let the second player play

// some function to see who's turn is it, maybe some variable which changes a boolean value each time someone play

// function to check the status of the game and winner

//function to restart the game
document.querySelector("#restart").addEventListener('click', () => {
    document.querySelectorAll(".board div").forEach(element => {
        element.innerHTML = ''
    })
})

let turn = 'X'
document.querySelectorAll(".board div").forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerHTML === "") {
          element.innerHTML = turn;
          turn === "O" ? (turn = "X") : (turn = "O");
        }
        checkWin()
    })
})



// document.getElementById(".a1").addEventListener('click',playerX)

let playerX = 'X'
let playerO = 'O'



//function playerX(){
    
    //         console.log("WIn")
    
    //     console.log("check")
    //     let winningConditions = [
        //         ['1', '2', '3']
        //     ]
        //}
        
        function checkWin(cell) {
            let a1 = document.querySelector("#a1").innerHTML
            let a2 = document.querySelector("#a2").innerHTML
            let a3 = document.querySelector("#a3").innerHTML
            let b1 = document.querySelector("#b1").innerHTML
            let b2 = document.querySelector("#b2").innerHTML
            let b3 = document.querySelector("#b3").innerHTML
            let c1 = document.querySelector("#c1").innerHTML
            let c2 = document.querySelector("#c2").innerHTML
            let c3 = document.querySelector("#c3").innerHTML
    console.log(cell)
    if (
      (a1 === a2 && a2 === a3 && a1 !== "") ||
      (b1 === b2 && b2 === b3 && b1 !== "") ||
      (c1 === c2 && c2 === c3) && c1 !== "" ||
      (a1 === b1 && b1 === c1) && a1 !== "" ||
      (a2 === b2 && b2 === c2) && a2 !== "" ||
      (a3 === b3 && b3 === c3) && a3 !== "" ||
      (a1 === b2 && b2 === c3) && a1 !== "" ||
      (a3 === b2 && b2 === c1) && a3 !== ""
  ) {
      console.log("WIN");
    }

    //check if player won
    //check for tie
    
    //change gameResult
    //display restart button
    
    
    //if not, just keep going
}
