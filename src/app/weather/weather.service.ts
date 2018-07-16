import { Injectable, Inject } from '@angular/core';
import { WEATHER_LIST } from './weather.data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Weather } from './weather';


@Injectable()
export class WeatherService {
  
  
  constructor(private http: Http) { 
     console.log('Production='+ environment.production);

  }

  getWeatherItems(){
    	return WEATHER_LIST;
  } 

  getWeatheritemsbyCity(cityName): Observable<any>{

    	 return this.http.get(
         environment.baseUrl +
         'weather?q='+ cityName +
         '&appid='+ environment.appId +
         '&units=' + environment.units
         )
    	 .pipe(map((response: any) => response.json()))
    	 .pipe(catchError(this.handleError))
  }

  getWeatherForecast(cityName): Observable<any[]>{

     return this.http.get(environment.baseUrl +'forecast?q='+ cityName +'&appid='+ environment.appId +'&units=' + environment.units)
     .pipe(map((response :any) => this.extractData(response)))
     .pipe(catchError(this.handleError))
      }

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
