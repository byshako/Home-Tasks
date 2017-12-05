import {Component, OnInit} from '@angular/core';
import {MapService} from "../map.service";

@Component({
    selector: 'app-location-detector',
    templateUrl: './location-detector.component.html',
    styleUrls: ['./location-detector.component.css']
})
export class LocationDetectorComponent implements OnInit {
    myLocations: any[];
    foundLocations: any[];

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.myLocations = this.mapService.locations;
    }
}
