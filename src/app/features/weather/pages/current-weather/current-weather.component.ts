import { Component } from '@angular/core';
import { CurrentConditionsComponent } from '../../components/current-conditions/current-conditions.component';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CurrentConditionsComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

  homeLocationKey = '350540';

}
