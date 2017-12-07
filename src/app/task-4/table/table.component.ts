import { Component, OnInit } from '@angular/core';
import {TableDataService} from "../table-data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  myData: any[];
  constructor(private usersData: TableDataService) { }

  ngOnInit() {
    this.myData = this.usersData.tableData;
  }

}
