import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FavoriteLocationService {

    private readonly STORAGE_KEY = 'favorites';
    private favorites: string[] = [];
    private favoritesSubject = new BehaviorSubject<string[]>(this.favorites);

    constructor() {
        this.loadFavoriteLocations();
    }

    toggleFavoriteLocation(favoriteLocation: string): void {
        if (this.favorites.indexOf(favoriteLocation) > -1) {
            this.favorites = this.favorites.filter(f => f !== favoriteLocation);
            this.save();
        } else {
            this.addFavoriteLocation(favoriteLocation);
        }
    }

    addFavoriteLocation(favoriteLocation: string): void {
        this.favorites = this.favorites.slice(-4);
        this.favorites.push(favoriteLocation);
        this.save();
    }


    getFavoriteLocations(): string[] {
        return this.favorites;
    }

    // Observable to track changes in favorites
    favoritesLocations$ = this.favoritesSubject.asObservable();

    private loadFavoriteLocations(): void {
        const storedFavorites = localStorage.getItem(this.STORAGE_KEY);
        if (storedFavorites) {
            this.favorites = JSON.parse(storedFavorites);
            this.favoritesSubject.next(this.favorites);
        }
    }

    private save(): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites));
        this.favoritesSubject.next(this.favorites);
    }
}
