import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from 'src/service/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account=''
  password=''

  constructor(private ds:BankService,private routes:Router) { }

  ngOnInit(): void {
  }
  login(){
    var account=this.account
    var password=this.password
     let result=this.ds.login(account,password)
     
     if(result){
          alert('welcome to the world of next level banking')
          this.routes.navigateByUrl('dashbord')
     }
     else{
      alert('give valid datas')
      
     }
  }

}
