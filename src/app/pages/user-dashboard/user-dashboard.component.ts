import { Component, OnInit } from '@angular/core';
import { lightInfoInput } from 'src/app/components/light-info/light-info.component';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  accountInfoList: Array<lightInfoInput> = []

  constructor(private service : FirstService) { }

  ngOnInit(): void {
    this.initializeAccountInfo();
  }

  private initializeAccountInfo() {
    this.accountInfoList = this.service.initializeAccountInfo();
  }

}
