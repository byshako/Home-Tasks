import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
  locations = [
    {name: 'Tbilisi, Georgia', lat: 41.7151377, lng: 44.827096},
    {name: 'Batumi, Georgia', lat: 41.6167547, lng: 41.6367455},
    {name: 'Kobuleti, Georgia', lat: 41.815997, lng: 41.7838101}
  ];
  constructor() { }

}
