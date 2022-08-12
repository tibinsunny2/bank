import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  userDetails = {
    1000: { account: 1000, password: 1000, amount: 4000, username: 'laisha', UID: 123},
    1001: { account: 1001, password: 1001, amount: 3000, username: 'tibin', UID: 456 },
    1002: { account: 1002, password: 1002, amount: 6000, username: 'teena', UID: 789},
    1003: { account: 1003, password: 1003, amount: 7000, username: 'tinu', UID: 987},

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
      return  userDetails[account]['amount']
    }
    else{
      alert('check your details given')
    }
  
   }
    else {
      alert('your UDI number is incorrect')
      return false
    }
  }

  withdrawel(amount:any,UID:any,account:any) {

  }


}
