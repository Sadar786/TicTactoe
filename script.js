console.log("Welcom to tic tac toe");
let MusicGame = new Audio("tune.wav")
let MusicReset = new Audio("1.wav")
let turn = "X";
let gameOver = false ;

// furntion to change the turn
const ChangeTurn = ()=> {
   return turn === "X"? "0": "X"
}

// furntion to check the winner
const checkWinner = ()=>{
   let boxtexts = document.getElementsByClassName("boxtext");
   let win = [
       [0, 1 , 2 ,5 ,5 , 0],
       [3, 4 , 5, 5, 15, 0],
       [6, 7 , 8, 5, 25, 0],
       [0, 3 , 6,-5, 15, 90],
       [1, 4 , 7 ,5, 15, 90],
       [2, 5 , 8,15, 15, 90],
       [0, 4 , 8, 5, 15, 45],
       [2, 4 , 6, 5, 15, -45],
   ]

  win.forEach(e => {
    if ((boxtexts[e[0]].innerHTML)===(boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML)===(boxtexts[e[1]].innerHTML) && boxtexts[e[0]].innerHTML !== ""  ){
   document.querySelector('.turnforX').innerHTML = boxtexts[e[0]].innerHTML + "  Won The Game ....";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
    gameOver = true;
    document.querySelector(".line").style.width = "0";
    document.querySelector(".line").style.width = "20vw";
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    }
  })
 
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click' , ()=> {
        if(boxText.innerHTML === '')
        {
            boxText.innerHTML = turn;
            turn = ChangeTurn();
            MusicGame.play();
            checkWinner();
            if (!gameOver){
            document.getElementsByClassName("turnforX")[0].innerHTML = "Turn for " + turn;
   
            }
            console.log(turn)
        }
    })
})

//reset button funtionalities
reset.addEventListener('click', ()=>{
    let boxtextss = document.querySelectorAll('.boxtext');

    Array.from(boxtextss).forEach(element =>{
       element.innerHTML = ""
    });
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
   turn = "X";
   gameOver = false ; 
    document.getElementsByClassName("turnforX")[0].innerHTML = "Turn for " + turn;
    MusicReset.play();
    document.querySelector(".line").style.width = "0";
})