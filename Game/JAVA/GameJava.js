//declaring variables
const userInput = document.getElementById("userInput");
const GameBox = document.getElementById("GameBox");
let currentStep = 0;
let minRange;
let maxRange;
let maxGuess;
let PlayerOneGuess;
let PlayerTwoGuess;
let PlayerOneGuessCount;
let PlayerTwoGuessCount;

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
function StartGame(){
    AddMessage("Welcome to the Numbers Guessing Game","game");
    AddMessage("Enter Minimum range: ","game");
    StartGameMechanics();
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
            MaxRange = Number(value);

                if(isNaN(MaxRange)){
                    AddMessage("Please Enter a valid Number","game");
                    return;
                }
                else if(minRange > MaxRange){
                    AddMessage("Please enter a valid number","game");
                    return;       
                }//end of else if

            AddMessage(value,"player");
            AddMessage("Enter MaxGuesses: ","game");
            currentStep = 2;
        }else if(currentStep === 2){
            MaxGuess = Number(value);
        if(isNaN(MaxGuess)){
            AddMessage("Please Enter a valid Number","game");
            return;   
        }//end of else if
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
        }else if(currentStep===5){
            PlayerOneGuess = Number(value);
            while (PlayerOneGuess != PlayerTwoNum || PlayerOneGuessCount < MaxGuess){
                if (PlayerOneGuess > PlayerTwoNum){
                    AddMessage("Too High","game");
                    playerOneGuessCount++;
                }else if(PlayerOneGuess < PlayerTwoNum){
                    AddMessage("Too Low","game");
                }else if (PlayerOneGuess === PlayerTwoNum){
                    AddMessage("You Guessed the Correct Number","game");
                }//end
                currentStep = 6;
            }
        }else if(currentStep === 6){
            PlayerTwoGuess = Number(value);
            while (PlayerTwoGuess != PlayerOneNum || PlayerTwoGuessCount < MaxGuess){
                if (PlayerTwoGuess > PlayerOneNum){
                    AddMessage("Too High","game");
                    playerTwoGuessCount++;
                }else if(PlayerTwoGuess < PlayerOneNum){
                    AddMessage("Too Low","game");
                }else if (PlayerTwoGuess === PlayerOneNum){
                    AddMessage("You Guessed the Correct Number","game");
                }//end
                currentStep=7;
            }//end of while
        }else if (currentStep === 7){
            if (PlayerTwoGuessCount > PlayerOneGuessCount){
                AddMessage("The winner is Player One","game");
            }else if(PlayerOneGuessCount > PlayerTwoGuessCount){
                AddMessage("The Winner is Player Two");
            }else if (playerGuessCount1 === playerTwoGuessCount){
                AddMessage("Its a tie");
            }
        }
        }catch(error){
            AddMessage("An error has occured, reset by clicking start game");
        }
}//end of start game mechanics

