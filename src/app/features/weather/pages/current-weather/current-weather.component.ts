import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentConditionsComponent } from '../../components/current-conditions/current-conditions.component';
import { LocationSelectorComponent } from '../../components/location-selector/location-selector.component';
import { FiveDaysForecastComponent } from '../../components/five-days-forecast/five-days-forecast.component';
import { FavoriteLocationService } from '../../services/favorite-location.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [NgFor, CurrentConditionsComponent, LocationSelectorComponent, FiveDaysForecastComponent, AsyncPipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

  homeLocationKey = '350540';
  favoriteLocations!: Observable<string[]>;

  constructor(private router: Router, private favoriteLocationService: FavoriteLocationService) { 
    this.favoriteLocations = favoriteLocationService.favoritesLocations$;
  }

  navigateToLocation(locationKey: string) {
    this.router.navigate(['/location', { id: locationKey }]);
  }

}
