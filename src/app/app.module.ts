import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeHeaderComponent } from './welcome/welcome-header/welcome-header.component';
import { WelcomeMainComponent } from './welcome/welcome-main/welcome-main.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AuthGuard } from './guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeHeaderComponent,
    WelcomeMainComponent,
    FooterComponent,
    SesionComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    BusquedaComponent,
    NavbarComponent,
    SliderComponent,
    PerfilComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FlashMessagesService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
