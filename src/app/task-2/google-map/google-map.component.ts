import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat: number = 41.7151377;
  lng: number = 44.827096;
  myLocations: any[];
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.myLocations = this.mapService.locations;
  }
}
