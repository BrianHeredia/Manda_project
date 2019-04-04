import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../models/user';
import { DataApiService} from '../services/data-api.service';
import { ProductInterface } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public afs: AngularFirestore,  private dataApi: DataApiService ) {
    //this.userCollection = this.afs.collection<UserInterface>('usuarios');
    this.products = new Array(this.selectedUser.carrito.length);
    this.subtotal = 0;
    this.cant= 0;
  }
  //private userCollection: AngularFirestoreCollection<UserInterface>;
  private userDoc: AngularFirestoreDocument<UserInterface>;
  private user: Observable <UserInterface>;
  public selectedUser: UserInterface = {
    carrito: ['null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'],
    deseos: ['null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'],
    address: [{
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },
    {
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },
    {
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },
    {
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },
    {
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },{
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },
    {
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },
    {
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },{
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    },{
      receiver: 'null',
      line1: 'null',
      line2: 'null',
      city: 'null',
      state: 'null',
      zip: 'null',
      municipio: 'null',
      parroquia: 'null'
    }]
  }
  public subtotal;
  public cant: number;
  public products: ProductInterface[];


  addAddress(address): void{ 
    console.log(address);
    this.selectedUser.address[0] = address;
    for(let i=0; i<this.selectedUser.address.length ; i++){
      if(this.selectedUser.address[i] == {receiver: 'null', line1: 'null', line2: 'null', city: 'null', state: 'null', zip: 'null', municipio: 'null', parroquia: 'null'} ){
        this.selectedUser.address[i] = address;
        if(this.selectedUser.address[i+1] == {receiver: 'null', line1: 'null', line2: 'null', city: 'null', state: 'null', zip: 'null', municipio: 'null', parroquia: 'null'} ){
          i = this.selectedUser.carrito.length;
        }
      }
    }
    console.log(this.selectedUser);
  }

  //agrega un nuevo usuario a la BD
  addUser(): void{ 
     this.afs.collection('usuarios').doc(sessionStorage.getItem('currentUser')).set(this.selectedUser);
  }

  //actualiza un usario de la base de datos con la local info
  updateUser(): void{
    this.userDoc = this.afs.doc<UserInterface>(`usuarios/${sessionStorage.getItem('currentUser')}`);
    this.userDoc.update(this.selectedUser);
  }

  //se trae la info del user de la BD y la guarda en selectedUser y en la local Data
  getUser( ): void{
      this.userDoc = this.afs.doc<UserInterface>(`usuarios/${sessionStorage.getItem('currentUser')}`);
      this.user = this.userDoc.snapshotChanges().pipe(map(action=>{
        if(action.payload.exists == false){
          return null;
        }
        else{
          const data = action.payload.data() as UserInterface;
          data.id = action.payload.id;
          return data;
        }
      }));
      this.user.subscribe( user => {
        this.selectedUser = user;
        sessionStorage.userInfo = JSON.stringify(this.selectedUser);
      });
  }

  //agrega un item a el arreglo de carrito de productos de selectedUser
  addProductToCart(idProduct: string):void{
    for(let i=0; i<this.selectedUser.carrito.length ; i++){
      if(this.selectedUser.carrito[i] == "null" ){
        this.selectedUser.carrito[i] = idProduct;;
        if(this.selectedUser.carrito[i+1] =="null" ){
          i = this.selectedUser.carrito.length;
        }
      }
    }
  }

  //actualiza la data local del usuario
  setLocal(){
    sessionStorage.userInfo = JSON.stringify(this.selectedUser);
  }

  getLocal(){
    this.selectedUser = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  
  deleteProduct(idProduct: string): void{
    this.userDoc = this.afs.doc<UserInterface>(`usuarios/${sessionStorage.getItem('currentUser')}/${idProduct}`);
    this.userDoc.delete();
  }

  getInfo(){
    for(let i=0; i<this.selectedUser.carrito[i].length; i++){
      if(this.selectedUser.carrito[i] != "null"){
        this.dataApi.getOneProduct(this.selectedUser.carrito[i]).subscribe( product => {
          this.products[i] = product;
          this.subtotal = this.subtotal + this.products[i].price;
          this.cant = this.cant + 1;
        });
      } 
    }
  }
  
}
