import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Program{
    public static void main(String[] args) {
        BankMethods bank = new BankMethods();
        Scanner sc = new Scanner(System.in);
        int choice;
        int choiceTwo = 1;
                    System.out.println(" ");
                    System.out.println("=== BANK LOGIN ===");
                    System.out.println(" ");
                    System.out.print("Email: ");
                    String email = sc.next();
                    System.out.print("Password: ");
                    String password = sc.next();
                    bank.LoadAccounts();
                    var user = bank.Login(email, password);

                    if (user == null) {
                        System.out.println("Login failed");
                        return;
                    }//end of if
        try {
            do {
                    System.out.println(" ");
                    System.out.println("Welcome " + user.GetName() + user.GetRole());
                    System.out.println(" ");
                    System.out.println("===== MENU =====");
                    System.out.println("1. Deposit");
                    System.out.println("2. Withdraw");
                    System.out.println("3. Transfer");
                    System.out.println("4. Balance");
                    System.out.println("5. Apply Interest");
                    System.out.println("6. Exit");

                    if(user.GetRole().equalsIgnoreCase("SuperAdmin") && user.GetRole() != "Admin"){
                    System.out.println("7. Add an Account");
                    System.out.println("8. View All Accounts");
                    System.out.println("9. Remove an Account");
                    System.out.println("10. Edit account Details");
                    }//end of if
                    else if (user.GetRole().equalsIgnoreCase("Admin") || user.GetRole().equalsIgnoreCase("SuperAdmin")) {
                        System.out.println("8. View All Accounts");
                        System.out.println("9. Remove an Account");
                        System.out.println("10. Edit account Details");
                    }//end of else if
                    else{
                        System.out.println(" ");
                        System.out.println("Admin Permissions not provided");
                    }//end of else
                    System.out.println(" ");
                    System.out.print("Choice: ");
                    choice = sc.nextInt();
                    sc.nextLine();

                    if (choice == 1) {
                        System.out.print("Amount: ");
                        double amount = sc.nextInt();
                        sc.nextLine();
                        bank.Deposit(user, amount);
                        System.out.println("Successfully added amount.");
                    } else if (choice == 2) {
                        System.out.print("Amount: ");
                        double amount = sc.nextInt();
                        sc.nextLine();
                        bank.Withdraw(user, amount);
                        System.out.println("Successfully withdrew from account.");
                    } else if (choice == 3) {
                        System.out.print("Send to email: ");
                        String targetemail = sc.nextLine();
                        var target = bank.FindAccount(targetemail);
                        System.out.print("Amount: ");
                        int amount = sc.nextInt();
                        sc.nextLine();
                        bank.Transfer(user, target, amount);
                        System.out.println("Successfully transfered from account.");
                    } else if (choice == 4) {
                        System.out.println(" ");
                        System.out.println("Balance: " + user.GetBalance());
                        System.out.println("Successfully printed balance");
                    } else if (choice == 5) {
                        bank.ApplyInterest(user);
                        System.out.println(" ");
                        System.out.print("Interest Applied");
                        System.out.println(" ");
                    } else if (choice == 8) {
                        if (user.GetRole().equalsIgnoreCase("Admin") || user.GetRole().equalsIgnoreCase("SuperAdmin")){
                            System.out.println(" ");
                            bank.ListAccounts();
                            System.out.println(" ");
                            System.out.println("Successfully listed accounts");
                        }//end of if
                    } else if (choice == 6) {
                        bank.SaveAccounts();
                        System.out.println("Banking Account Data saved");
                        System.out.println(" ");
                        System.out.println("Please input 0 to quit");
                        System.out.println("Or Please input 8 to go back to main menu");
                        System.out.println(" ");
                        System.out.print("Choice: ");
                        choiceTwo = sc.nextInt();
                        sc.nextLine();
                        if (choiceTwo == 8) {
                            System.out.println(" ");
                            System.out.print("Returning to menu");
                            System.out.println(" ");
                        } else if (choiceTwo == 0){
                            System.out.println(" ");
                            System.out.println("Program closing");
                        }//end of if
                    }else if(choice == 7){
                        if(user.GetRole().equalsIgnoreCase("SuperAdmin")){
                            bank.LoadAccounts();
                            AddAccount(bank);
                            bank.SaveAccounts();
                        }//end of if
                    }//end of else if final
                    else if(choice ==  9){
                        if(user.GetRole().equalsIgnoreCase("Admin") || user.GetRole().equalsIgnoreCase("SuperAdmin")){
                            bank.LoadAccounts();
                            System.out.println("Email: ");
                            String selectedEmail = sc.nextLine();
                            System.out.println(" ");
                            System.out.println("Password: ");
                            String selectedPassword = sc.nextLine();
                            bank.RemoveAccount(selectedEmail,selectedPassword);
                            bank.SaveAccounts();
                            System.out.println("Successfully Deleted account");
                        }//end of if
                    }else if (choice == 10){
                        if(user.GetRole().equalsIgnoreCase("Admin") || user.GetRole().equalsIgnoreCase("SuperAdmin")){
                            bank.LoadAccounts();
                            System.out.print("Email: ");
                            String selectedEmail = sc.nextLine();
                            System.out.println(" ");
                            System.out.print("Password: ");
                            String selectedPassword = sc.nextLine();
                            bank.EditAccountDetails(selectedEmail,selectedPassword);
                            bank.SaveAccounts();
                            System.out.println("Successfully edited account");
                        }//end of if
                    }//end of else if
                    //end of choices
            }//end of do 1
            while (choiceTwo != 0);
        }//end of try
        catch (Exception e) {
            System.out.println("Please enter a valid number");
        }//end of exception
    }//end of main
    static void AddAccount(BankMethods bank){
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        String name = sc.nextLine();

        System.out.print("Address: ");
        String address = sc.nextLine();

        System.out.print("Phone: ");
        String phone = sc.nextLine();

        System.out.print("Email: ");
        String email = sc.nextLine();

        System.out.print("Password: ");
        String password = sc.nextLine();

        System.out.print("Balance: ");
        double balance = sc.nextInt();
        sc.nextLine();

        System.out.print("Type (Adult/Teen): ");
        String type = sc.nextLine();

        System.out.print("Role (Admin/User): ");
        String role = sc.nextLine();

        bank.AddAccount(new BankAccount(name, address, phone, email, password, balance, type, role));
    }//end of function 2
}//end of class


