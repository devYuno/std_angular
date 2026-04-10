import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { ModalAuth } from "../../../shared/modal-auth/modal-auth";
import { AuthApi } from '../../../domain/auth.api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../../domain/UserInterfaces';

@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet, ModalAuth, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

 constructor(private api : AuthApi , private router: Router ) {}

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get Username() {
    return this.loginForm.get("username")
  }
  get Password() {
    return this.loginForm.get("password")
  }

  login = () => {

    if (!this.loginForm.valid)
    {
      alert("Nem todos os campos são válidos!");
      return
    }
    const data: LoginDto = {
      username: this.Username?.value,
      password: this.Password?.value
    }

    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res);
        this.router.navigate(["/"], { replaceUrl: true })
        // location.reload();
      }
    );
  }


  // email: string = '';
  // senha: string = '';

  // onInput(event: any, campo: string) {
  //   if (campo == "email") {
  //     this.email = event.target.value;
  //   } else if (campo == "senha") {
  //     this.senha = event.target.value;
  //   }
  // }
  
}
