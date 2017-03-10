var points = 0;

$( document ).ready(function() {
    console.log( "ready!" );
});
function scoreboard (points) {
  document.getElementById("number").innerHTML = points;
    if (points >= 2000) 
    alert("You Won!");
} 
function myFunctionA() {
    var options = prompt("The Coloring Book was released in what year? \n A. 2016 \n B. 2015 \n C. 2014 \n D. 2013");
    if (options === 'A') { 
        
      alert("correct!"); 
      points += 100; 
      scoreboard(points); 
    } 
    else { options !== 'A';  alert("sorry, incorrect."); 
    points -= 100; 
    scoreboard(points);
    }
    
}
function myFunctionB() {
    var options = prompt("This rapper was the founder of No Limit Records \n A. Vince Staples \n B. Master P \n C. The Weekend \n D. Kendrick Lamar");
    if (options === 'B') { 
        
      alert("correct!");
      points += 100;
      scoreboard(points);

    } 
    else { options !== 'B';  alert("sorry, incorrect.");
    points -= 100; 
    scoreboard(points);
    }
    
}
function myFunctionC() {
    var options = prompt("Jay-Z is currently married to, whom? \n A. Rihanna \n B. Kanye West \n C. Ariana Grande \n D. Beyonce");
    if (options === 'D') { 
        
      alert("correct!");
      points += 100;
      scoreboard(points);
    } 
    else { options !== 'D';  alert("sorry, incorrect.");
    points -= 100; 
    scoreboard(points);
    }
    
}
function myFunctionD() {
    var options = prompt("This music streaming service is only available on iphones \n A. Spotify \n B. Apple Music \n C. Sound Cloud \n D. Google Play");
    if (options === 'B') { 
        
      alert("correct!");
      points += 100;
      scoreboard(points);
    } 
    else { options !== 'B';  alert("sorry, incorrect.");
    points -= 100; 
    scoreboard(points);
    }
    
}
function myFunctionE() {
    var options = prompt("This grammy award winning album was released at no cost to the consumers \n A. To Pimp a Butterfly \n B. The Coloring Book \n C. Life of Pablo \n D. Forest Hill Drive");
    if (options === 'B') { 
        
      alert("correct!");
      points += 100;
      scoreboard(points);
    } 
    else { options !== 'B';  alert("sorry, incorrect.");
    points -= 100; 
    scoreboard(points);
    }
    
}
function myFunctionF() {
    var options = prompt("This album is among the highest selling in history \n A. A Seat at the Table \n B. The Space Program \n C. SpeakerBoxx/The Love Below  \n D. Life of Pablo");
    if (options === 'C') { 
        
      alert("correct!");
      points += 200;
      scoreboard(points);
    } 
    else { options !== 'C';  alert("sorry, incorrect.");
    points -= 200; 
    scoreboard(points);
    }
    
}
function myFunctionG() {
    var options = prompt("These two rappers were very recently in a public fued. \n A. Common and Kendrick Lamar \n B. Kanye West and Ray-J \n C. Nicki Minaj and Remy ma \n D. J-Cole and Chance the Rapper");
    if (options === 'C') { 
        
      alert("correct!");
      points += 200;
      scoreboard(points);
    } 
    else { options !== 'C';  alert("sorry, incorrect.");
    points -= 200; 
    scoreboard(points);
    }
    
}
function myFunctionH() {
    var options = prompt("This rap group lost a member to diabetes? \n A. A Tribe called Quest \n B. De la Soul \n C. One Direction \n D. Hot Boys");
    if (options === 'A') { 
        
      alert("correct!");
      points += 200;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 200; 
    scoreboard(points);
    }

    
}
function myFunctionI() {
    var options = prompt("Beats has been most recently aquired by \n A. Microsoft \n B. Apple \n C. Google \n D. Spotify");
    if (options === 'A') { 
        
      alert("correct!");
      points += 200;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect");
    points -= 200; 
    scoreboard(points);
    }
    
}
function myFunctionJ() {
    var options = prompt("This album cover featured a group of men posing outside of the White House \n A. Life of Pablo \n B. To Pimp a Butterfly\n C. 4 Your Eyes Only \n D. The Coloring Book");
    if (options === 'B') { 
        
      alert("correct!");
      points += 200;
      scoreboard(points);
    } 
    else { options !== 'B';  alert("sorry, incorrect.");
    }
    
}
function myFunctionK() {
    var options = prompt("This rapper also excels in writing, comedy, and acting \n A. Kanye West \n B. Lil Wayne \n C. Childish Gambino \n D. Common");
    if (options === 'B') { 
        
      alert("correct!");
      points += 300;
      scoreboard(points);
    } 
    else { options !== 'B';  alert("sorry, incorrect.");
    points -= 300; 
    scoreboard(points);
    }
    
}
function myFunctionL() {
    var options = prompt("This rapper recently donated one million dollars to the Chicago Public School System \n A. Chance the rapper \n B. Jay-Z \n C. Common \n D. Master-P");
    if (options === 'A') { 
        
      alert("correct!");
      points += 300;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 300; 
    scoreboard(points);
    }
    
}
function myFunctionM() {
    var options = prompt("Will Smith was apart of this rap duo in the 90's \n A. A Tribe Called Quest \n B. De la Soul \n C. Boys II Men \n D. DJ Jazzy Jeff and the Fresh Prince");
    if (options === 'D') { 
        
      alert("correct!");
      points += 300;
      scoreboard(points);
    } 
    else { options !== 'D';  alert("sorry, incorrect");
    points -= 300; 
    scoreboard(points);
    }
    
}
function myFunctionN() {
    var options = prompt("Prince only used this streaming service before his passing \n A. Tidal \n B. Spotify \n C. Apple Music \n D. Google Play");
    if (options === 'A') { 
        
      alert("correct!");
      points += 300;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 300; 
    scoreboard(points);
    }
    
}
function myFunctionO() {
    var options = prompt("A shortened version of an album is commonly known as what? \n A. Mix tape \n B. E.P. \n C. Album \n D. Single");
    if (options === 'B') { 
        
      alert("correct!");
      points += 300;
      scoreboard(points);
    } 
    else { options !== 'B';  alert("sorry, incorrect.");
    points -= 300; 
    scoreboard(points);
    }
    
}
function myFunctionP() {
    var options = prompt("This rapper famously recorded this album while on 10 day suspention \n A. Chance the Rapper \n B. Ice-T \n C. Will Smith \n D. Common");
    if (options === 'A') { 
        
      alert("correct!");
      points += 400;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 400; 
    scoreboard(points);
    }
    
}
function myFunctionQ() {
    var options = prompt("This rapper's daughter is the survivor of a heart condition \n A. Kanye West \n B. Master-P \n C. Q-Tip \n D. Chance the Rapper");
    if (options === 'D') { 
        
      alert("correct!");
      points += 400;
      scoreboard(points);
    } 
    else { options !== 'D';  alert("sorry, incorrect");
    points -= 400; 
    scoreboard(points);
    }
    
}
function myFunctionR() {
    var options = prompt("This famous rap group formed in the 80's from Long Island, New York \n A. De la Soul \n B. A Tribe Called Quest\n C. Hot Boys \n D. Migos");
    if (options === 'A') { 
       
      alert("correct!");
      points += 400;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 400; 
    scoreboard(points);
    }
    
}
function myFunctionS() {
    var options = prompt("This Apple software is commonly used for producing beats \n A. Fruity Loops \n B. Logic Pro \n C. Auxy \n D. Beatwave");
    if (options === 'A') { 
        
      alert("correct!");
      points += 400;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 400; 
    scoreboard(points);
    }
    
}
function myFunctionT() {
    var options = prompt("J-Cole's most recent album is called what? \n A. Four Your Eyes Only \n B. Awaken My Soul \n C. Life of Pablo \n D. self titled");
    if (options === 'A') { 
       
      alert("correct!");
      points += 400;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 400; 
    scoreboard(points);
    }
    
}
function myFunctionU() {
    var options = prompt("This rapper famously interrupted Taylor Swift's acceptance speech at the 2009 VMA's \n A. Common \n B. J-Cole \n C. Kany West \n D. Jay-Z");
    if (options === 'C') { 
        
      alert("correct!");
      points += 500;
      scoreboard(points);
    } 
    else { options !== 'C';  alert("sorry, incorrect");
    points -= 500; 
    scoreboard(points);
    }
    
}
function myFunctionV() {
    var options = prompt("This London Rapper released a mix tape featuring a series called Queen Speech \n A. Lady Leshurr \n B. Sammus \n C. Lorde \n D. Missy Elliot");
    if (options === 'A') { 
        
      alert("correct!");
      points += 500;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 500; 
    scoreboard(points);
    }
    
}
function myFunctionW() {
    var options = prompt("This rapper famously has paw prints tattooed on their chest \n A. Iggy Azalea \n B. Missy Elliot \n C. Eve \n D. Nicki Minaj");
    if (options === 'C') {  
        
      
     
      alert("correct!");
      points += 500;
      scoreboard(points);
    } 
    else { options !== 'C';  alert("sorry, incorrect.");
    points -= 500; 
    scoreboard(points);
    }  
}
function myFunctionX() {
    var options = prompt("This Atlanta rap group commonly articulates lyrics in the form of triplets  \n A. Outcast \n B. Paper Boi \n C. Hot Boys \n D. Migos");
    if (options === 'D') { 
        
      alert("correct!");
      points += 500;
      scoreboard(points);
    } 
    else { options !== 'D';  alert("sorry, incorrect.");
    points -= 500; 
    scoreboard(points);
    }
    
}
function myFunctionY() {
    var options = prompt("This streaming service was the first to pay artist per song play \n A. Apple Music \n B. Spotify \n C. Tidal \n D. Google Play ");
    if (options === 'A') { 
        
      alert("correct!");
      points += 500;
      scoreboard(points);
    } 
    else { options !== 'A';  alert("sorry, incorrect.");
    points -= 500; 
    scoreboard(points);
    }
}


//create a function addPoints
//call function addPoints in the first if statement of the other functions
//specify point amount as parameter
//add this logic to subtract points in the else statement

