import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  public cpassword: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then( (res) =>{
      this.router.navigate(['/home']);
      console.log('Usuario registrado exitosamente!');
      console.log(res);
    }).catch( (err) =>{
      console.log('ERROR');
      console.log(err);
    })
}
}
