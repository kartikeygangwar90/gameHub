
let move=document.querySelectorAll(".gameBtn")
let scoreMapping;
let card=document.querySelector(".score")
let resetScore=document.querySelector(".reset")
let trialPlayed=document.querySelector("#tutorial")
let div=document.querySelector(".conclusion");
let res=document.createElement("h3");
// let p=document.querySelector(".score")
let wins=0,lose=0,draws=0;
card.innerText=`Wins: ${wins} , Loses: ${lose} , Draws: ${draws}`;
move.forEach(move => {    // *** An imp point to be rememeber as when Adding same prop to multiple elements we can separate them by a loop like thing using forEach prop..
    move.addEventListener("click", function(){
    // To Access the Player Move--->
    const playerMove=move.innerHTML;
    // To Access the Computer's Move--->
    const randomMove=() =>{
        const randomVal=Math.random();      
        if(randomVal<=(1/3)){
            return "Stone"
        }
        else if(randomVal>(1/3) && randomVal<=(2/3) ){
            return "Paper"
        }
        else{
            return "Scissor"
        }
    };
    const compMove=randomMove();
    
    // Now , We have to print the result on the webpage...

    if(playerMove==compMove){
        res.innerText=`Match Draws!! Try Again, \n Your move : ${playerMove} and \n Computer's move : ${compMove}.`
        draws++;
    }
    else if(playerMove=="Stone" && compMove=="Paper"){
        res.innerText=`You Lose!! Better Luck Next Time! , \nYour move : ${playerMove} and \n Computer's move : ${compMove}.`
        lose++;
    }
    else if(playerMove=="Scissor" && compMove=="Stone"){
        res.innerText=`You Lose!! Better Luck Next Time! , \n Your move : ${playerMove} and \n Computer's move : ${compMove}.`
        lose++;
    }
    else{
        res.innerText=`Hurray! You Won, Continue Playing \n Your move : ${playerMove} and \n Computer's move : ${compMove}.`
        wins++;
    }
    
    scoreMapping=`Wins: ${wins} , Loses: ${lose} , Draws: ${draws}`;
    card.innerText=scoreMapping;
    div.append(res);
});
});

resetScore.addEventListener("click", function (){
    wins=0,lose=0,draws=0;
    card.innerText=`Wins: ${wins} , Loses: ${lose} , Draws: ${draws}`;
    res.innerText=""
    div.append(res);
});

let Btn=document.querySelectorAll("#btn1, #btn2, #btn3")
trialPlayed.addEventListener("click", function (){
    let res=document.createElement("h3");
    res.innerText="Hope you remember your Early days! \n If not then let me remind you some facts about this game..\n the one who got the strongest wins \n So if you got Stone and the other Scissor then You Won \n If you got Paper and the other got Stone then You Won  and Vice-versa  \n If both got the same then Draws.."
    move.forEach(btn=>{
        btn.disabled=true;
    })
    
    setTimeout(()=>{
        res.innerText="";
        move.forEach(btn=>{
            btn.disabled=false;
        });
    },10000);
    div.append(res);
});


// Lets move to a New Game Tic-tac-toe Game ----



// 
let O=document.querySelector("#O");
let X=document.querySelector("#X");

let btn=document.querySelectorAll(".choice");
let firstMove="";
let nextMove="";
start();
let originalContent = document.getElementsByClassName("turnBox").innerHTML;

// O.disabled=false
// X.disabled=false

function start(){

O.addEventListener("click", function (){
    firstMove="O";
    nextMove="X"
    btn.forEach(btn=>{
        btn.disabled=true;
        btn.style.backgroundColor="rgb(37, 61, 53)"
        btn.style.color="red"
        displayVal()     //function defined below to print the choice of the player
    })
});

X.addEventListener("click", function (){
    firstMove="X";
    nextMove="O"
    btn.forEach(btn=>{
        btn.disabled=true;
        btn.style.backgroundColor="rgb(37, 61, 53)"
        btn.style.color="red"
        displayVal()     //function defined below to print the choice of the player
    })
});

}

btn.disabled=false
let btns=document.querySelectorAll(".gameBox button")
let turnDisplay=document.querySelector(".turnBox")
function displayVal(){
    let turnShow=document.createElement("h3");
    turnShow.innerText=`${firstMove}'s Move`;
    let count=0;
    turnDisplay.innerHTML="";
    btns.forEach(btn=>{
        btn.addEventListener("click", function (){
        if(count%2==0){
            btn.innerHTML=firstMove;
            turnShow.innerText=`${nextMove}'s Move`;
            // turnDisplay.style.marginBottom="2px";
            count++
            btn.disabled=true;    // to make sure that the value once assigned by player will not changed
            btn.style.backgroundColor="rgb(114, 151, 231)"
            btn.style.color="white"

        }
        else {
            btn.innerHTML=nextMove;
            turnShow.innerText=`${firstMove}'s Move`;
            count++
            btn.disabled=true;    // to make sure that the value once assigned by player will not changed
            btn.style.backgroundColor="rgb(114, 151, 231)"
            btn.style.color="white"

        }
        conclusion()

        })
        turnDisplay.appendChild(turnShow);
    
    })

}

function conclusion(){
    let btn1=document.getElementById("btn1")
    let btn2=document.getElementById("btn2")
    let btn3=document.getElementById("btn3")
    let btn4=document.getElementById("btn4")
    let btn5=document.getElementById("btn5")
    let btn6=document.getElementById("btn6")
    let btn7=document.getElementById("btn7")
    let btn8=document.getElementById("btn8")
    let btn9=document.getElementById("btn9")

    function concDisplay(Winner,Looser){
        btns.forEach(btn=>{
                btn.disabled=true
            })
            concShow=document.createElement("h3");
            concShow.innerText=`Cheers!! Player with move ${Winner}  wins  \n Player with the move ${Looser} Lose, Better luck next time!! `
            turnDisplay.innerHTML=""
            turnDisplay.appendChild(concShow);

    }
        if (btn1.innerText===`${firstMove}` && btn2.innerText===`${firstMove}` && btn3.innerText===`${firstMove}`){
            btn1.style.backgroundColor="fuchsia";
            btn2.style.backgroundColor="fuchsia";
            btn3.style.backgroundColor="fuchsia";
            btn1.style.color="Black"
            btn2.style.color="Black"
            btn3.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn1.innerText===`${nextMove}` && btn2.innerText===`${nextMove}` && btn3.innerText===`${nextMove}`){
            btn1.style.backgroundColor="fuchsia";
            btn2.style.backgroundColor="fuchsia";
            btn3.style.backgroundColor="fuchsia";
            btn1.style.color="Black"
            btn2.style.color="Black"
            btn3.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn4.innerText===`${firstMove}` && btn5.innerText===`${firstMove}` && btn6.innerText===`${firstMove}`){
            btn4.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn6.style.backgroundColor="fuchsia";
            btn4.style.color="Black"
            btn5.style.color="Black"
            btn6.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn4.innerText===`${nextMove}` && btn5.innerText===`${nextMove}` && btn6.innerText===`${nextMove}`){
            btn4.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn6.style.backgroundColor="fuchsia";
            btn4.style.color="Black"
            btn5.style.color="Black"
            btn6.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn7.innerText===`${firstMove}` && btn8.innerText===`${firstMove}` && btn9.innerText===`${firstMove}`){
            btn7.style.backgroundColor="fuchsia";
            btn8.style.backgroundColor="fuchsia";
            btn9.style.backgroundColor="fuchsia";
            btn7.style.color="Black"
            btn8.style.color="Black"
            btn9.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn7.innerText===`${nextMove}` && btn8.innerText===`${nextMove}` && btn9.innerText===`${nextMove}`){
            btn7.style.backgroundColor="fuchsia";
            btn8.style.backgroundColor="fuchsia";
            btn9.style.backgroundColor="fuchsia";
            btn7.style.color="Black"
            btn8.style.color="Black"
            btn9.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn1.innerText===`${firstMove}` && btn4.innerText===`${firstMove}` && btn7.innerText===`${firstMove}`){
            btn1.style.backgroundColor="fuchsia";
            btn4.style.backgroundColor="fuchsia";
            btn7.style.backgroundColor="fuchsia";
            btn1.style.color="Black"
            btn4.style.color="Black"
            btn7.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn1.innerText===`${nextMove}` && btn4.innerText===`${nextMove}` && btn7.innerText===`${nextMove}`){
            btn1.style.backgroundColor="fuchsia";
            btn4.style.backgroundColor="fuchsia";
            btn7.style.backgroundColor="fuchsia";
            btn1.style.color="Black"
            btn4.style.color="Black"
            btn7.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn2.innerText===`${firstMove}` && btn5.innerText===`${firstMove}` && btn8.innerText===`${firstMove}`){
            btn2.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn8.style.backgroundColor="fuchsia";
            btn2.style.color="Black"
            btn5.style.color="Black"
            btn8.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn2.innerText===`${nextMove}` && btn5.innerText===`${nextMove}` && btn8.innerText===`${nextMove}`){
            btn2.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn8.style.backgroundColor="fuchsia";
            btn2.style.color="Black"
            btn5.style.color="Black"
            btn8.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn3.innerText===`${firstMove}` && btn6.innerText===`${firstMove}` && btn9.innerText===`${firstMove}`){
            btn3.style.backgroundColor="fuchsia";
            btn6.style.backgroundColor="fuchsia";
            btn9.style.backgroundColor="fuchsia";
            btn3.style.color="Black"
            btn6.style.color="Black"
            btn9.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn3.innerText===`${nextMove}` && btn6.innerText===`${nextMove}` && btn9.innerText===`${nextMove}`){
            btn3.style.backgroundColor="fuchsia";
            btn6.style.backgroundColor="fuchsia";
            btn9.style.backgroundColor="fuchsia";
            btn3.style.color="Black"
            btn6.style.color="Black"
            btn9.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn1.innerText===`${firstMove}` && btn5.innerText===`${firstMove}` && btn9.innerText===`${firstMove}`){
            btn1.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn9.style.backgroundColor="fuchsia";
            btn1.style.color="Black"
            btn5.style.color="Black"
            btn9.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn1.innerText===`${nextMove}` && btn5.innerText===`${nextMove}` && btn9.innerText===`${nextMove}`){
            btn1.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn9.style.backgroundColor="fuchsia";
            btn1.style.color="Black"
            btn5.style.color="Black"
            btn9.style.color="Black"
            concDisplay(nextMove,firstMove)
        }
        else if (btn3.innerText===`${firstMove}` && btn5.innerText===`${firstMove}` && btn7.innerText===`${firstMove}`){
            btn3.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn7.style.backgroundColor="fuchsia";
            btn3.style.color="Black"
            btn5.style.color="Black"
            btn7.style.color="Black"
            concDisplay(firstMove,nextMove)
        }
        else if (btn3.innerText===`${nextMove}` && btn5.innerText===`${nextMove}` && btn7.innerText===`${nextMove}`){
            btn3.style.backgroundColor="fuchsia";
            btn5.style.backgroundColor="fuchsia";
            btn7.style.backgroundColor="fuchsia";
            btn3.style.color="Black"
            btn5.style.color="Black"
            btn7.style.color="Black"
            concDisplay(nextMove,firstMove)
        }

        
    }
    
    let resetGame=document.querySelector(".reset2")
    resetGame.addEventListener("click", function (){
        firstMove=""
        nextMove=""
        btns.forEach(btn => {
        btn.innerText=""
        btn.disabled = true;
        btn.style.backgroundColor = "";
        btn.style.color = "";
         O.disabled = false;
         X.disabled = false;
        });
         let turnDisplay = document.querySelector(".turnBox");
        if (turnDisplay) turnDisplay.innerHTML = originalContent;

        let conclusion = document.querySelector(".conclusion");
        if (conclusion) conclusion.innerHTML = "";
        turnDisplay.appendChild(concShow)
        start();
    // displayVal();
    })
