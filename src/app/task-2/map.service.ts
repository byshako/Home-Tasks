import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MapService {
<<<<<<< HEAD
    locations = [
        {name: 'Tbilisi, Georgia', lat: 41.7151377, lng: 44.827096},
        {name: 'Batumi, Georgia', lat: 41.6167547, lng: 41.6367455},
        {name: 'Rustavi, Georgia', lat: 41.5225612, lng: 45.0430369}
    ];
    locationsChange = new EventEmitter();

    constructor(private http: HttpClient) {
    }

    findLocation(locationName) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + locationName +
            '&key=AIzaSyBI2qfEHOHhY0hfqTzSC_qs1a4LomhVmTI');
    }

    addLocation(data) {
        this.locations.push(
            {name: data.formatted_address, lat: data.geometry.location.lat, lng: data.geometry.location.lng}
        );
        this.locationsChange.emit(true);
    }
=======
  locations = [
    {name: 'Tbilisi, Georgia', lat: 41.7151377, lng: 44.827096},
    {name: 'Batumi, Georgia', lat: 41.6167547, lng: 41.6367455},
    {name: 'Kobuleti, Georgia', lat: 41.815997, lng: 41.7838101}
  ];
  constructor() { }

<<<<<<< HEAD
>>>>>>> parent of 298fb25... 102310
=======
>>>>>>> parent of 298fb25... 102310
}
