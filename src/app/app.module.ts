import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherTodayComponent,
    WeatherSearchComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
