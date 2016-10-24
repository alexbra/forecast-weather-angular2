import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { ForecastWidgetComponent } from './forecast-widget.component';
import { SelectedDayComponent } from './selected-day.component';
import { ForecastService } from './forecast.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule 
  ],
  declarations: [
    AppComponent,
    ForecastWidgetComponent,
    SelectedDayComponent
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
