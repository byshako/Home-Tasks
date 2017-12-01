import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-task-1',
    templateUrl: './task-1.component.html',
    styleUrls: ['./task-1.component.css']
})
export class Task1Component implements OnInit {
    name: string;
    toDolist = [
        {done: true, newName: 'Test 1'},
        {done: true, newName: 'Test 2'},
        {done: false, newName: 'Test 3'},
        {done: false, newName: 'Test 4'},
        {done: false, newName: 'Test 5'},
    ];
    newName = '';

    constructor() {
    }

    ngOnInit() {
    }

    onAdd() {
        this.toDolist.push({
            done: true,
            newName: this.name
        });
        this.name = '';
    }
    onDelete(i) {
        this.toDolist.splice(i, 1);
    }
    onDone(i) {
        console.log('tst');
    }
    onEdit() {

    }
}
