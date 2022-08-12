import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from 'src/service/bank.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  amount=''
  UID=''
  account='' 

  amount1=''
  UID1=''
  account1=''
  constructor(private routes:Router,private ds:BankService) { }


  ngOnInit(): void {
  }
deposite(){
  var amount=this.amount
  var UID=this.UID
  var account=this.account
 let result= this.ds.deposite(amount,this.UID,account)
 if(result){
  console.log(result);
  
  alert(`${amount} is credited........ new balance is ${result}`)
  
 }
 else{
  alert('check your UDI number')
 }

}
withdrawel(){
  var amount=this.amount1
  var UID=this.UID1
  var account=this.account1
 let result= this.ds.withdraw(amount,UID,account)
 if(result){
  alert(`${amount} debited......the current balance is ${result}`)
 }
 else{
  alert('the money is not debited')
 }
}
}
