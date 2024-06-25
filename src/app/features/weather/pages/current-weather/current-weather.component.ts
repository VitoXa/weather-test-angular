import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentConditionsComponent } from '../../components/current-conditions/current-conditions.component';
import { LocationSelectorComponent } from '../../components/location-selector/location-selector.component';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CurrentConditionsComponent, LocationSelectorComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

  homeLocationKey = '350540';

  constructor(private router: Router) { }

  navigateToLocation(locationKey: string) {
    this.router.navigate(['/location', { id: locationKey }]);
  }

}
