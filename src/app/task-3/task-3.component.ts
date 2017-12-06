import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-3',
  templateUrl: './task-3.component.html',
  styleUrls: ['./task-3.component.css']
})
export class Task3Component implements OnInit {
  myList = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8'];
  constructor() {}
  ngOnInit() {}
}
