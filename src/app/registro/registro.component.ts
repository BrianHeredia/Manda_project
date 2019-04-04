import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email: string;
  public password: string;
  public first: string;
  public last: string;
  public confirm: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    private userService: UserService
  ) { }
    
  jsUcfirst(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  ngOnInit() {
  }

  onSubmitAddUser(){
    if(this.password == this.confirm){
        this.authService.registerUser(this.email,this.password)
      .then( (res) =>{
        this.authService.getAuth().subscribe( user =>{
          if(user){
            user.updateProfile({
              displayName: this.first.toLowerCase().charAt(0).toUpperCase() + this.first.toLowerCase().slice(1) + ' ' + this.last.toLowerCase().charAt(0).toUpperCase() + this.last.toLowerCase().slice(1),
              photoURL: null
            }).then( () =>{
            }).catch( (error) => console.log('error',error));
          }
        });
        sessionStorage.currentUser = this.email;
        this.userService.addUser();
        this.flashMensaje.show('Usuario creado correctamente.',
        {cssClass: '', timeout: 4000});
        this.router.navigate(['/home']);
      }).catch( (err) =>{
        this.flashMensaje.show(err.message,
        {cssClass: '', timeout: 4000});
      })
    }else{
      this.flashMensaje.show('Los campos Contraseña y Confirmar contraseña deben coincidir!',
      {cssClass: '', timeout: 4000});
    }
  }

}
