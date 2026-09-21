import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class BankMethods{
    Scanner sc = new Scanner(System.in);
    public ArrayList<BankAccount> accounts = new ArrayList<>();
    private String name = "Unknown";

    public void LoadAccounts() {
        accounts.clear();
        try {
            File file = new File("accounts.txt");

            if (!file.exists()) {
                System.out.println("accounts.txt not found.");
                return;
            }//end of if

            Scanner reader = new Scanner(file);

            int lineNumber = 0;

            while (reader.hasNextLine()) {
                String line = reader.nextLine();
                lineNumber++;
                if (line == null || line.strip().isEmpty()) continue;
                String[] p = line.split(",");
                for (int i = 0; i < p.length; i++) {
                    p[i] = p[i].trim();
                }//end of for

                String name = p[0];
                String address = p[1];
                String phone = p[2];
                String email = p[3];
                String password = p[4];
                double balance = Double.parseDouble(p[5]);
                String accountType = p[6];
                String role = p[7];
                accounts.add(new BankAccount(name, address, phone, email, password, balance, accountType, role));

            }//end of while
            reader.close();
        }//end of try
        catch (FileNotFoundException e){
            System.out.println("No previous movie file found.");
        }//end of catch
    }//end of load accounts

    public void SaveAccounts(){
        if (accounts == null || accounts.isEmpty()) {
            System.out.println("No Bank Accounts to save. File not overwritten.");
            return;
        }//end of checking for nulls or empty
        try (PrintWriter pw = new PrintWriter("accounts.txt")) {
            for (var acc : accounts) {
                if (acc.isValid()){
                    pw.println(acc);
                }//end of if
                else{
                    System.out.println("The Movie details " +
                            "you have inputted are invalid");
                }//en of else
            } //end of for
        }//end of try
        catch (FileNotFoundException e){
            System.out.println("No previous Movie file found.");
        }//End of catch
    }//end of save movies

    public BankAccount Login(String email, String password){
        for (var acc : accounts){
            if (acc.GetEmail().equals(email) & acc.GetPassword().equals(password)){
                return acc;
            }//end of if
        }//end of for
        return null;
    }//end of login

    public void AddAccount(BankAccount acc){
        if (!acc.isValid()){
            System.out.println("Invalid account.");
            return;
        }//end of if
        accounts.add(acc);
        System.out.println(" ");
        System.out.println("Account added.");
    }//end of AddAccount

    public BankAccount FindAccount(String email){
        for (var acc : accounts){
            if (acc.GetEmail().equalsIgnoreCase(email))
                return acc;
        }//end of for
        return null;
    }//end of FindAccount

    public void RemoveAccount(String selectedEmail,String selectedPassword){
        var acc = FindAccount(selectedEmail);
        if (acc != null && acc.GetPassword().equals(selectedPassword)){
            extracted(acc);
            System.out.println("Account removed.");
        }
        else{
            System.out.println("Not found.");
        }
    }//end of RemoveAccount

    public void EditAccountDetails(String selectedEmail,String selectedPassword){
        var acc = FindAccount(selectedEmail);
        if (acc != null && acc.GetPassword().equals(selectedPassword)){
            System.out.println(" ");
            System.out.println("1. Name");
            System.out.println("2. Address");
            System.out.println("3. Phone");
            System.out.println("4. Email");
            System.out.println("5. Password");
            System.out.println("6. Account Type");
            if (acc.GetRole().equalsIgnoreCase("Admin")){
                System.out.println("7. Role");
            }//end of if
            System.out.println(" ");
            System.out.print("What would you like to edit: ");
            String DeetToEd = sc.nextLine();

            if (DeetToEd.equalsIgnoreCase("name") || DeetToEd.equals("1")){
                System.out.println(" ");
                System.out.print("Enter new Name: ");
                String NewName = sc.nextLine();
                acc.SetName(NewName);
            }else if (DeetToEd.equalsIgnoreCase("address") || DeetToEd.equals("2")){
                System.out.println(" ");
                System.out.print("Enter new Address: ");
                String NewAddress = sc.nextLine();
                acc.SetAddress(NewAddress);
            }else if (DeetToEd.equalsIgnoreCase("phone") ||
                    DeetToEd.equalsIgnoreCase("phonenumber")
                    || DeetToEd.equalsIgnoreCase("phone number") || DeetToEd.equals("3")){
                System.out.println(" ");
                System.out.print("Enter new Phone: ");
                String NewPhone = sc.nextLine();
                acc.SetPhone(NewPhone);
            }else if (DeetToEd.equalsIgnoreCase("email") || DeetToEd.equals("4")){
                System.out.println(" ");
                System.out.print("Enter new Email: ");
                String NewEmail = sc.nextLine();
                acc.SetEmail(NewEmail);
            }else if (DeetToEd.equalsIgnoreCase("password") || DeetToEd.equals("5")){
                System.out.println(" ");
                System.out.print("Enter new Password: ");
                String NewPassword = sc.nextLine();
                acc.SetPassword(NewPassword);
            }else if (DeetToEd.equalsIgnoreCase("account type") || DeetToEd.equals("6")){
                System.out.println(" ");
                System.out.print("Enter new Account Type: ");
                String NewAccoutType = sc.nextLine();
                acc.SetAccountType(NewAccoutType);
            }else if (DeetToEd.equalsIgnoreCase("role") && acc.GetRole().equalsIgnoreCase("SuperAdmin") || DeetToEd.equals("7")){
                System.out.println(" ");
                System.out.print("Enter new Role: ");
                String NewRole = sc.nextLine();
                acc.SetRole(NewRole);
            }
            //end of else if statements.
        }//end of if statement
        else {
            System.out.println("Not found.");
        }//end of else
    }//end of edit account details.

    private void extracted(BankAccount acc) {
        accounts.remove(acc);
    }

    public void ListAccounts(){
        for (var acc : accounts){
            System.out.println(acc.GetName() + acc.GetEmail());
        }//end of for
    }//end of ListAccounts

    public void Deposit(BankAccount acc, double amount){
        acc.SetBalance(acc.GetBalance() + amount);
    }//end of Deposit

    public void Withdraw(BankAccount acc, double amount){
        if (amount > acc.GetBalance()){
            System.out.println("Insufficient funds.");
            return;
        }//end of if
        acc.SetBalance(acc.GetBalance() - amount);
    }//end of withdraw

    public void Transfer(BankAccount from, BankAccount to, double amount){
        if (to == null){
            System.out.println("Target account not found.");
            return;
        }//end of if 1
        if (amount > from.GetBalance()){
            System.out.println("Not enough money.");
            return;
        }//end of if 2

        from.SetBalance(from.GetBalance() - amount);
        to.SetBalance(to.GetBalance() + amount);
    }//end of transfer

    public void ApplyInterest(BankAccount acc){
        if (acc.GetAccountType() == "Teen"){
            acc.SetBalance(acc.GetBalance() * 1.04);
        }else{
            acc.SetBalance(acc.GetBalance() * 1.03);
        }
    }//end of bank account
}//end of class












