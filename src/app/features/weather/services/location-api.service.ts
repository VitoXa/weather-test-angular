import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { LocationInfo } from '../models/location-info';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {
  
  constructor(private readonly http: HttpClient) { }


  getLocation(locationKey: string): Observable<LocationInfo> {
    let params = new HttpParams();
    params = params.set('apikey', environment.apiKey);

    return this.http
      .get<LocationInfo>(`http://dataservice.accuweather.com/locations/v1/${locationKey}`, {
        params
      });
  }
}
