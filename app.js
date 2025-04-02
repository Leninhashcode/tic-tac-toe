let buttons = document.querySelectorAll('.button');
let gamewinner = document.querySelector('.gamewinner')
let msg = document.querySelector('#winnerMsg')
let newGame =document.querySelector('.new-btn')
let resetGame = document.querySelector('.rst-btn')
let turnx = true;
let count = 0;
let temp = '';
const buttondisable = () => {
    buttons.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });
}
const Enablebuttons = () => {
    buttons.forEach((button) => {
        button.disabled = false;
        button.innerText='';
    });
}
const reset= () =>{
    turnx = true;
    gamewinner.classList.remove('final')
    Enablebuttons();
}
const showdraw = (winner) => {
    msg.innerText = `match is ${winner} try again !!`
    gamewinner.classList.add('final')
}



const showWinner= (winner) =>{
   gamewinner.classList.add('final');
   msg.innerText = `Game Winner is ${winner}`
   buttondisable();
}
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Prevent editing a button after it's clicked
        if (button.innerText === '') {
            if (turnx) {
                button.innerText = 'X';
                turnx = false;
            } else {
                button.innerText = 'O';
                turnx = true;
            }
            button.setAttribute('disabled', 'true');
            count ++;
            
            checkWinner();
        }
    });
});

// Check for a winner
function checkWinner() {
    for (let pattern of winpatterns) {
        let val01 = buttons[pattern[0]].innerText;
        let val02 = buttons[pattern[1]].innerText;
        let val03 = buttons[pattern[2]].innerText;
    
        if (val01 && val02 && val03 !== "") {
            if (val01 === val02 && val02 === val03) {
                console.log(val01 + ' wins!');
                showWinner(val01)
                // Disable all buttons after a win
                
                
                break; // Stop checking once we find a winner
            }
            
        }
        if (count === buttons.length) {
            temp = "Draw"
            showdraw(temp);
        }
    }
}
newGame.addEventListener('click',reset);
resetGame.addEventListener('click',reset);
