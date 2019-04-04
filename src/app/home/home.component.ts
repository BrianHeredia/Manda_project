import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ProductInterface } from '../models/product';
import { StateService } from '../services/state.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state = 0;
  constructor(private dataApi: DataApiService, private stateService: StateService, private userService: UserService) { }
  public products = [];
  public electronics = [];
  

  ngOnInit() {
    this.dataApi.getAllProduct().subscribe(products =>{
      this.products = products;
    });
    this.dataApi.getElectronics().subscribe(electronics =>{
      this.electronics = electronics;
    });
  }

  chequearState(){
    return this.stateService.checkState();
  }
  
}
