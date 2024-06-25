import { AsyncPipe } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Observable, debounceTime, filter, of, switchMap } from 'rxjs';
import { LocationInfo } from '../../models/location-info';
import { LocationApiService } from '../../services/location-api.service';

@Component({
  selector: 'app-location-selector',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AsyncPipe
  ],
  templateUrl: './location-selector.component.html',
  styleUrl: './location-selector.component.css'
})
export class LocationSelectorComponent {
  autocompleteCtrl = new FormControl('');
  filteredLocations!: Observable<LocationInfo[]>;

  autoCompleteOptions!: string[];
  onLocationSelected = output<string>()


  constructor(private locationService: LocationApiService) {
    this.filteredLocations = this.autocompleteCtrl.valueChanges.pipe(
      filter((v) => typeof v === 'string' && v.trim().length > 2),
      debounceTime(200),
      switchMap((v) =>
        v ? this.locationService.getLocationSuggestions(v) : of([])
      ))
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.onLocationSelected.emit(event.option.value.Key)
  }

  displayProperty(loc: LocationInfo | undefined) {
    if (loc) {
      return loc.LocalizedName;
    }
    return '';
  }
}
