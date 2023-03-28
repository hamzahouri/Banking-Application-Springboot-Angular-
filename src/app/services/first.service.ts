import { Injectable } from '@angular/core';
import { lightInfoInput } from '../components/light-info/light-info.component';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  public initializeAccountInfo () : Array<lightInfoInput> {
    return [
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
    ]

  }
}
