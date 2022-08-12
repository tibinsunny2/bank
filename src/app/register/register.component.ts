import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  // registre model
  registerForm=this.fb.group({
    username:[''],
    account:[''],
    password:[''],
  })
  constructor(private routes:Router,private ds:BankService,private fb:FormBuilder) { }
  ngOnInit(): void {
  }
  register(){
    console.log(this.registerForm);
    
    var  username=this.registerForm.value.username
    var password=this.registerForm.value.password
    var account=this.registerForm.value.account
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

