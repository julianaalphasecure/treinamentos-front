import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  re: string = '';
  nome: string = '';
  email: string = '';
  senha: string = '';
  tipo_acesso: string = 'colaborador';

  constructor(private http: HttpClient) {}

  async cadastrar() {
    const dados = {
      re: this.re,
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      tipo_acesso: this.tipo_acesso
    };

    try {
      const result: any = await this.http
        .post('http://127.0.0.1:5000/auth/registrar', dados)
        .toPromise();

      alert('Cadastro realizado com sucesso!');
      window.location.href = '/login';
    } catch (error: any) {
      alert(error?.error?.message || 'Erro ao cadastrar. Verifique os dados.');
    }
  }
}
