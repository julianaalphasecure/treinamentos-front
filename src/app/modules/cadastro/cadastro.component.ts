import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  re = '';
  nome = '';
  email = '';
  senha = '';
  tipo_acesso = 'colaborador';

  cadastrar() {
    console.log({
      re: this.re,
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      tipo_acesso: this.tipo_acesso
    });
    alert('Cadastro enviado! (A API será chamada aqui)');
  }
}
