import { Injectable } from '@angular/core';
import { Forecast } from './forecast.model';
import { Day } from './day.model';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ICONS, WEEKDAYS, MONTHS, KEY_DARK_SKY_API } from './constants';
@Injectable()
export class ForecastService {

  private requestUrl = 'https://api.darksky.net/forecast/' + KEY_DARK_SKY_API + '/';  // URL to web api
  private dailyArray: Day[];
  constructor(private jsonp: Jsonp) { }
  getForecast(lat: string, long: string): Promise<Forecast> {
    let params = new URLSearchParams();
    let tmpparams = lat + ',' + long;
    this.dailyArray = []

    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(this.requestUrl + tmpparams, { search: params })
      .toPromise()
      .then((res) => {
        let body = res.json();
        var __this = this;
        body.daily.data.forEach(function (day: any) {
          let newtime: Date = new Date(day.time * 1000);
          let newday = new Day(
            newtime,
            day.summary,
            day.icon,
            Math.round(day.temperatureMin),
            Math.round(day.temperatureMax),
            Math.round(day.humidity * 100),
            Math.round(day.windSpeed),
            day.windBearing,
            Math.round(day.cloudCover * 100),
            Math.round(day.pressure),
            WEEKDAYS[newtime.getDay()],
            newtime.getDate()
          )
          __this.dailyArray.push(newday);
        });

        let formattedBody = new Forecast(
          body.latitude,
          body.longitude,
          body.offset,
          body.timezone,
          this.dailyArray
        )
        return formattedBody || {};
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getIcon(idx: string) {
    return ICONS[idx];
  }

  getWeekDay(idx: any) {
    return WEEKDAYS[idx];
  }

  getLongDate(data: Date) {
    let month = data.getMonth();
    let day = data.getDay();
    return WEEKDAYS[day] + " " + MONTHS[month] + ", " + data.getDate();
  }
}