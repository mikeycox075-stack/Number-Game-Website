

const userInput = document.getElementById("userInput");
const GameBox = document.getElementById("GameBox");
let currentStep = 0;
let minRange;
let maxRange;
let maxGuess;
let PlayerOneGuess;
let PlayerTwoGuess;
let PlayerOneGuessCount = 0;
let PlayerTwoGuessCount = 0;
let PlayerOneNum;
let PlayerTwoNum;

userInput.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        StartGameMechanics();
    }
});

function OpenLinkedIn(){
        window.open("https://www.linkedin.com/in/michael-cox-2033223b1/");
}
function OpenGitHub(){
        window.open("https://github.com/mikeycox075-stack");
}
function AddMessage(text,type){
    const msg = document.createElement("div");
        msg.classList.add("Message",type);
        msg.innerText = text;
        GameBox.appendChild(msg);
        GameBox.scrollTop = GameBox.scrollHeight;
}//end of Add Message;
function StartGame1(){
    const panel = document.getElementById("Hidden");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    StartGame();
}
function StartGame(){
    AddMessage("Welcome to the Numbers Guessing Game","game");
    AddMessage("Enter Minimum range: ","game");
}//end of start game 
function StartGameMechanics(){
    try{
        const value = userInput.value;
        if (currentStep ===0){
            minRange = Number(value);

            if(isNaN(minRange)){
                AddMessage("Please Enter a valid Number","game");
                return;
            }
            AddMessage(value,"player");
            AddMessage("Enter Maxium range: ","game");
            currentStep = 1;
        }else if (currentStep === 1){
            maxRange = Number(value);

                if(isNaN(maxRange)){
                    AddMessage("Please Enter a valid Number","game");
                    return;
                }
                else if(minRange > maxRange){
                    AddMessage("Please enter a valid number","game");
                    return;       
                }//end of else if

            AddMessage(value,"player");
            AddMessage("Enter MaxGuesses: ","game");
            currentStep = 2;
        }else if(currentStep === 2){
            maxGuess = Number(value);
        if(isNaN(maxGuess)){
            AddMessage("Please Enter a valid Number","game");
            return;   
        }
            AddMessage(value,"player");
            AddMessage("Enter your Number Player one: ","game");
            currentStep = 3;
        }else if(currentStep === 3){
            PlayerOneNum = Number(value);
                if(isNaN(PlayerOneNum)){
                    AddMessage("Please Enter a valid Number","game");
                    return;   
                }//end of else if
            AddMessage(value,"player");
            AddMessage("Enter your Number Player Two: ","game");
            currentStep = 4;
        }else if(currentStep === 4){
            PlayerTwoNum = Number(value);
                if(isNaN(PlayerTwoNum)){
                    AddMessage("Please Enter a valid Number","game");
                    return;   
                }//end of else if
            AddMessage(value,"player");
            currentStep = 5;
            AddMessage("Please Guess Player Two's number Player One: ");
        }else if(currentStep === 5){
            PlayerOneGuess = Number(value);
                if (PlayerOneGuessCount >= maxGuess){
                    PlayerOneGuessCount++;
                    AddMessage("You have not guessed player twos number correctly.")
                    AddMessage("Please Guess Player Ones's number Player Two: ");
                    currentStep = 6;
                }else if (PlayerOneGuess > PlayerTwoNum){
                    PlayerOneGuessCount++;
                    AddMessage("Too High");
                    AddMessage("Please guess again");
                    AddMessage("The remaining Number of Guesses are");
                    let remainingGuesses = maxGuess - PlayerOneGuessCount
                    AddMessage(remainingGuesses);
                }else if(PlayerOneGuess < PlayerTwoNum){
                    PlayerOneGuessCount++;
                    AddMessage("Too low");
                    AddMessage("Please guess again");
                    AddMessage("The remaining Number of Guesses are");
                    let remainingGuesses = maxGuess - PlayerOneGuessCount
                    AddMessage(remainingGuesses);
                }else if (PlayerOneGuess === PlayerTwoNum){
                    PlayerOneGuessCount++;
                    AddMessage("You Guessed the Correct Number","game");
                    AddMessage("Please Guess Player Ones's number Player Two: ");
                    currentStep = 6;
                }else if (PlayerOneGuessCount > maxGuess){
                    PlayerOneGuessCount++;
                    AddMessage("You have not guessed player twos number correctly.")
                    AddMessage("Please Guess Player Ones's number Player Two: ");
                    currentStep = 6;
                }
        }else if(currentStep === 6){
            PlayerTwoGuess = Number(value);
                if (PlayerTwoGuessCount >= maxGuess){
                    PlayerTwoGuessCount++;
                    AddMessage("You have not guessed player twos number correctly.")
                    currentStep = 7;
                }else if (PlayerTwoGuess > PlayerOneNum){
                    PlayerTwoGuessCount++;
                    AddMessage("Too High");
                    AddMessage("Please guess again");
                    AddMessage("The remaining number of Guesses are");
                    AddMessage(remainingGuessesTwo);
                    let remainingGuesses = maxGuess - PlayerTwoGuessCount
                    AddMessage(remainingGuessesTwo);
                }else if(PlayerTwoGuess < PlayerOneNum){
                    PlayerTwoGuessCount++;
                    AddMessage("Too Low");
                    AddMessage("Please guess again");
                    AddMessage("The remaining number of Guesses are");
                    let remainingGuesses = maxGuess - PlayerTwoGuessCount
                    AddMessage(remainingGuessesTwo);
                }else if (PlayerTwoGuess === PlayerOneNum){
                    PlayerTwoGuessCount++;
                    AddMessage("You Guessed the Correct Number","game");
                    currentStep = 7;
                }
        }else if (currentStep === 7){
            if (PlayerTwoGuessCount > PlayerOneGuessCount){
                AddMessage("The winner is Player One","game");
            }else if(PlayerOneGuessCount > PlayerTwoGuessCount){
                AddMessage("The Winner is Player Two");
            }else if (playerGuessCount1 === PlayerTwoGuessCount){
                AddMessage("Its a tie");
            }
            // MAKE RESTART PROGRAM UWU
        }
        }catch(error){
            AddMessage("An error has occured, reset by clicking start game");
        }
        userInput.value = "";
        
}//end of start game mechanics