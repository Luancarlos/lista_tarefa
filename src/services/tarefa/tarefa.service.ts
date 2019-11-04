import { Tarefa } from './../../models/tarefa';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tb = '@tarefas';
  constructor(private storage: Storage) { }

  getAll(): Promise<Tarefa[]> {
    return this.storage.get(this.tb);
  }
  async setTarefa(tarefa: Tarefa) {
    let tarefas = await this.getAll();
    console.log('tarefas', tarefas);
    if (tarefas) {
      tarefa.id = tarefas.length + 1;
      tarefas.push(tarefa);
    } else {
      tarefa.id = 1;
      tarefas = [tarefa];
    }
    return this.storage.set(this.tb, tarefas);
  }

  async remover(tarefa: Tarefa) {
    const tarefas = await this.getAll();
    for (let i = 0; i < tarefas.length; i++) {
      if (tarefa.id === tarefas[i].id) {
        tarefas.splice(i, 1);
      }
    }

    return this.storage.set(this.tb, tarefas);
  }
}
