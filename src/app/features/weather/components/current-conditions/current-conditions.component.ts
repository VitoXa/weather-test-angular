import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { combineLatest } from 'rxjs';
import { CurrentConditions } from '../../models/current-conditions';
import { LocationInfo } from '../../models/location-info';
import { CurrentConditionsApiService } from '../../services/current-conditions-api.service';
import { LocationApiService } from '../../services/location-api.service';

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [MatCardModule, NgIf, AsyncPipe],
  templateUrl: './current-conditions.component.html',
  styleUrl: './current-conditions.component.css'
})
export class CurrentConditionsComponent {
  @Input() locationKey!: string;

  conditions: CurrentConditions | null = null;
  currentLocation: LocationInfo | null = null;

  constructor(
    private currentConditionsService: CurrentConditionsApiService,
    private locationService: LocationApiService) {

  }

  ngOnInit(): void {

    combineLatest([
      this.locationService.getLocation(this.locationKey),
      this.currentConditionsService.getCurrentConditions(this.locationKey)
    ])
      .subscribe(([location, cond]) => { this.conditions = cond; this.currentLocation = location; });
  }
}
