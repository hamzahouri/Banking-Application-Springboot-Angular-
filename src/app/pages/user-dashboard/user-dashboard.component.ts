import { Component, OnInit } from '@angular/core';
import { lightInfoInput } from 'src/app/components/light-info/light-info.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  accountInfoList: Array<lightInfoInput> = []

  constructor() { }

  ngOnInit(): void {
    this.initializeAccountInfo();
  }

  private initializeAccountInfo() {
    this.accountInfoList =[
      {
        title:'Account balance',
        amount:213455,
        infoStyle: 'text-bg-primary'
      },
      {
        title:'Highest Transfert',
        amount:23985,
        infoStyle: 'text-bg-warning'
      },{
        title:'Highest Deposit',
        amount:3498455,
        infoStyle: 'text-bg-success'
      }
    ];
  }

}
