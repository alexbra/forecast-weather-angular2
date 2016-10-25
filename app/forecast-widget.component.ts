import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ForecastService } from './forecast.service';
import { Forecast } from './forecast.model';
import { Day } from './day.model';
import { CITIES } from './constants';

@Component({
    moduleId: module.id,
    selector: 'component-forecast-widget',
    template: `
    <div class="forecast-wrapper">
        <div *ngIf = "!isEditMode">
            <div *ngIf = "forecast" class="city-header">{{getCityName()}}  
                <a 
                    class="edit-city"
                    (click) = "onEnableEditMode()">select city</a>
            </div>
        </div>
        <div *ngIf = "isEditMode" class="edit-city-div">
            <select (change) = "onChangeCity($event.target.value)">
                <option 
                    *ngFor = "let c of listCities; let i = index" 
                    value="{{i}}" 
                    [attr.selected] = "i == curCityId ? true : null">
                {{c.name}}</option>
            </select>
        </div>        
        <component-selected-day *ngIf = "selectedDay" [day] = "selectedDay" ></component-selected-day>
        <ul class="forecast-day-items">
            <li class="forecast-day-item"
                [class.active]="isThisSelectedDay(day)" 
                *ngFor="let day of days | slice:0:6"
                (click) = "onSelectDay(day)">
            {{ day.weekday.substr(0,3)}} {{day.date}} <br />
            <img [src]="getIcon(day.icon)" class="icon" /><br />
            <span class="temp"><b>{{day.temperatureMax}}&deg;</b> {{day.temperatureMin}}&deg;</span>
            </li>
        </ul>
        <div style="clear: both;">
    </div>
    `
})
export class ForecastWidgetComponent implements OnInit, OnChanges {
    @Input() curCityId: number;
    @Input() city: string;
    @Input() latitude: string;
    @Input() longtitude: string;
    @Output() changeCity: EventEmitter<any> = new EventEmitter();

    listCities: any[] = CITIES;
    forecast: Forecast;
    days: Day[];
    selectedDay: Day;
    isEditMode: boolean = false;

    constructor(private forecastService: ForecastService) { }
    getForecast(lat: string, long: string): void {
        this.forecastService.getForecast(lat, long).then(forecast => {
            this.forecast = forecast;
            this.days = forecast.daily;
            this.onSelectDay(this.forecast.daily[0]);
            this.isEditMode = false;
        });
    }
    onSelectDay(day: Day): Day {
        return this.selectedDay = day;
    }
    getWeekDay(idx: any) {
        return this.forecastService.getWeekDay(idx);
    }
    getIcon(idx: any) {
        return this.forecastService.getIcon(idx);
    }
    getCityName() {
        return this.city;
    }
    isThisSelectedDay(day: any): Boolean {
        return day === this.selectedDay;
    }
    onEnableEditMode(): void {
        this.isEditMode = true;
    }
    onChangeCity(value: any): void {
        this.changeCity.emit(value);
    }
    ngOnInit(): void {
        this.getForecast(this.latitude, this.longtitude);
    }
    ngOnChanges(): void {
        this.getForecast(this.latitude, this.longtitude);
    }
}