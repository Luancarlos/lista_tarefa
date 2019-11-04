import { Tarefa } from './../../models/tarefa';
import { Component } from '@angular/core';
import { TarefaService } from 'src/services/tarefa/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) {
    this.buscarTarefas();
  }

  ionViewDidEnter() {
    this.buscarTarefas();
  }

  async buscarTarefas() {
    this.tarefas = await this.tarefaService.getAll();
  }

  async remover(tarefa) {
    await this.tarefaService.remover(tarefa);
    this.buscarTarefas();
  }

}
