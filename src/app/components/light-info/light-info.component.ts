import { Component, Input, OnInit } from '@angular/core';

export interface lightInfoInput {
  title? :string;
  amount? :number;
  infoStyle ?:'text-bg-primary' |'text-bg-warning'|'text-bg-success'
}

@Component({
  selector: 'app-light-info',
  templateUrl: './light-info.component.html',
  styleUrls: ['./light-info.component.css']
})
export class LightInfoComponent implements OnInit {

  @Input () infoInput :lightInfoInput ={};
 

  constructor() { }

  ngOnInit(): void {
  }

}
