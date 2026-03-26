import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';
import { CardComponent } from './shared/card/card.component';
import { CardMercadosComponent } from './shared/card-mercados/card-mercados.component';
import { ComidaDetailsModalComponent } from './features/main-page/comida-page/comida-details-modal/comida-details-modal.component';
import { UserRegisterComponent } from './features/login-page/user-register/user-register.component';
import { ModalComponent } from './shared/modal/modal.component';
import { LoginComponent } from './features/login-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    NavComponent,
    MercadoPageComponent,
    ComidaPageComponent,
    CardComponent,
    CardMercadosComponent,
    ComidaDetailsModalComponent,
    UserRegisterComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
