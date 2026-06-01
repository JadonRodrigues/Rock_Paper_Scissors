


function playgame(){
    let HumanScore = 0;
    let ComputerScore = 0;
    for(let i =1; i<=5;i){
        console.log("ROUND : ", i);


function gethumanchoice(){
    let ask = prompt("Choose you move: rock, paper or scissor");
    ask = ask.toLowerCase();
    if (ask==="rock"){
        return "🪨 Rock!";
    }
    else if (ask==="paper"){
        return "📄 Paper!";
    }
    else if (ask==="scissor"){
        return "✂️ Scissor!";
    }
    else{
        console.log("Invalid input");
        return gethumanchoice();
    }
}
const HumanChoice = gethumanchoice();
console.log(HumanChoice);



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
const ComputerChoice = getcomputerchoice();
console.log(ComputerChoice);

function PlayRound(HumanChoice, ComputerChoice){


if (HumanChoice === "🪨 Rock!"  &&  ComputerChoice === "🪨 Rock!"){
    console.log("Draw!")
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}
else if (HumanChoice === "🪨 Rock!"  &&  ComputerChoice === "📄 Paper!"){
    console.log("Computer wins");
    ComputerScore += 1;
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);

}
else if (HumanChoice === "🪨 Rock!"  &&  ComputerChoice === "✂️ Scissor!"){
    console.log("Human wins");
    HumanScore += 1;
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}



else if (HumanChoice === "📄 Paper!"  &&  ComputerChoice === "📄 Paper!"){
    console.log("Draw!")
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}
else if (HumanChoice === "📄 Paper!"  &&  ComputerChoice === "✂️ Scissor!"){
    console.log("Computer wins");
    ComputerScore += 1;
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}
else if (HumanChoice === "📄 Paper!"  &&  ComputerChoice === "🪨 Rock!"){
    console.log("Human wins");
    HumanScore += 1;
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}



else if (HumanChoice === "✂️ Scissor!"  &&  ComputerChoice === "📄 Paper!"){
    console.log("Human wins");
    HumanScore += 1;
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}
else if (HumanChoice === "✂️ Scissor!"  &&  ComputerChoice === "✂️ Scissor!"){
    console.log("Draw!")
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}
else if (HumanChoice === "✂️ Scissor!"  &&  ComputerChoice === "🪨 Rock!"){
    console.log("Computer wins");
    ComputerScore += 1;
    console.log("Human Score : ",HumanScore );
    console.log("Computer Score : ", ComputerScore);
}
}

PlayRound(HumanChoice, ComputerChoice);

        i++;
        
    }

    console.log("FINAL SCORE!!!");
    console.log("HUMAN : ", HumanScore);
    console.log("COMPUTER ", ComputerScore);
    if(HumanScore>ComputerScore){
        console.log("HUMAN WINS!!!");
        }
    else if(ComputerScore>HumanScore){
        console.log("COMPUTER WINS!!!");
        }
    else if(HumanScore===ComputerScore){
        console.log("ITS A TIE!!!");
        }

}
playgame();




