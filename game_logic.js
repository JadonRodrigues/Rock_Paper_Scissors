
let HumanScore = 0;
let ComputerScore = 0;
let Drawcount = 0;
let RoundNo =0;
let rnd = document.querySelector(".Round");
let hmnS = document.querySelector(".HumanScore");
let compS = document.querySelector(".CompScore");
let hmnO = document.querySelector(".humanOutput");
let compO = document.querySelector(".compOutput")
let drawNo = document.querySelector(".DrawScore")

function getcomputerchoice(){
    let number = Math.floor(Math.random()*3);
    if(number===0){
       
        return "🪨 Rock!";
    }
    else if(number===1){
       
        return "📄 Paper!";
    }
    else{
        
        return "✂️ Scissor!";
    }
}


const rockbtn = document.querySelector(".Rock");
const paperbtn = document.querySelector(".Paper");
const scissorbtn = document.querySelector(".Scissor");

rockbtn.addEventListener("click",()=>{
    const ComputerChoice = getcomputerchoice();
    let HumanChoice = "🪨 Rock!";
    PlayRound("🪨 Rock!",ComputerChoice);
    
    hmnS.textContent=HumanScore;
    compS.textContent=ComputerScore;
    rnd.textContent=RoundNo;
    hmnO.textContent=HumanChoice;
    compO.textContent=ComputerChoice;
    drawNo.textContent=Drawcount;
});
paperbtn.addEventListener("click",()=>{
    const ComputerChoice = getcomputerchoice();
    let HumanChoice = "📄 Paper!";
    PlayRound("📄 Paper!",ComputerChoice);
    
    hmnS.textContent=HumanScore;
    compS.textContent=ComputerScore;
    rnd.textContent=RoundNo;
    hmnO.textContent=HumanChoice;
    compO.textContent=ComputerChoice;
    drawNo.textContent=Drawcount;
});
scissorbtn.addEventListener("click", ()=>{
    const ComputerChoice = getcomputerchoice();
    let HumanChoice = "✂️ Scissor!";
    PlayRound("✂️ Scissor!",ComputerChoice);
    
    hmnS.textContent=HumanScore;
    compS.textContent=ComputerScore;
    rnd.textContent=RoundNo;
    hmnO.textContent=HumanChoice;
    compO.textContent=ComputerChoice;
    drawNo.textContent=Drawcount;
});
function PlayRound(HumanChoice, ComputerChoice){

    if (HumanChoice === ComputerChoice){
        console.log("Draw!");
        Drawcount++;
    }
    else if (
        (HumanChoice === "🪨 Rock!" && ComputerChoice === "✂️ Scissor!") ||
        (HumanChoice === "📄 Paper!" && ComputerChoice === "🪨 Rock!") ||
        (HumanChoice === "✂️ Scissor!" && ComputerChoice === "📄 Paper!")
    ){
        console.log("Human wins");
        HumanScore++;
        
    }
    else{
        console.log("Computer wins");
        ComputerScore++;
    }

    console.log("Human Score:", HumanScore);
    console.log("Computer Score:", ComputerScore);
    RoundNo++;
}
     
   



