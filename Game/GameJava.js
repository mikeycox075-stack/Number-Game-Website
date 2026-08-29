

function StartGame(){
    alert("Welcome to The Number Guessing Game");
    alert("Rules can be found on GitHub");
    // alert()
    StartGameMechanics();
}//end of start game 

function StartGameMechanics(){
    //adding variables which will be used later in the game

    const PlayerGuess = 0; 

    let CurrentPlayer = "";
    let OtherPlayer = " ";

    const maxGuesses = 0;

    let playerGuessCount2 = 0;
    let playerGuessCount1 = 0;

    let gameCount = 0;
    let GameStaus = 0;
    //end of variables
    try{
        //taking game status, will cut game if it increases by 1
            const minChoice = Number(prompt("Please input the minimum range for your number: "));
            const maxChocie = Number(prompt("Please input the Maximum range for your number: "));
            const maxGuesses = Number(prompt("Please input the Maxium Guesses: "));
            const P1Number = Number(prompt("Please input your number player 1: "));
            const P2Number = Number(prompt("Please input your number player 2: "));

            if (P1Number < minChoice || P1Number > maxChocie || P2Number < minChoice || P2Number > maxChocie) {
                alert("You have inputted the Invalid Numbers");
                alert("Program Restarting");
            }//if statement that checks inputs are invalid before starting game
                while (P1Number > minChoice && P1Number < maxChocie && P2Number > minChoice && P2Number < maxChocie) {
                    while (gameCount == 0 && playerGuessCount1 < maxGuesses) {
                        CurrentPlayer = "Player 1";
                        OtherPlayer = "Player 2s";
                        const PlayerGuess = Number(prompt("Please " + CurrentPlayer + " Please Guess " + OtherPlayer +
                                        " number: "));
                            if (PlayerGuess > P2Number) {
                                 alert("Too High");
                                    playerGuessCount1++;
                            } else if (PlayerGuess < P2Number) {
                                alert("Too Low");
                                playerGuessCount1++;
                            } else if (PlayerGuess == P2Number) {
                                alert("You got the number!!!");
                                gameCount++;
                            } else {
                                alert("Invalid Input");
                            }//end final else
                    }//end of player 1 while
                    while (gameCount == 1 && playerGuessCount2 < maxGuesses) {
                        CurrentPlayer = "Player 2;";
                        OtherPlayer = "Player 1s";
                        const PlayerGuess = Number(prompt("Please " + CurrentPlayer + " Please Guess " + OtherPlayer +
                        " number: "));
                            if (PlayerGuess > P1Number) {
                                alert("Too High");
                                playerGuessCount2++;
                            } else if (PlayerGuess < P1Number) {
                                alert("Too Low");
                                playerGuessCount2++;
                            } else if (PlayerGuess == P1Number) {
                                alert("You got the number!!!");
                                gameCount++;
                            } else {
                                alert("Invalid Input");
                            }//end of final if
                    }//end of player 2 while
                     while (gameCount == 2) {
                        if (playerGuessCount1 > playerGuessCount2) {
                                alert("Winner is Player 2!!!");
                                gameCount++;
                        } else if (playerGuessCount2 < playerGuessCount1) {
                                alert("Winner is Player 1!!!");
                                gameCount++;
                        }//end of else if
                        else{
                            alert("Its a tie");
                        }
                    }//end of end of game while
                } //while loops that check for valid inputs at start of game, this ensures that the game will run smoothly; 
    }//end of try
    catch(error){
        alert("An error has occured, program restarting.")
        alert("Error");
    }//end of catch
}//end of StartGameMechanics()