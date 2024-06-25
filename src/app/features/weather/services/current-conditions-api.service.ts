import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CurrentConditions } from '../models/current-conditions';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentConditionsApiService {

  constructor(private readonly http: HttpClient) { }

  getCurrentConditions(locationKey: string): Observable<CurrentConditions> {
    let params = new HttpParams();
    params = params.set('apikey', environment.apiKey);

    return this.http
      .get<CurrentConditions[]>(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
        params
      }).pipe(map(conditions => conditions[0]));
  }
}
