import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  
  public state;

  constructor() {
    this.state = 0;
   }
  

  changeState(state): void{
    this.state = state;
  }
  checkState(){
    return this.state;
  }
}
