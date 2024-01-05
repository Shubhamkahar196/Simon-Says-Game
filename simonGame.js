let gameSeq=[];
let userSeq = [];


let btn = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
    }
    started = true;

    levelUp();
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

 let ranIdx = Math.floor(Math.random()*3);
 let randColor = btn[ranIdx];
 let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}


function checkAns(idx){
if(userSeq[idx]=== gameSeq[idx]){
  if(userSeq.length == gameSeq.length){
   setTimeout(levelUp,1000);
  }
}else{
    // h2.innerHTML = `Game Over!  Your score was <b> ${level}</b> <br> press any key to start the game.`;

    document.querySelector("body").style.backgroundColor = "red";
    
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    highScore();
    reset();
}
}

function btnPress(){
   
    let btns = this;
    userFlash(btns);

    userColor = btns.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}

let allbtns = document.querySelectorAll(".btn");
for(btnn of allbtns){
    btnn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function highScore(){
    h2.innerHTML = `Game Over!  Your highest Score <b> ${level}</b> <br> press any key to start the game.`;

}