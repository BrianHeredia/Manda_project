import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { UserService } from '../services/user.service';
import { ProductInterface } from '../models/product';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor( private userService: UserService, private dataApi: DataApiService, private route: ActivatedRoute) { }
  public product: ProductInterface = {};

  ngOnInit() {
    const idProduct = this.route.snapshot.params['id'];
    this.getDetails(idProduct);
  }

  getDetails(idProduct: string): void{
    this.dataApi.getOneProduct(idProduct).subscribe( product => {
    this.product = product;
    });
  }
 sendToCart(){
  const idProduct = this.route.snapshot.params['id'];
  this.userService.addProductToCart(idProduct);
  this.userService.setLocal();
  this.userService.updateUser();
 }

}
