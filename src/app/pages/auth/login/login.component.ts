import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None  
})

export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  async login() {
    const dados = { email: this.email, senha: this.senha };

    try {
      const response: any = await this.http
        .post('http://127.0.0.1:5000/auth/login', dados)
        .toPromise();

      alert('Login realizado com sucesso!');

      if (response.token) {
        localStorage.setItem('token', response.token);
      }

      if (response.tipo_acesso) {
        localStorage.setItem('tipo_acesso', response.tipo_acesso);
      }

      if (response.tipo_acesso === 'gestor') {
        this.router.navigate(['/dashboard']);
      } else if (response.tipo_acesso === 'colaborador') {
        this.router.navigate(['/modulo']);
      } else {
        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      alert(error?.error?.message || 'Erro ao fazer login. Verifique os dados.');
    }
  }
}
