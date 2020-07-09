import { Injectable } from '@angular/core';
import { Todo } from './todo/models/todo';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'

  constructor( private http: HttpClient) {

   }

  getTodos(): Observable<Todo[]>
  { 
    return this.http.get<Todo[]>(this.todosUrl);
   }
  }
