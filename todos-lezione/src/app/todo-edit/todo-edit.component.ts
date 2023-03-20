import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private todoService: TodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.todo = this.todoService.getByIndex(Number(params['id']));
    })
    this.todoForm = this.todo.form;
  }

  get c() {
    return this.todoForm.controls;
  }

  salva() {
    console.log(this.todoForm.value);
  }

 
}
