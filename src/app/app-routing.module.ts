import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './guards/auth.guard';
import { PerfilComponent} from './perfil/perfil.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: PerfilComponent},
  { path: 'detail/:id', component: DetailProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
