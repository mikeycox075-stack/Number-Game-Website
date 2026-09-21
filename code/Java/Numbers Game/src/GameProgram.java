import java.util.Scanner;

public class GameProgram {
    public static void main(String[] args){
        int gameChociePlay = 0;
        while (gameChociePlay == 0){
            Scanner sc = new Scanner(System.in);
            System.out.println(" ");
            System.out.println("Do you want to play?");
            System.out.println(" ");
            System.out.println("0. Yes");
            System.out.println("1. No");
            System.out.println(" ");
            System.out.print("Choice: ");
            gameChociePlay = sc.nextInt();
            sc.nextLine();
            int programRunState = 1;
            System.out.println("Welcome to The Number Guessing Game");
            System.out.println(" ");
            System.out.println("In this game you are required to guess your oponents number " +
                    "within a selected amount of guesses, each time you guess you will be notified if your number" +
                    "is higher or lower, you can select customer ranges for your selected number and " +
                    "the amount of guesses you are allowed.");
            StartGame(sc, programRunState);
            //Call a function that starts the game,

        }//end of while in main
    }//end of main

    public static void StartGame(Scanner sc,int programRunState){

            int gameCount = 0;
            int minChoice = 0;
            int maxChocie = 0;
            int PlayerGuess = 0;
            String CurrentPlayer = "";
            String OtherPlayer = " ";
            int maxGuesses = 0;
            int playerGuessCount2 = 0;
            int playerGuessCount1 = 0;
            int GameStaus = 0;
            try {
                while (GameStaus == 0) {
                    //select range
                    System.out.println(" ");
                    System.out.print("Please input the minimum range for your number: ");
                    minChoice = sc.nextInt();
                    sc.nextLine();
                    System.out.println(" ");
                    System.out.print("Please input the Maximum range for your number: ");
                    maxChocie = sc.nextInt();
                    sc.nextLine();
                    System.out.println(" ");
                    System.out.print("Please input the Maxium Guesses: ");
                    maxGuesses = sc.nextInt();
                    sc.nextLine();
                    System.out.println(" ");
                    System.out.print("Please input your number player 1: ");
                    int P1Number = sc.nextInt();
                    sc.nextLine();
                    System.out.println(" ");
                    System.out.print("Please input your number player 2: ");
                    int P2Number = sc.nextInt();
                    sc.nextLine();
                    System.out.println(" ");
                    if (P1Number < minChoice || P1Number > maxChocie || P2Number < minChoice || P2Number > maxChocie) {
                        System.out.println(" ");
                        System.out.println("You have inputted the Invalid Numbers");
                        System.out.println("Program Restarting");
                    }
                    while (P1Number > minChoice && P1Number < maxChocie && P2Number > minChoice && P2Number < maxChocie) {
                        while (gameCount == 0 && playerGuessCount1 < maxGuesses) {
                            CurrentPlayer = "Player 1";
                            OtherPlayer = "Player 2s";
                            System.out.println(" ");
                            System.out.println("Please " + CurrentPlayer + " Please Guess " + OtherPlayer +
                                    " number.");
                            System.out.println(" ");
                            System.out.print("Guess: ");
                            PlayerGuess = sc.nextInt();
                            sc.nextLine();
                            if (PlayerGuess > P2Number) {
                                System.out.println(" ");
                                System.out.println("Too High");
                                playerGuessCount1++;
                            } else if (PlayerGuess < P2Number) {
                                System.out.println(" ");
                                System.out.println("Too Low");
                                playerGuessCount1++;
                            } else if (PlayerGuess == P2Number) {
                                System.out.println(" ");
                                System.out.println("You got the number!!!");
                                gameCount++;
                            } else {
                                System.out.println(" ");
                                System.out.println("Invalid Input");
                            }
                        }//end of while one
                        while (gameCount == 1 && playerGuessCount2 < maxGuesses) {
                            CurrentPlayer = "Player 2;";
                            OtherPlayer = "Player 1s";
                            System.out.println(" ");
                            System.out.println("Please " + CurrentPlayer + " Please Guess " + OtherPlayer +
                                    " number.");
                            System.out.println(" ");
                            System.out.print("Guess: ");
                            PlayerGuess = sc.nextInt();
                            sc.nextLine();
                            if (PlayerGuess > P1Number) {
                                System.out.println(" ");
                                System.out.println("Too High");
                                playerGuessCount2++;
                            } else if (PlayerGuess < P1Number) {
                                System.out.println(" ");
                                System.out.println("Too Low");
                                playerGuessCount2++;
                            } else if (PlayerGuess == P1Number) {
                                System.out.println(" ");
                                System.out.println("You got the number!!!");
                                gameCount++;
                            } else {
                                System.out.println(" ");
                                System.out.println("Invalid Input");
                            }
                        }//end of while two
                        while (gameCount == 2) {
                            if (playerGuessCount1 > playerGuessCount2) {
                                System.out.println(" ");
                                System.out.println("Winner is Player 2!!!");
                                gameCount++;
                            } else if (playerGuessCount2 < playerGuessCount1) {
                                System.out.println(" ");
                                System.out.println("Winner is Player 1!!!");
                                gameCount++;
                            }//end of else if
                        }//end of while three
                    }//end of while four
                }//end of while five
            }catch(Exception e){
                System.out.println(" ");
                System.out.println("Invalid Inputs detected, program restarting");

            }//end of exception
    }//End of Start Game
}//end of class