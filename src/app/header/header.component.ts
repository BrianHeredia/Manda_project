import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean;
  public emailUser: string;

  constructor(
    public authService: AuthService,
    private stateService: StateService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin=true;
        this.emailUser = auth.email;
      }else{
        this.isLogin = false;
      }
    });
  }

  onClickLogout(){
    this.authService.logout();
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userInfo');
  }
  cambiarState(state){
    this.stateService.changeState(state);
  }
}
