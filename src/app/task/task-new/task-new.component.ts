import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask = new Task("","");
  @Output() addTaskEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addTask(aTask){
  	console.log("addTask");
  	console.log(aTask);
  	this.newTask = new Task("", "");
  	this.addTaskEvent.emit(aTask);
  }

}
