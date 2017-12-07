import { Component, OnInit } from '@angular/core';
import {TableDataService} from '../table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userData: any[];

  constructor(private tableData: TableDataService) { }

  ngOnInit() {
    this.userData = this.tableData.tableData;
  }

}
