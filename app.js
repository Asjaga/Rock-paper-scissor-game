let user_score = 0;
let comp_score = 0;
let us = document.querySelector("#us");
let cs = document.querySelector("#cs");
let reset = document.querySelector(".reset");

let choices= document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

let gencompchoice = () =>{
    comp_arr = ["rock","paper","scissor"];
    idx = Math.floor(Math.random() * 3);
    return comp_arr[idx];

}
let drawgame = () =>{
    msg.innerText = "Game Was Drawn! Play Again"
    msg.style.color = "black";
}
let show_winner = (userchoice,userwin,compchoice) => {
    if (userwin){
        msg.innerText = `You Win! your ${userchoice} beat ${compchoice}`;
        msg.style.color = "green";
        user_score++;
        us.innerText = user_score;


    }
    else{
        msg.innerText = `You Lose! ${compchoice} beat your ${userchoice}`;
        msg.style.color = "red";
        comp_score++;
        cs.innerText = comp_score;       

    }

}

let play_game = (userchoice) =>{
    compchoice = gencompchoice();
    if (compchoice === userchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if (userchoice === "rock"){
           userwin = compchoice==="paper"?false:true;
        }
        else if (userchoice === "paper"){
            userwin = compchoice === "rock"?true:false;
        }
        else{
            userwin = compchoice === "rock"?false:true;
        }
        show_winner(userchoice,userwin,compchoice);
    }



}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        play_game(userchoice);
    })
})

reset.addEventListener("click", ()=>{
    comp_score = 0;
    user_score = 0;
    cs.innerText = 0;  
    us.innerText = 0;       
    msg.innerText = "Choose Your Move";
    msg.style.color = "black";
})