import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';
import { UserRegisterComponent } from './features/login-page/user-register/user-register.component';
import { LoginComponent } from './features/login-page/login/login.component';

const routes: Routes = [
  {path: 'home', component: MainPageComponent, children:[
    {path: "mercado", component: MercadoPageComponent},
    {path: "comida", component: ComidaPageComponent}
    
  ]},
  {path: '', component: LoginPageComponent, children:[
    {path: "register", component: UserRegisterComponent},
    {path: "login", component: LoginComponent}
  ]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
