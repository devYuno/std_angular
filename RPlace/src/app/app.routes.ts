import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login-page/login-page';
import { HomePage } from './features/home-page/home-page';
import { RegisterPage } from './features/auth/register-page/register-page';
import { authGuard } from './domain/authGuard/auth-guard';

export const routes: Routes = [
    {path: 'register', component: RegisterPage, canMatch: [authGuard]}
    {path: 'login', component: LoginPage, canMatch: [authGuard]},
    {path: '', component: HomePage, canMatch: [authGuard]},
];

