// function Fun(){
//     const userChoice=document.querySelector('.choice');
    
//     const finalChoice=userChoice.innerHTML;      
//     console.log(finalChoice);
    
// let compChoice;
// function random(){
//         const randomVal=Math.random();      
//         if(randomVal<=(1/3)){
//           compChoice="Stone";
//         }
//         else if(randomVal>(1/3) && randomVal<=(2/3) ){
//             compChoice="Paper";
//         }
//         else{
//             compChoice="Scissor";
     
//         }
//        console.log(compChoice);
 
// }   
// random();

// if(finalChoice==compChoice){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . Match Draw `);
// }

// if(finalChoice=="Stone" && compChoice=="Paper" ){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . Compiter Wins `);
// }

// if (finalChoice=="Stone" && compChoice=="Scissor"){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . You Won `);
// }

// if (finalChoice=="Paper" && compChoice=="Stone"){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . You Won `);
// }

// if (finalChoice=="Paper" && compChoice=="Scissor"){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . Computer Won `);
// }

// if (finalChoice=="Scissor" && compChoice=="Stone"){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . Computer Won `);
// }

// if (finalChoice=="Scissor" && compChoice=="Paper"){
//     alert(`Your Choice ${finalChoice}. Computer's choice ${compChoice} . You Won `);
// }

// }


let move=document.querySelectorAll(".gameBtn")

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

    let div=document.querySelector(".conclusion");
    let res=document.createElement("h3");
    if(playerMove==compMove){
        res.innerText=`Match Draws!! Try Again, Your move : ${playerMove} and Computer's move : ${compMove}.`
    }
    else if(playerMove=="Stone" && compMove=="Paper"){
        res.innerText=`You Lose!! Better Luck Next Time! , Your move : ${playerMove} and Computer's move : ${compMove}.`
    }
    else if(playerMove=="Scissor" && compMove=="Stone"){
        res.innerText=`You Lose!! Better Luck Next Time! , Your move : ${playerMove} and Computer's move : ${compMove}.`
    }
    else{
        res.innerText=`Hurray! You Won , Continue Playing , Your move : ${playerMove} and Computer's move : ${compMove}.`
    }
    div.append(res);
});
});
setInterval(()=>{
    res.innerText=""
    move.disabled=false;
},1500);
move.disabled=true;
