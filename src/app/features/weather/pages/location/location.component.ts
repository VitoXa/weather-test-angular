import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentConditionsComponent } from '../../components/current-conditions/current-conditions.component';
import { FiveDaysForecastComponent } from '../../components/five-days-forecast/five-days-forecast.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CurrentConditionsComponent, FiveDaysForecastComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  locationKey!: string | null;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.locationKey = this.route.snapshot.paramMap.get('id');
  }
}
