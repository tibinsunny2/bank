import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  currentUser=''
  userDetails:any = {
    1000: { account: 1000, password: 1000, amount: 4000, username: 'laisha', UID: 123,transaction:[]},
    1001: { account: 1001, password: 1001, amount: 3000, username: 'tibin', UID: 456,transaction:[] },
    1002: { account: 1002, password: 1002, amount: 6000, username: 'teena', UID: 789,transaction:[]},
    1003: { account: 1003, password: 1003, amount: 7000, username: 'tinu', UID: 987,transaction:[]},

  }

  constructor() { }
  register(account: any, password: any, username: any) {
    let userDetails: any = this.userDetails
    if (account in userDetails) {
      alert('user alredy exist')
      return false
    }
    else {
      userDetails[account] = {
        account,
        password,
        username,
        transaction:[]
      }
      console.log(userDetails);
      return true
    }
  }
  // for login page and its varification

  login(account: any, password: any) {
    let userDetails: any = this.userDetails
    if (account in userDetails) {
      if (password == userDetails[account]['password']) {
        alert(' login successful')
        this.currentUser=userDetails[account]['account']
        console.log(this.currentUser)
      }
      return true
    }
    else {
      alert('incorrect password')
      return false
    }
  }
  // for deposite
  deposite(amount: any,UID : any,account:any) {
    let userDetails: any = this.userDetails
   var amt=parseInt(amount)
   if(account in userDetails){
    if (UID== userDetails[account]['UID']) {
      userDetails[account]['amount']+=amt
      userDetails[account]['transaction'].push({
        type:'credit',
        amount
      })
      console.log( userDetails[account]['transaction']
      );
      
      return  userDetails[account]['amount']
    }
    else{
      alert('check your details given')
    }
  
   }
    else {
      alert('your UID number is incorrect')
      return false
    }
  }

  withdraw(amount: any,UID : any,account:any) {
    let userDetails: any = this.userDetails
   var amt=parseInt(amount)
   if(account in userDetails){
    if (UID== userDetails[account]['UID']) {
     if(amt<userDetails[account]['amount']){
      userDetails[account]['amount']-=amt
      userDetails[account]['transaction'].push({
        type:'DEBIT',
        amount
      })
     }
     else{
      alert('insufficient balance')
      return false
     }
      console.log( userDetails[account]['transaction']
      );
      
      return  userDetails[account]['amount']
    }
    else{
      alert('check your details given')
    }
  
   }
    else {
      alert('your UID number is incorrect')
      return false
    }
  }


  // FOR TRASACTION
getTransaction(acno:any){
  var acnoo=parseInt(acno)
 return  this.userDetails[acnoo]['transaction']
  
}


}
