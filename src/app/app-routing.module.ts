import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './guards/auth.guard';
import { PerfilComponent} from './perfil/perfil.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DeseosComponent } from './deseos/deseos.component';
import { ConfigComponent } from './config/config.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: 'detail/:id', component: DetailProductComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'deseos', component: DeseosComponent, canActivate: [AuthGuard] },
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
