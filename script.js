//selectors and events
// Button Logic: Class and initialization
function Box(pos){
    this.pos = pos
    this.pressed = false
    this.status = 0
}

let box0 = new Box(0)
let box1 = new Box(1)
let box2 = new Box(2)
let box3 = new Box(3)
let box4 = new Box(4)
let box5 = new Box(5)
let box6 = new Box(6)
let box7 = new Box(7)
let box8 = new Box(8)

// Game Logic
let playerTurn = 1
let victoryAchieved = 0

// Buttons assignment to play function
const divs = document.querySelectorAll('div');
divs.forEach((div) => {
div.addEventListener('click', (e) => {
    playBox(eval(div.id));
    })
})

// Button press logic -- 1 is X, 2 is O
function playBox(boxPos){
    if(boxPos.pressed == false){
        boxPos.pressed = true;
        if(playerTurn == 1){
            document.getElementById("box" + (boxPos.pos).toString()).innerHTML = "<button>X</button>";
            boxPos.status = 1
            playerTurn = 2;
            document.getElementById("pturn").innerHTML = "O Player Turn"
        } else {
            document.getElementById("box" + (boxPos.pos).toString()).innerHTML = "<button>O</button>";
            boxPos.status = 2
            playerTurn = 1;
            document.getElementById("pturn").innerHTML = "X Player Turn"
        }
    }
    if(checkWin()){
    if(playerTurn == 2){
            document.getElementById("pturn").innerHTML = "Player X Won!"
            //location.reload()
            stopGame()
    } else {
        document.getElementById("pturn").innerHTML = "Player O Won!"
        //location.reload()
        stopGame()
    }
}

// Win Condition
function checkWin(){
    // Horizontal
    if(box0.status == box1.status && box0.status == box2.status && box0.status != 0){
        return true;
    } else if(box3.status == box4.status && box3.status == box5.status && box3.status != 0){
        return true;
    } else if(box6.status == box7.status && box6.status == box8.status && box6.status != 0){
        return true;
    }
    // Vertical
    else if(box0.status == box3.status && box0.status == box6.status && box0.status != 0){
        return true;
    } else if(box1.status == box4.status && box1.status == box7.status && box1.status != 0){
        return true;
    } else if(box2.status == box5.status && box2.status == box8.status && box2.status != 0){
        return true;
    }
    // Diagonal
    else if(box0.status == box4.status && box0.status == box8.status && box0.status != 0){
        return true;
    } else if(box2.status == box4.status && box2.status == box6.status && box2.status != 0){
        return true;
    // Tie
    } else if(box1.pressed && box2.pressed && box3.pressed && box4.pressed && box5.pressed && box6.pressed && box7.pressed && box8.pressed){
        document.getElementById("pturn").innerHTML = "It's a tie!"
    }
}
}

function stopGame(){
    box0.pressed = true
    box1.pressed = true
    box2.pressed = true
    box3.pressed = true
    box4.pressed = true
    box5.pressed = true
    box6.pressed = true
    box7.pressed = true
    box8.pressed = true
}
