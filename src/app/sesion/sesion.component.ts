import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitLogIn(){
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['/home']);
      console.log('Usuario inicia sesión exitosamente!');
      console.log(res);
    }).catch((err) =>{
      console.log(err);
      this.router.navigate(['/']);
    });
  }
}
