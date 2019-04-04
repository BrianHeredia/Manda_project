import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private stateService: StateService ) { }

  ngOnInit() {

  }
  cambiarState(state){
    this.stateService.changeState(state);
    
  }
}
