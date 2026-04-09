import { Component } from '@angular/core';
import { ModalAuth } from "../../../shared/modal-auth/modal-auth";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-register-page',
  imports: [ModalAuth, RouterOutlet],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {}
