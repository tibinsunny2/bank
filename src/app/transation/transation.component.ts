import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from 'src/service/bank.service';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent implements OnInit {
  acno:any
transactions:any
  constructor(private route:Router,private ds:BankService) {
    this.acno=this.ds.currentUser
   this.transactions= this.ds.getTransaction(this.acno)
   console.log(this.transactions);
   
   
   }

  ngOnInit(): void {
  }

}
