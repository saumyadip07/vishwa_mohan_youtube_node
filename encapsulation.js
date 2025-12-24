function BankAccount(balance){
    let _balance=balance


    this.getBalance=function(){
        return _balance
    }
}


let acc= new BankAccount(5000);
// console.log(acc.getBalance());
