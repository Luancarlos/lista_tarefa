import { Tarefa } from './../../models/tarefa';
import { TarefaService } from './../../services/tarefa/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.page.html',
  styleUrls: ['./criar-tarefa.page.scss'],
})
export class CriarTarefaPage implements OnInit {

  tarefa: Tarefa = new Tarefa();
  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
  }

  

  async salvar() {
    console.log('foi');
    await this.tarefaService.setTarefa(this.tarefa);
    window.history.back();
  }

}
