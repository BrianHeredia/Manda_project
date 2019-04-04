import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
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
    private userService: UserService,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogIn(){
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      sessionStorage.currentUser = this.email;
      this.userService.getUser();
      this.flashMensaje.show('Bienvenido, ha iniciado sesión correctamente.',
      {cssClass: '', timeout: 4000});
      this.router.navigate(['/home']);
    }).catch((err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: '', timeout: 4000});
      console.log(err);
      this.router.navigate(['/']);
    });
    
  }
}
