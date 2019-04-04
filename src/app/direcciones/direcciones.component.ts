import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalService } from '../services/modal.service';
import { AddressInterface } from '../models/address';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {
  constructor( 
    private userService: UserService, 
    private modalService: ModalService) {
   }
   public line1: string;
   public line2: string;
   public municipio: string;
   public city: string;
   public parroquia:string;
   public zip: string;
   public state: string;
   public address: AddressInterface[] = 
   [{
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   },
   {
    receiver: '',
    line1: '',
    line2: '',
    city: '',
    municipio: '',
    parroquia: '',
    state: '',
    zip: ''
   }]

  ngOnInit() {

  }
  
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addNew(){
    this.userService.addAddress(this.address[0]);
    this.userService.updateUser();
  }

}
