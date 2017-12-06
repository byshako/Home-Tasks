import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../map.service";

@Component({
    selector: 'app-location-detector',
    templateUrl: './location-detector.component.html',
    styleUrls: ['./location-detector.component.css']
})
export class LocationDetectorComponent implements OnInit {
    foundLocs: any[];
    @ViewChild('searchLoc') searchLoc: ElementRef;
    constructor(private mapService: MapService) {
    }

    ngOnInit() {}
    searchLocation(locationName) {
        this.mapService.findLoc(locationName).subscribe( (data: any) => {
            if(data.status === 'OK') {
                this.foundLocs = data.results;
            }
        });
    }

    addMyLocation(index){
        this.mapService.addLoc(this.foundLocs[index]);
        this.foundLocs = null;
        this.searchLoc.nativeElement.value = '';
    }
}
