

// // function OpenLinkedIn(){
// //         window.open("https://www.linkedin.com/in/michael-cox-2033223b1/");
// // }
// // function OpenGitHub(){
// //         window.open("https://github.com/mikeycox075-stack");
// // }

// // function StartGameMechanics(){
// //     //adding variables which will be used later in the game

// //     const PlayerGuess = 0; 

// //     let CurrentPlayer = "";
// //     let OtherPlayer = " ";

// //     let playerGuessCount2 = 0;
// //     let playerGuessCount1 = 0;

// //     let gameCount = 0;
// //     let GameStaus = 0;
// //     //end of variables
// //     try{
// //         //taking game status, will cut game if it increases by 1
// //             const minChoice = Number(prompt("Please input the minimum range for your number: "));
// //             const maxChocie = Number(prompt("Please input the Maximum range for your number: "));
// //             const maxGuesses = Number(prompt("Please input the Maxium Guesses: "));
// //             const P1Number = Number(prompt("Please input your number player 1: "));
// //             const P2Number = Number(prompt("Please input your number player 2: "));

// //             if (P1Number < minChoice || P1Number > maxChocie || P2Number < minChoice || P2Number > maxChocie) {
// //                 alert("You have inputted the Invalid Numbers");
// //                 alert("Program Restarting");
// //             }//if statement that checks inputs are invalid before starting game
// //                 while (P1Number > minChoice && P1Number < maxChocie && P2Number > minChoice && P2Number < maxChocie) {
// //                     while (gameCount == 0 && playerGuessCount1 < maxGuesses) {
// //                         CurrentPlayer = "Player 1";
// //                         OtherPlayer = "Player 2s";
// //                         const PlayerGuess = Number(prompt("Please " + CurrentPlayer + " Please Guess " + OtherPlayer +
// //                                         " number: "));
// //                             if (PlayerGuess > P2Number) {
// //                                 alert("Too High");
// //                                 playerGuessCount1++;
// //                             } else if (PlayerGuess < P2Number) {
// //                                 alert("Too Low");
// //                                 playerGuessCount1++;
// //                             } else if (PlayerGuess == P2Number) {
// //                                 alert("You got the number!!!");
// //                                 gameCount++;
// //                                 playerGuessCount1++;
// //                             } else {
// //                                 alert("Invalid Input");
// //                             }//end final else
// //                     }//end of player 1 while
// //                     while (gameCount == 1 && playerGuessCount2 < maxGuesses) {
// //                         CurrentPlayer = "Player 2;";
// //                         OtherPlayer = "Player 1s";
// //                         const PlayerGuess = Number(prompt("Please " + CurrentPlayer + " Please Guess " + OtherPlayer +
// //                         " number: "));
// //                             if (PlayerGuess > P1Number) {
// //                                 alert("Too High");
// //                                 playerGuessCount2++;
// //                             } else if (PlayerGuess < P1Number) {
// //                                 alert("Too Low");
// //                                 playerGuessCount2++;
// //                             } else if (PlayerGuess == P1Number) {
// //                                 alert("You got the number!!!");
// //                                 gameCount++;
// //                                 playerGuessCount2++;
// //                             } else {
// //                                 alert("Invalid Input");
// //                             }//end of final if
// //                     }//end of player 2 while
// //                      while (gameCount == 2) {
// //                         if (playerGuessCount1 > playerGuessCount2) {
// //                                 alert("Winner is Player 2!!!");
// //                                 gameCount++;
// //                         } else if (playerGuessCount2 < playerGuessCount1) {
// //                                 alert("Winner is Player 1!!!");
// //                                 gameCount++;
// //                         }//end of else if
// //                         else if(playerGuessCount1 == playerGuessCount2){
// //                             alert("Its a tie");
// //                             gameCount++;
// //                         }
// //                     }//end of end of game while
// //                 } //while loops that check for valid inputs at start of game, this ensures that the game will run smoothly; 
// //     }//end of try
// //     catch(error){
// //         alert("An error has occured, program restarting.")
// //         alert("Error");
// //     }//end of catch
// // }//end of StartGameMechanics()

// //declaring variables
// const userInput = document.getElementById("userInput");
// const GameBox = document.getElementById("GameBox");
// let currentStep = 0;
// let minRange;
// let maxRange;
// let maxGuess;
// let PlayerOneGuess;
// let PlayerTwoGuess;
// let PlayerOneGuessCount = 0;
// let PlayerTwoGuessCount = 0;
// let PlayerOneNum;
// let PlayerTwoNum;

// function StartGame1(){
//     const panel = document.getElementById("Hidden");
//     if (panel.style.display === "block") {
//         panel.style.display = "none";
//     } else {
//         panel.style.display = "block";
//     }
//     StartGame();
// }

// function OpenLinkedIn(){
//         window.open("https://www.linkedin.com/in/michael-cox-2033223b1/");
// }
// function OpenGitHub(){
//         window.open("https://github.com/mikeycox075-stack");
// }
// function AddMessage(text,type){
//     const msg = document.createElement("div");
//         msg.classList.add("Message",type);
//         msg.innerText = text;
//         GameBox.appendChild(msg);
//         GameBox.scrollTop = GameBox.scrollHeight;
// }//end of Add Message;
// function StartGame(){
//     AddMessage("Welcome to the Numbers Guessing Game","game");
//     AddMessage("Enter Minimum range: ","game");
// }//end of start game 
// function StartGameMechanics(){
//     try{
//         const value = userInput.value;
//         if (currentStep ===0){
//             minRange = Number(value);

//             if(isNaN(minRange)){
//                 AddMessage("Please Enter a valid Number","game");
//                 return;
//             }
//             AddMessage(value,"player");
//             AddMessage("Enter Maxium range: ","game");
//             currentStep = 1;
//         }else if (currentStep === 1){
//             maxRange = Number(value);

//                 if(isNaN(maxRange)){
//                     AddMessage("Please Enter a valid Number","game");
//                     return;
//                 }
//                 else if(minRange > maxRange){
//                     AddMessage("Please enter a valid number","game");
//                     return;       
//                 }//end of else if

//             AddMessage(value,"player");
//             AddMessage("Enter MaxGuesses: ","game");
//             currentStep = 2;
//         }else if(currentStep === 2){
//             maxGuess = Number(value);
//         if(isNaN(maxGuess)){
//             AddMessage("Please Enter a valid Number","game");
//             return;   
//         }//end of else if
//             AddMessage(value,"player");
//             AddMessage("Enter your Number Player one: ","game");
//             currentStep = 3;
//         }else if(currentStep === 3){
//             PlayerOneNum = Number(value);
//                 if(isNaN(PlayerOneNum)){
//                     AddMessage("Please Enter a valid Number","game");
//                     return;   
//                 }//end of else if
//             AddMessage(value,"player");
//             AddMessage("Enter your Number Player Two: ","game");
//             currentStep = 4;
//         }else if(currentStep === 4){
//             PlayerTwoNum = Number(value);
//                 if(isNaN(PlayerTwoNum)){
//                     AddMessage("Please Enter a valid Number","game");
//                     return;   
//                 }//end of else if
//             AddMessage(value,"player");
//             AddMessage("Please Guess Player Two's number Player One: ");
//             currentStep = 5;
//         }else if(currentStep === 5){
//             PlayerOneGuess = Number(value);


//             while (PlayerOneGuess != PlayerTwoNum || PlayerOneGuessCount < maxGuess){
//                 AddMessage("Please Guess Player Two's number: ");
//                 PlayerOneGuess = Number(value);
//                 if (PlayerOneGuess > PlayerTwoNum){
//                     AddMessage("Too High","game");
//                     PlayerOneGuessCount++;
//                 }else if(PlayerOneGuess < PlayerTwoNum){
//                     AddMessage("Too Low","game");
//                     PlayerTwoGuessCount++;
//                 }else if (PlayerOneGuess == PlayerTwoNum){
//                     AddMessage("You Guessed the Correct Number","game");
//                     PlayerTwoGuessCount++;                }//end
//                 AddMessage("Please Guess Player Ones's number Player Two: ");
//             }
//             if (PlayerOneGuess == PlayerTwoNum){
//                 AddMessage("You Guessed the Correct Number","game");
//                 AddMessage("Please Guess Player Ones's number Player Two: ");
//                 currentStep = 6;
//             }



//         }else if(currentStep === 6){
//             PlayerTwoGuess = Number(value);
//             while (PlayerTwoGuess != PlayerOneNum || PlayerTwoGuessCount < maxGuess){



//                 if (PlayerTwoGuess > PlayerOneNum){
//                     AddMessage("Too High","game");
//                     PlayerTwoGuessCount++;
//                 }else if(PlayerTwoGuess < PlayerOneNum){
//                     AddMessage("Too Low","game");
//                     PlayerTwoGuessCount++;
//                 }else if (PlayerTwoGuess === PlayerOneNum){
//                     AddMessage("You Guessed the Correct Number","game");
//                     PlayerTwoGuessCount++;
//                 }//end
//                 currentStep=7;
//             }//end of while
//         }else if (currentStep === 7){
//             if (PlayerTwoGuessCount > PlayerOneGuessCount){
//                 AddMessage("The winner is Player One","game");
//             }else if(PlayerOneGuessCount > PlayerTwoGuessCount){
//                 AddMessage("The Winner is Player Two");
//             }else if (playerGuessCount1 === PlayerTwoGuessCount){
//                 AddMessage("Its a tie");
//             }
//         }
//         }catch(error){
//             AddMessage("An error has occured, reset by clicking start game");
//         }


// }//end of start game mechanics

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
            AddMessage("Please Guess Player Two's number Player One: ");
        }else if(currentStep === 5){
            PlayerOneGuess = Number(value);
                if (PlayerOneGuess > PlayerTwoNum){
                    AddMessage("Too High","game");
                    PlayerOneGuessCount++;
                }else if(PlayerOneGuess < PlayerTwoNum){
                    AddMessage("Too Low","game");
                    PlayerTwoGuessCount++;
                }else if (PlayerOneGuess === PlayerTwoNum){
                    AddMessage("You Guessed the Correct Number","game");
                    PlayerTwoGuessCount++;
                    currentStep = 6;
                }//end
        }else if(currentStep === 6){
            AddMessage("Please Guess Player Ones's number Player Two: ");
            PlayerTwoGuess = Number(value);
                if (PlayerTwoGuess > PlayerOneNum){
                    AddMessage("Too High","game");
                    PlayerTwoGuessCount++;
                }else if(PlayerTwoGuess < PlayerOneNum){
                    AddMessage("Too Low","game");
                    PlayerTwoGuessCount++;
                }else if (PlayerTwoGuess === PlayerOneNum){
                    AddMessage("You Guessed the Correct Number","game");
                    PlayerTwoGuessCount++;
                    currentStep=7;
                }//end
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

        
}//end of start game mechanics