import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';


@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any[];
    disabledForecastButton: boolean = true;
    cityName:string;
    GeoCoordinatesLat:string;
    GeoCoordinatesLon:string;
    disabledForecastButtonCoordi:boolean = true;
    weatherForecastDataCoordi: any[];
    dateWeather :string;
    dateWeatherCoord :string;
    countryCode :string;

    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
       
    }
// -------------------------------------research with city name ----------------------------------
    onSubmit(cityName: string, dateWeather:string, countryCode:string) {
      console.log(cityName, dateWeather,countryCode);
        this._weatherService.getWeatherForecast(this.cityName, this.dateWeather, this.countryCode)
         .subscribe(data => {this.weatherForecastData = data}, 
                    error =>  this.errorMessage = <any>error,            
     );
    }
  
    onSearchLocation(cityName: string, dateWeather:string, countryCode:string) {
     this.disabledForecastButton = false;
     console.log(cityName, dateWeather, countryCode);
    }

    onSubmitDatabinding() {
      
     console.log("inside the two way:"+ this.cityName, "inside the two way:"+ this.countryCode, "inside the two way:"+ this.dateWeather);
        this._weatherService.getWeatherForecast(this.cityName, this.dateWeather, this.countryCode)
         .subscribe(data => {this.weatherForecastData = data}, 
                    error =>  this.errorMessage = <any>error,            
     );

    }
    
    onSearchLocationWithEvent(event:Event) {
    
      console.log("Control value: "+ (<HTMLInputElement>event.target).value);  
      this.cityName = (<HTMLInputElement>event.target).value;
      this.disabledForecastButton = false;
    }

    onSearchLocationWithEventDateCountryCode(event:Event) {
    
      console.log("Control value: "+ (<HTMLInputElement>event.target).value);  
      this.countryCode = (<HTMLInputElement>event.target).value;
      this.disabledForecastButton = false;
    }


    onSearchLocationWithEventDate(event:Event) {
    
      console.log("Control value: "+ (<HTMLInputElement>event.target).value);  
      this.dateWeather = (<HTMLInputElement>event.target).value;
      this.disabledForecastButton = false;
    }

  


// -------------------------------------research with coordinates  ----------------------------------


onSubmitCoordi(GeoCoordinatesLat:string, GeoCoordinatesLon:string, dateWeatherCoord:string) {
    console.log(GeoCoordinatesLat, GeoCoordinatesLon, dateWeatherCoord);
      this._weatherService.getWeatherForecastCoordinate(this.GeoCoordinatesLat, this.GeoCoordinatesLon, this.dateWeatherCoord)
       .subscribe(data => {this.weatherForecastDataCoordi = data}, 
                  error =>  this.errorMessage = <any>error,            
   );
  }

  onSearchLocationCoordi(GeoCoordinatesLat:string, GeoCoordinatesLon:string, dateWeatherCoord:string) {
   this.disabledForecastButtonCoordi = false;
   console.log(GeoCoordinatesLat,GeoCoordinatesLon, dateWeatherCoord);
  }


  onSubmitDatabindingCoordi() {
    
   console.log("inside the two way:"+ this.GeoCoordinatesLat,"inside the two way:"+ this.GeoCoordinatesLon, "inside the two way:"+ this.dateWeatherCoord);
      this._weatherService.getWeatherForecastCoordinate(this.GeoCoordinatesLat, this.GeoCoordinatesLon, this.dateWeatherCoord)
       .subscribe(data => {this.weatherForecastDataCoordi = data}, 
                  error =>  this.errorMessage = <any>error,            
   );
    

  }

  onSearchLocationWithEventCoodiLat(event:Event) {
  
    console.log("Control value: "+ (<HTMLInputElement>event.target).value);  
    this.GeoCoordinatesLat = (<HTMLInputElement>event.target).value;
    this.disabledForecastButtonCoordi = false;
    
  }


  onSearchLocationWithEventCoodiLon(event:Event) {
    
    console.log("Control value: "+ (<HTMLInputElement>event.target).value);
    this.GeoCoordinatesLon = (<HTMLInputElement>event.target).value;
    this.disabledForecastButtonCoordi = false;
  }

  onSearchLocationWithEventCoodidate(event:Event) {
    
    console.log("Control value: "+ (<HTMLInputElement>event.target).value);
    this.dateWeatherCoord = (<HTMLInputElement>event.target).value;
    this.disabledForecastButtonCoordi = false;
  }

}