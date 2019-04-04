import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ProductInterface } from '../models/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, public router: Router) {
   }
  public products = [];
  public various: boolean;
  public proms: boolean;
  public num_var: number;
  public vars = [];


  ngOnInit() {
    this.getListProducts();
  }

  change(x:boolean, y:number){
    if(y==0){
      this.various = x;
    }else if(y==1){
      this.proms = x;
    }else{
      this.vars = new Array(this.num_var);
      var input = [];
      for(let i=0; i<this.num_var; i++){
        input[i] = document.createElement("INPUT");
        input[i].type = "text";
        input[i].id = "entrada" + i.toString(); 
        document.getElementById("entradas").appendChild(input[i]);
      }
    }
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
    for(let i=0; i<this.num_var; i++){
      this.vars[i] = document.getElementById("entrada" + i.toString());
    }
    this.dataApi.selectedProduct.var_tipo = this.vars;

    if(productForm.value.id == null){
      this.dataApi.addProduct(this.dataApi.selectedProduct);
    }
    else{
      this.dataApi.updateProduct(this.dataApi.selectedProduct);
    }
    productForm.resetForm();
    for(let i=0; i<this.num_var; i++){
      document.getElementById("entrada" + i.toString()).parentNode.removeChild(document.getElementById("entrada" + i.toString()));
    }
    this.various = false;
    this.proms = false;
    this.router.navigate(['/admin']);
  }

  onPreUpdateProduct(product: ProductInterface){
    this.dataApi.selectedProduct = Object.assign({}, product);
  }
  topFunction(){
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 0;
  }
}
