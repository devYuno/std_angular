import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
