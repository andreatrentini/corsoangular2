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

  constructor() { }
}
