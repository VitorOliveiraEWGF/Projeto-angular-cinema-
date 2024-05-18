import { Component, OnInit, Input } from '@angular/core';
import { ingressomodel } from './ingresso.model';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss']
})
export class ingressocomponent implements OnInit {

  ingresso: ingressomodel = new ingressomodel (Number, String, String);

  @Input() filmes: Array<string> = new Array();

  constructor(nome: string, quantidade: number, filmes: string) {
    this.ingresso = new ingressomodel(nome, quantidade, filmes);
  }

  ngOnInit() {

  }

  comprar(event){
    console.log('Evento: ', event);
    console.log('Ingresso: ', this.ingresso);

    alert('Compra realizada com sucesso!');
    alert('Filme selecionado: ' + this.ingresso.filmes);
  }

}
