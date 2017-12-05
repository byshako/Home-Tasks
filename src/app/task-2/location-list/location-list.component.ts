import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  myLocations: any[];
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.myLocations = this.mapService.locations;
  }

  deleteLocation(i) {
    this.myLocations.splice(i, 1);
  }

}
