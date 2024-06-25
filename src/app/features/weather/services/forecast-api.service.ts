import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiService {

  constructor(private readonly http: HttpClient) { }

  get5DaysForecast(locationKey: string): Observable<Forecast> {
    let params = new HttpParams();
    params = params.set('apikey', environment.apiKey);
    params = params.set('metric', true);

    return this.http
      .get<Forecast>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
        params
      });
  }
}
