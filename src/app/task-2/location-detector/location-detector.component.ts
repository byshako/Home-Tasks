import { Component, OnInit } from '@angular/core';
import {MapService} from "../map.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-location-detector',
  templateUrl: './location-detector.component.html',
  styleUrls: ['./location-detector.component.css']
})
export class LocationDetectorComponent implements OnInit {
  myLocations: any[];
  foundLocations: any[];
  locationName = '';
  constructor(private mapService: MapService, private http: HttpClient) { }

  ngOnInit() {
    this.myLocations = this.mapService.locations;
  }
  findLocation(locationName) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + locationName +
        '&key=AIzaSyBI2qfEHOHhY0hfqTzSC_qs1a4LomhVmTI');
  }
  addLocation(){

  }
}
