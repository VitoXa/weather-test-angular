import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  locationCode!: string | null;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.locationCode = this.route.snapshot.paramMap.get('id');
  }
}
