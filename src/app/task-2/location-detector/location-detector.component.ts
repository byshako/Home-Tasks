<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {MapService} from "../map.service";
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> parent of 298fb25... 102310

@Component({
    selector: 'app-location-detector',
    templateUrl: './location-detector.component.html',
    styleUrls: ['./location-detector.component.css']
})
export class LocationDetectorComponent implements OnInit {
<<<<<<< HEAD
    myLocations: any[];
    foundLocations: any[];
    locationName = '';
    @ViewChild('searchInput') searchInput: ElementRef;
    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.myLocations = this.mapService.locations;
    }

    search(locationName) {
        this.mapService.findLocation(locationName).subscribe((data: any) => {
            if (data.status === 'OK') {
                console.log(data);
                this.foundLocations = data.results;
            }
        });
    }

    onAdd(index) {
        this.mapService.addLocation(this.foundLocations[index]);
        this.foundLocations = null;
        this.searchInput.nativeElement.value = '';
    }

    enterKeyDetect(event) {
        if (event.keyCode === 13) {
            this.search(event.target.value);
        }
    }
=======

  constructor() { }

  ngOnInit() {
  }
>>>>>>> parent of 298fb25... 102310

}
