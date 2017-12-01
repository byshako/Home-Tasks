import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-1',
  templateUrl: './task-1.component.html',
  styleUrls: ['./task-1.component.css']
})
export class Task1Component implements OnInit {
  name: string = 'tst';
  toDolist = ['test 1', 'test 2', 'test 3'];

  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    this.toDolist.push(this.name);
  }
  onRemove(){
    
  }
}
