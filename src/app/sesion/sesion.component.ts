import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogIn(){
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.flashMensaje.show('Bienvenido, ha iniciado sesión correctamente.',
      {cssClass: '', timeout: 4000});
      this.router.navigate(['/home']);
      console.log('Usuario inicia sesión exitosamente!');
      console.log(res);
    }).catch((err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: '', timeout: 4000});
      console.log(err);
      this.router.navigate(['/']);
    });
  }
}
