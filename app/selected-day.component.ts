import { Component, OnInit, Input } from '@angular/core';
import { Day } from './day.model';
import { ForecastService } from './forecast.service';

@Component({
    selector: 'component-selected-day',
    template: `
        <div class="selected-day">
            <div class="general-info">
                <span>{{getLongDate()}}</span><br>
                <span class="summary">{{day.summary}}</span>                
            </div>

            <div class="info-block">
                <div class="main-info">
                    <img class="icon" [src]="getIcon()" />                
                    <div class="temp">
                        <div style="float: left;">{{day.temperatureMax}}</div>
                        <div class="sign">&deg;F</div>
                    </div>    
                </div>                
            </div>
            <div class="info-block right">
                <div class="additional-info">
                    Cloud Cover: {{day.cloudCover}} %<br/>
                    Humidity: {{day.humidity}} %<br/>
                    Pressure: {{day.pressure}} mb<br/>
                    <span>Wind:  
                        <img class="windarrow" src="img/winddir.png"
                            [style.transform]="getRotateWindParam()">
                        {{day.windSpeed}} mph    
                    </span>     
                </div>
            </div>
            <div style="clear: both;"></div>                        
        </div>
    `
})
export class SelectedDayComponent {
    @Input() day: Day;
    constructor(private forecastService: ForecastService) { }
    getIcon(): void {
        return this.forecastService.getIcon(this.day.icon);
    }
    getLongDate() {
        return this.forecastService.getLongDate(this.day.time);
    }
    getRotateWindParam() {
        return "rotate(" + this.day.windBearing + "deg)";
    }

}