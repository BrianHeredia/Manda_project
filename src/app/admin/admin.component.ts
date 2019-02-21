import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ProductInterface } from '../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public products = [];
  //public product = '';

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts(){
    this.dataApi.getAllProduct().subscribe(products =>{
      this.products = products;
    });
  }
  
  onDeleteProduct(idProduct: string){
    const confirmacion = confirm('Está seguro que desea eliminar permanentemente este producto? NOTA: Luego no podrá recuperarlo');
    if(confirmacion){
      this.dataApi.deleteProduct(idProduct);
    }
    
  }
  onSaveProduct(productForm: NgForm): void{
    if(productForm.value.id == null){
      this.dataApi.addProduct(productForm.value);
    }
    else{
      this.dataApi.updateProduct(productForm.value);
    }
    productForm.resetForm();
  }

  onPreUpdateProduct(product: ProductInterface){
    console.log('PRODUCT:', product)
    this.dataApi.selectedProduct = Object.assign({}, product);
  }
}
