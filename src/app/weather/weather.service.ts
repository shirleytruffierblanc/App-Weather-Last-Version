import { Injectable, Inject } from '@angular/core';
import { WEATHER_LIST } from './weather.data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Weather } from './weather';


@Injectable()
export class WeatherService {
  
  
  constructor(private http: Http) { 
     //console.log('Production='+ environment.production);

  }

  getWeatherItems(){
    	return WEATHER_LIST;
  } 
// research with cityname
  getWeatheritemsbyCity(cityName, dateWeather, countryCode): Observable<any>{

    	 return this.http.get(
         environment.baseUrl +
         'forecast?q='+ cityName +
         ',' + countryCode +
         '&units=' +environment.units+
         '&cnt=' + dateWeather
         )
    	 .pipe(map((response: any) => response.json()))
    	 .pipe(catchError(this.handleError))
  }

  getWeatherForecast(cityName, dateWeather,countryCode): Observable<any[]>{

     return this.http.get(environment.baseUrl +'forecast?q='+ cityName +',' + countryCode  +'&cnt=' + dateWeather + '&appid='+ environment.appId)
     .pipe(map((response :any) => this.extractData(response)))
     .pipe(catchError(this.handleError))
      }
 

//research with coordinates

getWeatheritemsbyCoordinate(GeoCoordinatesLat, GeoCoordinatesLon, dateWeatherCoord): Observable<any>{

  return this.http.get(
    environment.baseUrl +
    'forecast?lat='+ GeoCoordinatesLat +
    '&lon='+ GeoCoordinatesLon +
    '&cnt=' + dateWeatherCoord +
    '&appid='+ environment.appId 
    )
  .pipe(map((response: any) => response.json()))
  .pipe(catchError(this.handleError))
}

getWeatherForecastCoordinate(GeoCoordinatesLat, GeoCoordinatesLon, dateWeatherCoord): Observable<any[]>{

return this.http.get(environment.baseUrl + 'forecast?lat='+ GeoCoordinatesLat +'&lon='+ GeoCoordinatesLon + '&cnt=' + dateWeatherCoord + '&appid='+ environment.appId)
.pipe(map((response :any) => this.extractData(response)))
.pipe(catchError(this.handleError))
 }


// --------------------------------------gestion des messages d erreur -------------------------------------------------// 
  private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    let errMsg: string;
 
      errMsg = error.message ? error.message : error.toString();
    
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

