import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ModuloComponent } from './pages/colaborador/modulo/modulo.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'modulo', component: ModuloComponent },
];

export const appRouterProviders = [provideRouter(routes)];

