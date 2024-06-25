import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable, combineLatest, map } from 'rxjs';
import { CurrentConditions } from '../../models/current-conditions';
import { LocationInfo } from '../../models/location-info';
import { CurrentConditionsApiService } from '../../services/current-conditions-api.service';
import { LocationApiService } from '../../services/location-api.service';
import { IconUrlPipe } from '../../pipes/icon-url.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteLocationService } from '../../services/favorite-location.service';

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [MatCardModule, NgIf, AsyncPipe, IconUrlPipe, MatButtonModule, MatIconModule],
  templateUrl: './current-conditions.component.html',
  styleUrl: './current-conditions.component.css'
})
export class CurrentConditionsComponent {
  @Input() locationKey!: string;
  @Input() showFavoriteButton = false;

  conditions: CurrentConditions | null = null;
  currentLocation: LocationInfo | null = null;
  isFavorite!: Observable<boolean>;

  constructor(
    private currentConditionsService: CurrentConditionsApiService,
    private locationService: LocationApiService,
    private favoriteLocationService: FavoriteLocationService) {

  }

  ngOnInit(): void {
    this.isFavorite = this.favoriteLocationService.favoritesLocations$.pipe(map((locations) => locations.indexOf(this.locationKey) > -1));

    combineLatest([
      this.locationService.getLocation(this.locationKey),
      this.currentConditionsService.getCurrentConditions(this.locationKey)
    ])
      .subscribe(([location, cond]) => { this.conditions = cond; this.currentLocation = location; });
  }

  
  toggleFavoriteLocation() {
    this.favoriteLocationService.toggleFavoriteLocation(this.locationKey);
  }
}
