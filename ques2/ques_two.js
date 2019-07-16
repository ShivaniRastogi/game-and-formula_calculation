var game=["","rock","paper","scissor"]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function playgame(){
    var user1 = parseInt(prompt(" enter 1 for rock\n enter 2 for paper\n enter 3 for scissor"));
    var user2 =getRndInteger(1,3);
    document.getElementById("choice").innerHTML="you have choosen "+game[user1]+" "+ "player2 has choosen "+game[user2];
    if (user1==user2)
        document.getElementById("result").innerHTML="match draw";
    else if((user1==1 && user2==2) ||(user1==2 && user2==3)||(user1==3 && user2==1))
        document.getElementById("result").innerHTML="you loose"; 
    else if((user1==2 && user2==1) ||(user1==3 && user2==2)||(user1==1 && user2==3))
        document.getElementById("result").innerHTML="you won";
    else
        document.getElementById("result").innerHTML="you have given invalid input ";    
    }
playgame();
