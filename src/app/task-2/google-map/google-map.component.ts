import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { MapConfig } from './map.config';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
