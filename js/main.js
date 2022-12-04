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
        element.textContent = ''
    })
})



let turn = 'X'
document.querySelectorAll(".board div").forEach(element => {
    element.addEventListener('click', () => {
        if (element.textContent === "") {
          element.textContent = turn;
          turn === "O" ? (turn = "X") : (turn = "O");
        }
    })
})



// document.getElementById(".a1").addEventListener('click',playerX)

function playerX(){
//     let a1 = document.querySelector("#a1").textContent
//     let a2 = document.querySelector("#a2").innerHTML
//     let a3 = document.querySelector("#a3").innerHTML
//     let b1 = document.querySelector("#b1").innerHTML
//     let b2 = document.querySelector("#b2").innerHTML
//     let b3 = document.querySelector("#b3").innerHTML
//     let c2 = document.querySelector("#c2").innerHTML
//     let c1 = document.querySelector("#c1").innerHTML
//     let c3 = document.querySelector("#c3").innerHTML

//         console.log("WIn")
    
//     console.log("check")
    let winningConditions = [
        ['1', '2', '3']
    ]
}