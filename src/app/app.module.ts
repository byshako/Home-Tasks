import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Task1Component } from './task-1/task-1.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Task2Component } from './task-2/task-2.component';
import { GoogleMapComponent } from './task-2/google-map/google-map.component';
import { LocationDetectorComponent } from './task-2/location-detector/location-detector.component';
import { LocationListComponent } from './task-2/location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    GoogleMapComponent,
    LocationDetectorComponent,
    LocationListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
