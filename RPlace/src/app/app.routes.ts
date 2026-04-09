import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login-page/login-page';
import { HomePage } from './features/home-page/home-page';
import { RegisterPage } from './features/auth/register-page/register-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'login', component: LoginPage},
    {path: 'register', component: RegisterPage}
];
