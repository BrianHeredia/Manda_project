import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeHeaderComponent } from './welcome/welcome-header/welcome-header.component';
import { WelcomeMainComponent } from './welcome/welcome-main/welcome-main.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
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
import { ConfigComponent } from './config/config.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DeseosComponent } from './deseos/deseos.component';
import { AdminComponent } from './admin/admin.component';
import { ConfigPaymentComponent } from './config-payment/config-payment.component';
import { HistorialComponent } from './historial/historial.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { ProductosComponent } from './productos/productos.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ModalComponent } from './modal/modal.component';
import { FilterComponent } from './filter/filter.component';


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
    DetailProductComponent,
    ConfigComponent,
    CarritoComponent,
    DeseosComponent,
    AdminComponent,
    ConfigPaymentComponent,
    HistorialComponent,
    DireccionesComponent,
    ProductosComponent,
    MasVendidosComponent,
    RecomendadosComponent,
    PromocionesComponent,
    ModalComponent,
    FilterComponent
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
    AngularFirestore,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
