import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { Forecast } from '../../models/forecast';
import { ForecastApiService } from '../../services/forecast-api.service';
import { IconUrlPipe } from '../../pipes/icon-url.pipe';

@Component({
  selector: 'app-five-days-forecast',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, DatePipe, MatCardModule, IconUrlPipe],
  templateUrl: './five-days-forecast.component.html',
  styleUrl: './five-days-forecast.component.css'
})
export class FiveDaysForecastComponent {
  @Input() locationKey!: string;

  forecast!: Observable<Forecast>;

  constructor(private forecastApiService: ForecastApiService) { }
  ngOnInit(): void {
    this.forecast = this.forecastApiService.get5DaysForecast(this.locationKey);
  }
}
