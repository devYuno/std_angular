import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { ModalAuth } from "../../../shared/modal-auth/modal-auth";

@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet, ModalAuth],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  realEmail: string = "aaa";
  realSenha: string = "123";


  email: string = '';
  senha: string = '';

  onInput(event: any, campo: string) {
    if (campo == "email") {
      this.email = event.target.value;
    } else if (campo == "senha") {
      this.senha = event.target.value;
    }
  }

  login() {
    if (this.email == this.realEmail && this.senha == this.realSenha) {
      
    }
  }
}
