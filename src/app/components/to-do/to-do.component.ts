import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, TableModule, MatButtonModule,FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  Title: string = 'To Do List Application';
  imageLink: string = 'https://cdn-icons-png.flaticon.com/512/4697/4697260.png';
  newTask: string = '';
  Tasks: any[] = [];
  addTask() {
    if (this.newTask != null) {
      this.Tasks.push(this.newTask);
      this.newTask="";
    }
  }
}
