import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ProductInterface } from '../models/product';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.productsCollection = afs.collection<ProductInterface>('productos');
    this.products = this.productsCollection.valueChanges();
    for(let i=0;i<10;i++){
      this.myProductsIDs[i] = "null";
      this.check[i] = false;
    }
  }
  private productsCollection: AngularFirestoreCollection <ProductInterface>;
  private products: Observable <ProductInterface[]>;
  private electronics: Observable <ProductInterface[]>;
  private art: Observable <ProductInterface[]>;
  private beauty: Observable <ProductInterface[]>;
  private cellphones: Observable <ProductInterface[]>;
  private books: Observable <ProductInterface[]>;
  private gentlemen: Observable <ProductInterface[]>;
  private ladys: Observable <ProductInterface[]>;
  private kids: Observable <ProductInterface[]>;
  private sports: Observable <ProductInterface[]>;
  private home: Observable <ProductInterface[]>;
  private health: Observable <ProductInterface[]>;
  private games: Observable <ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  private product: Observable<ProductInterface>;
  private productIDtoCart: string;
  public selectedProduct: ProductInterface = {
    id: null
  };
  public myProductsIDs = Array(10);
  public check = Array(10);

  getAllProduct(){  
    return this.products = this.productsCollection.snapshotChanges()
    .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  

  getElectronics(){  
    return this.electronics = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Electronicos')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getArt(){  
    return this.art = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Arte')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getBeauty(){  
    return this.beauty = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Belleza')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getCelulares(){  
    return this.cellphones = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Celulares')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getBooks(){  
    return this.books = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Libros')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getGentlemen(){  
    return this.gentlemen = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Caballeros')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getLadys(){  
    return this.ladys = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Damas')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getKids(){  
    return this.kids = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Niños')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getSports(){  
    return this.sports = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Deportes')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getHome(){  
    return this.home = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Hogar')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getHealth(){  
    return this.health = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Salud')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getGames(){  
    return this.games = this.afs.collection('productos', ref => ref.where('departamento', '==', 'Videojuegos')).snapshotChanges()
  .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  
  getOneProduct(idProduct: string){
    this.productDoc = this.afs.doc<ProductInterface>(`productos/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges().pipe(map(action=>{
      if(action.payload.exists == false){
        return null;
      }
      else{
        const data = action.payload.data() as ProductInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addProduct(product: ProductInterface): void{ 
     this.productsCollection.add(product);
  }

  updateProduct(product: ProductInterface): void{
    let idProduct = product.id;
    this.productDoc = this.afs.doc<ProductInterface>(`productos/${idProduct}`);
    this.productDoc.update(product);
  }
  
  deleteProduct(idProduct: string): void{
    this.productDoc = this.afs.doc<ProductInterface>(`productos/${idProduct}`);
    this.productDoc.delete();
  }

  setProductToCart(idProduct: string){
    this.productIDtoCart = idProduct;
  }

  addProductToCart():void{
    for(let i=0; i<this.myProductsIDs.length ; i++){
      if(this.myProductsIDs[i] == "null" ){
        this.myProductsIDs[i] = this.productIDtoCart;
        if(this.myProductsIDs[i+1] =="null" ){
          i = 10;
        }
      }
    }
    this.checkNull();
  }

  checkNull(){
    for(let i=0; i<10; i++){
      if(this.myProductsIDs[i] = "null"){
        this.check[i] = false;
      }else{
        this.check[i] = true;
      }
    }
  }
}
