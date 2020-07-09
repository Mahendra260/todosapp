import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../todo/models/todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
   
  @Input() todoitem:Todo;
  @Output() deleteTodo:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeclassstyle()
  {

    if(!this.todoitem.completed){
      console.log('hello')
    return {strike:true}

    }
    
  
  }

  removetask(todo){
    this.deleteTodo.emit(todo);

  }

}
