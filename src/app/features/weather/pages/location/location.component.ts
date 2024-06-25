import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentConditionsComponent } from '../../components/current-conditions/current-conditions.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CurrentConditionsComponent],
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
