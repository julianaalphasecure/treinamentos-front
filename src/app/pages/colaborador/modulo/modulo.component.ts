import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements AfterViewInit {
  userName: string = '';
  
  // Carrossel
  @ViewChild('wrapper') wrapper!: ElementRef<HTMLDivElement>;
  slidesCount: number = 2; // quantidade de slides visíveis inicialmente
  currentSlide: number = 0;

  modulos = [
    { id: 1, nome: 'Módulo 1 - Matrix Energia', progresso: 50, img: 'capa mod 01 (1).png' },
    { id: 2, nome: 'Módulo 2 - Athon Energia', progresso: 30, img: 'capa mod 02 (1).png' },
    { id: 3, nome: 'Módulo 3 - Ineer Energia', progresso: 70, img: 'capa mod 03 (1).png' },
    { id: 4, nome: 'Módulo 4 - Sódre Santoro', progresso: 10, img: 'capa mod 04 (1).png' },
    { id: 5, nome: 'Módulo 5 - Comolatti', progresso: 0, img: 'capa mod 05 (1).png' },
    { id: 6, nome: 'Módulo 6 - Procedimento Operacional Padrão', progresso: 25, img: 'capa mod 06 (2).png' },
    { id: 7, nome: 'Módulo 7 - Portaria Remota', progresso: 60, img: 'capa mod 07 (1).png' },
    { id: 8, nome: 'Módulo 8 - BASA (Banco da Amazônia)', progresso: 0, img: 'capa mod 08 (1).png' }
  ];

  ngAfterViewInit(): void {
    // Recupera nome do usuário do localStorage
    this.userName = localStorage.getItem('nomeUsuario') || 'Usuário';
  }

  // Carrossel
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % (Math.ceil(this.modulos.length / 4));
    this.updateCarousel();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + Math.ceil(this.modulos.length / 4)) % Math.ceil(this.modulos.length / 4);
    this.updateCarousel();
  }

  updateCarousel(): void {
    const offset = -this.currentSlide * 100;
    if (this.wrapper) {
      this.wrapper.nativeElement.style.transform = `translateX(${offset}%)`;
    }
  }
}
