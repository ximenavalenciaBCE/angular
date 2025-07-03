import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  task ="";
  tasks : {id:number, name:string}[] = [];

  addTask(){
    if (this.task.trim()==="") return;
    this.tasks.push({id: this.tasks.length +1, name: this.task});
    this.task ="";
  }

  removeTask(id: number){
    this.tasks = this.tasks.filter( task => task.id !== id);
  }
}
