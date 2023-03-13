import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../common/todo.class';
import { TodoService } from '../common/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {  

  todo: Todo = new Todo(this.todoService.id);
  todoForm!: FormGroup;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todo = this.todoService.getByIndex(3);
    this.todoForm = this.todo.form;
  }

  get c() {
    return this.todoForm.controls;
  }

  salva() {
    console.log(this.todoForm.value);
  }

 
}
