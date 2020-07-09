import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes =[
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'TodoItem',component:TodoItemComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HomeComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
