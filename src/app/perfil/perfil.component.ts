import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService: AuthService, 
    private modalService: ModalService,
    public router: Router,
    public flashMensaje: FlashMessagesService
    ) { }
  
  public newName: string;
  public newEmail: string;
  public newPassword: string;
  public confirm: string;
  public email:string;
  public password: string;
   
  user: UserInterface = {
    name: '',
    email:''
  };

  ngOnInit() {
    this.authService.getAuth().subscribe(user => {
      if(user){
        this.user.name = user.displayName;
        this.user.email = user.email;
      }
    });
  }
  
  onUpdateDisplayName(newName:string){
    this.authService.getAuth().subscribe(user =>{
      if(user){
        user.updateProfile({
          displayName: newName,
          photoURL: null
        }).then( () =>{
        this.flashMensaje.show('Nombre de usuario actualizado',
        {cssClass: '', timeout: 4000});
        this.router.navigate(['/home']);
        }).catch( (error) => {
          this.router.navigate(['/home']);
          this.flashMensaje.show(error.message,
            {cssClass: '', timeout: 4000});
        });
      }
    }) 
  }
  
  onUpdateEmail(newEmail:string){
    this.authService.getAuth().subscribe(user =>{
      if(user){
        user.updateEmail(newEmail).then( () =>{
          this.flashMensaje.show('Correo de usuario actualizado',
          {cssClass: '', timeout: 4000});
          this.router.navigate(['/home']);
          }).catch( (error) => {
              console.log(error);
              if(error.code == 'auth/requires-recent-login'){
                this.openModal('custom-modal-4');
                this.flashMensaje.show(error.message,
                {cssClass: '', timeout: 4000});
              }
          });
      }
    }) 
  }

  onUpdatePassword(newPassword:string){
    if(this.newPassword == this.confirm){
      this.authService.getAuth().subscribe(user =>{
        if(user){
          user.updatePassword(newPassword).then( () =>{
            this.flashMensaje.show('Contraseña actualizada',
            {cssClass: '', timeout: 4000});
            this.router.navigate(['/home']);
            }).catch( (error) => {
                console.log(error);
                if(error.code == 'auth/requires-recent-login'){
                  this.openModal('custom-modal-4');
                  this.flashMensaje.show(error.message,
                  {cssClass: '', timeout: 4000});
                }
            });
        }
      }) 
    }else{
      this.flashMensaje.show('Los campos --Nueva contraseña-- y --Confirmar contraseña-- deben coincidir!',
        {cssClass: '', timeout: 4000});
        this.flashMensaje.show('Por favor intente de nuevo',
        {cssClass: '', timeout: 4000});
    }
  }

  onDeleteAccount(){
    const confirmacion = confirm('Está seguro que desea eliminar permanentemente su cuenta Manda? NOTA: Luego no podrá recuperarla');
    if(confirmacion){
      this.authService.getAuth().subscribe(user =>{
        if(user){
          user.delete().then( () =>{
            this.flashMensaje.show('Cuenta Eliminada correctamente',
            {cssClass: '', timeout: 4000});
            this.router.navigate(['/']);
            }).catch( (error) => {
                console.log(error);
                if(error.code == 'auth/requires-recent-login'){
                  this.openModal('custom-modal-4');
                  this.flashMensaje.show(error.message,
                  {cssClass: '', timeout: 4000});
                }
            });
        }
      }) 
    }  
  }

  onSubmitLogIn(){
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      console.log(res);
    }).catch((err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: '', timeout: 4000});
      console.log(err);
    });
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

}
