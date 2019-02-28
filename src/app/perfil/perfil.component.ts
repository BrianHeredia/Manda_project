import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService: AuthService) { }
    user: UserInterface = {
      id: '',
      name: '',
      email:'',
      password: ''
    };
  ngOnInit() {
    this.authService.getAuth().subscribe(user => {
      if(user){
        this.user.name = user.displayName;
        this.user.email = user.email;
        console.log('USER',user);
      }
    });
  }
  
  onGuardarCambios(){

  }

}
