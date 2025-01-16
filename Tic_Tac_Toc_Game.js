let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; //playerX , plyearO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



const resetGame = () =>{
    turn = true;
    anableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    const handleClick = (evt) => {
        if(turn){ // use the defined 'turn' variable
            box.innerText = "O";
        }else{
            box.innerText = "X";
        }
        turn = !turn; // flip the value
        box.disabled = true;
        chackwinner();
    };
    box.addEventListener("click", handleClick);
});


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const anableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const chackwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
