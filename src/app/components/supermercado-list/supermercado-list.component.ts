import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-supermercado-list',
  templateUrl: './supermercado-list.component.html',
  styleUrls: ['./supermercado-list.component.css'],
})
export class SupermercadoListComponent implements OnInit {
  itensDisponiveis: any[] = [];
  itens: any[] = [];
  novoItemQuantidade: number = 1;
  selectedItem: any = null;
  itensFiltrados: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getItems().subscribe((data) => {
      this.itensDisponiveis = data;
      this.itensFiltrados = data;
    });
  }

  atualizarItemSelecionado(event: any): void {
    this.selectedItem = event.value;
  }

  filtrarItens(pesquisa: string): void {
    const pesquisaLower = pesquisa.toLowerCase();
    this.itensFiltrados = this.itensDisponiveis.filter((item) =>
      item.nome.toLowerCase().includes(pesquisaLower)
    );
  }

  adicionarItem(): void {
    if (this.selectedItem) {
      this.itens.push({
        ...this.selectedItem,
        quantidade: this.novoItemQuantidade,
        comprado: false,
      });
      this.selectedItem = null; // Limpar seleção
      this.novoItemQuantidade = 1;
    } else {
      alert('Selecione um item.');
    }
  }

  removerItem(index: number): void {
    this.itens.splice(index, 1);
  }

  marcarComprado(index: number): void {
    this.itens[index].comprado = !this.itens[index].comprado;
  }
}
