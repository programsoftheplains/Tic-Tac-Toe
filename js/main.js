/* Grid Variables   */

let aa = document.querySelector('#aa')
let ab = document.querySelector('#ab')
let ac = document.querySelector('#ac')
let ba = document.querySelector('#ba')
let bb = document.querySelector('#bb')
let bc = document.querySelector('#bc')
let ca = document.querySelector('#ca')
let cb = document.querySelector('#cb')
let cc = document.querySelector('#cc')

//Turn Display selector

let turnDisplay = document.querySelector('#turnDisplay')

/*Event listener for class item > */

aa.addEventListener('click', function(){toggle(aa)})
ab.addEventListener('click', function(){toggle(ab)})
ac.addEventListener('click', function(){toggle(ac)})
ba.addEventListener('click', function(){toggle(ba)})
bb.addEventListener('click', function(){toggle(bb)})
bc.addEventListener('click', function(){toggle(bc)})
ca.addEventListener('click', function(){toggle(ca)})
cb.addEventListener('click', function(){toggle(cb)})
cc.addEventListener('click', function(){toggle(cc)})

// Win Condition arrays

let winningArray = [[aa,ab,ac],[ba,bb,bc],[ca,cb,cc],[aa,ba,ca],[ab,bb,cb],[ac,bc,cc],[aa,bb,cc],[ac,bb,ca]]

//Starting conditions

let playerOneArray = []
let playerTwoArray = []
let player = true
let gameOver = false
let gameWon = false
let isTied = false
turnDisplay.innerHTML = 'Player One\'s turn'

/*Turn function*/

function toggle(coordinate){
    //check to see if game is already one
    if(gameOver){
        alertGameStatus()
    }else{
        if(coordinate.style.background == 'green' || coordinate.style.background == 'red'){
         //square has already had a move put in it.
         //return function
         alert('invalid input, choose another square')
        return      
        }
        if(player){  
            coordinate.style.background = 'green'
            playerOneArray.push(coordinate)
            turnDisplay.innerHTML = 'Player Two\'s turn'
            checkForWin(playerOneArray)
            checkForTie()
         }
         else{   
           coordinate.style.background = 'red'
           playerTwoArray.push(coordinate)
           turnDisplay.innerHTML = 'Player One\'s turn'
           checkForWin(playerTwoArray)
            checkForTie()

         }
        player = !player
    }
}

//check win function

function checkForWin(player){
    winningArray.forEach(function(element){
        if( (player.includes(element[0])) && (player.includes(element[1])) && (player.includes(element[2])) ){
            console.log('We have a winner!')
            winner = player
            gameWon = true
            gameOver = true
        }
    })
    if(gameOver){
        alertGameStatus()
    }
}

function checkForTie(){
    if( (playerOneArray.length === 5) && (playerTwoArray.length === 4) && (gameWon === false) ){
        gameOver = true
        isTied = true
        console.log("Nobody won...")
        alertGameStatus()
    }
}

// Alert game status

function alertGameStatus(){
    if(gameWon === true){
        if(winner === playerOneArray){
            console.log('Player 1 is victorious')
            turnDisplay.innerHTML = 'Player One is victorious!'
        }else{
            console.log('Player 2 is victorious!')
            turnDisplay.innerHTML = 'Player Two is victorious!'
        }
    }
    if(isTied === true){
        console.log("You tied")
        turnDisplay.innerHTML = 'You tied...'
    }
}

/*reset function*/

document.querySelector('button').addEventListener('click', reset)

function reset(){
    let squares = document.querySelectorAll('.item')
    squares.forEach(element => element.style.background = 'none')
    playerOneArray = []
    playerTwoArray = []
    player = true
    gameOver = false
    gameWon = false
    isTied = false
    turnDisplay.innerHTML = 'Player One\'s turn'
}