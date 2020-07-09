import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private todoservice : TodoServiceService) { 

  }

  ngOnInit(): void {
   this.todoservice.getTodos().subscribe(todos => {
     this.todos= todos;
   })

  }
  deleteTodo(todo){
    this.todos=this.todos.filter(t =>t.id !==todo.id);
  }

}
