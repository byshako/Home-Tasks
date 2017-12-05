import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
    locations = [
        {name: 'Tbilisi, Georgia', lat: 41.7151377, lng: 44.827096},
        {name: 'Batumi, Georgia', lat: 41.6167547, lng: 41.6367455},
        {name: 'Rustavi, Georgia', lat: 41.5225612, lng: 45.0430369}
    ];

    constructor() {
    }
}
