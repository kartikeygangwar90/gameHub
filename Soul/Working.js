
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

let firstMove;

O.addEventListener("click", function (){
    firstMove="O";
    console.log(firstMove);
    btn.forEach(btn=>{
        btn.disabled=true;
        btn.style.backgroundColor="rgb(37, 61, 53)"
        btn.style.color="red"
    })
});

X.addEventListener("click", function (){
    firstMove="X";
    console.log(firstMove);
    btn.forEach(btn=>{
        btn.disabled=true;
        btn.style.backgroundColor="rgb(37, 61, 53)"
        btn.style.color="red"
    })
});

btn.disabled=false


