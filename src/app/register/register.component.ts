import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BankService } from 'src/service/bank.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username=''
  account=''
  password=''
  constructor(private routes:Router,private ds:BankService) { }
  

  ngOnInit(): void {
  }
  register(){
    var  username=this.username
    var password=this.password
    var account=this.account
    if(account!='' && password!=''){
     let result= this.ds.register(account,password,username)
   
    if(result){
      alert('the registration successful')
      this.routes.navigateByUrl('login')
     
    }
    else{
      alert('USE THE LOGIN FUNCTION')
    }
    }
    else{
      alert('complete the registration form')
    }
   }
  
  }

