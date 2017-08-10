import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [ new Task("Task1", "Description 1"), new Task("Task2", "Description 2")];

  constructor() { 

  }

  ngOnInit() {
  }
  dataFromChild(eventData){
  	console.log("dataFromChild");
  	console.log(eventData);
  	this.tasks.push(eventData);
  }

}
