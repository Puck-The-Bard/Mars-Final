import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Weather } from './mars-dat/weather.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  apiUrl =  "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles"; // "https://api.nasa.gov/insight_weather/?api_key=i8xRurVTbP8FkeiMf2kSsD5n9QkbiD9WhT0CzQZp&feedtype=json&ver=1.0";

  constructor(private _http: HttpClient) { }

  getWeather()
  {
    return this._http.get<Weather[]>(this.apiUrl);
  }
}