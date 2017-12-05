import {Component, OnInit} from '@angular/core';
import {MapService} from "../map.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-location-detector',
    templateUrl: './location-detector.component.html',
    styleUrls: ['./location-detector.component.css']
})
export class LocationDetectorComponent implements OnInit {
    myLocations: any[];

    constructor(private mapService: MapService, private http: HttpClient) {
    }

    ngOnInit() {
        this.myLocations = this.mapService.locations;
    }

}
