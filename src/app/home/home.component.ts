import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ProductInterface } from '../models/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public products = [];
  public product = '';

  ngOnInit() {
    this.dataApi.getAllProduct().subscribe(products =>{
      console.log('PRODUCTS', products);
      this.products = products;
    });
  }

}
