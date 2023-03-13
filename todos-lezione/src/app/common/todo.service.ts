import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  eventEmitter = new Subject<Todo[]>();

  add(todo: Todo) {
    this.todos.push(todo);
    this.eventEmitter.next(this.todos.slice());
  }

  updateAll(todos: Todo[]) {
    this.todos = todos;
    this.eventEmitter.next(this.todos.slice());
  }

  update(todo: Todo) {
    let elementoDaModificare = this.todos.filter(elemento => {
      elemento.id == todo.id
    })[0];
    let indice = this.todos.indexOf(elementoDaModificare);
    this.todos[indice] = todo;
    this.eventEmitter.next(this.todos.slice());
  }

  updateByIndex(indice: number, todo: Todo) {
    this.todos[indice] = todo;
    this.eventEmitter.next(this.todos.slice());
  }

  delete(indice: number) {
    this.todos = this.todos.splice(0, indice);
    this.eventEmitter.next(this.todos.slice());
  }

  get id():number {
    if (this.todos.length == 0) {
      return 1;
    }
    else {
      return Math.max.apply(Math, this.todos.map((t) => { return t.id})) + 1;
    }
  }

  get completati() {
    return this.todos.filter((t) => { return t.completata}).map((t) => {return t.titolo})
  }
  
  get ordinatiPerData() {
    return this.todos.sort((a, b) => {
      return a.data.localeCompare(b.data);
    })
  }

  constructor() { 

    let elem: Todo = new Todo(1, {
      titolo: "Titolo 1",
      descrizione: 'Descrizione 1',
      data: '13/03/2023',
      ora: '10.30',
      luogo: 'Rovereto',
      completata: true,
    });
    this.todos.push (elem);
    elem = new Todo(2, {
      titolo: "Titolo 2",
      descrizione: 'Descrizione 2',
      data: '13/03/2023',
      ora: '10.30',
      luogo: 'Rovereto',
      completata: true,
    });
    this.todos.push (elem);
    elem = new Todo(3, {
      titolo: "Titolo 3",
      descrizione: 'Descrizione 3',
      data: '13/03/2023',
      ora: '10.30',
      luogo: 'Rovereto',
      completata: true,
    });
    this.todos.push (elem);

  }
}
