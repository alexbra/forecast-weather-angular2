import { Component, OnInit } from '@angular/core';
import { CITIES } from './constants';

@Component({
    selector: 'my-app',
    template: `
    <div class="wrapper">
        <div class="page-header">
            <h1>Weather Forecast Widget</h1>
        </div>
        <component-forecast-widget
            [curCityId] = "curCityId"
            [city] = "city"
            [latitude] = "latitude"
            [longtitude] = "longtitude"
            (changeCity) = "onChangeCity($event)">
        </component-forecast-widget>
        <small><em><a style="color: #ccc; text-decoration: none;" href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a></em></small>
    </div>
    `
})

export class AppComponent implements OnInit {
//add defining city on this stage by geolocation
    latitude: string;
    longtitude: string;
    city: string;
    curCityId: number;
    onChangeCity(event: any){
        this.curCityId = event;
        this.latitude = CITIES[event].lat;
        this.longtitude = CITIES[event].long;
        this.city = CITIES[event].name;
    } 
    ngOnInit(): void{
        this.onChangeCity(0);
    }
 }
