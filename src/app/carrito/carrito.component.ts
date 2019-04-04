import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, OnDestroy {

  
  constructor(private userService: UserService) {
    this.veces = -1;
  }
  private veces:number;
  ngOnInit() {
    this.veces = this.veces + 1;
    console.log(this.veces);
    this.userService.getLocal();
    this.userService.getInfo();
  }
  ngOnDestroy() {
    this.userService.subtotal = 0;
    this.userService.cant = 0;
  }

}
