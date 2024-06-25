import { Routes } from '@angular/router';
import { LocationComponent } from './features/weather/pages/location/location.component';
import { CurrentWeatherComponent } from './features/weather/pages/current-weather/current-weather.component';

export const routes: Routes = [
    { path: 'home', component: CurrentWeatherComponent },
    { path: 'location', component: LocationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

