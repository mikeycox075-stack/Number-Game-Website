public class BankAccount{
    private String name;
    private String address;
    private String phone;
    private String email;
    private String password;
    private double balance;
    private String accountType;
    private String role;

    public BankAccount(String name,String address,String phone,String email,String password,double balance,String accountType,String role){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.accountType = accountType;
        this.role = role;
    }
    public boolean isValid() {
        return name != null && email != null && password != null && balance >= 0;
    }//end of is valid

    public String GetName(){return name;}
    public String GetAddress(){return address;}
    public String GetPhone(){
        return phone;
    }
    public String GetEmail(){
        return email;
    }
    public String GetPassword(){
        return password;
    }
    public double GetBalance(){
        return balance;
    }
    public String GetAccountType(){
        return accountType;
    }
    public String GetRole(){
        return role;
    }
    public void SetBalance(double value){
        this.balance = value;
    }

    public void SetName (String name){
        this.name = name;
    }
    public void SetAddress (String address){
        this.address = address;
    }
    public void SetPhone (String Phone){
        this.phone = phone;
    }
    public void SetEmail (String email){
        this.email = email;
    }
    public void SetPassword (String password){
        this.password = password;
    }
    public void SetAccountType (String accountType){
        this.accountType = accountType;
    }
    public void SetRole (String role){
        this.role = role;
    }
   @Override
    public String toString() {
        return name + "," + address + "," + phone + "," + email + "," + password + "," + balance + "," + accountType + "," + role;
    }//end of to string
}//end of class







































