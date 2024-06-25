# WeatherTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Test tasks Info: 

Create a weather webapp that allows users to view current weather conditions, search for weather in different places, and favorite different cities. 
Requirements 
* Create a new Github repo for this project and commit as you go 
* We’d like to see at least five commits
* Use Angular with Material UI 
* Must be responsive for desktop in a full screen and half screen view
* Get personal api key to use this API: https://developer.accuweather.com/apis  
* We promise our APIs are better than this 😊
* Use routing: 
    * /home 
        * Show current conditions of Philadelphia, PA - done
        * Show five day forecast - done
        * Include a search bar for looking at a new location - done
        * In a separate section, show the user’s favorited locations - done
    * /location/:id 
        * Shows current conditions of searched location (from search bar on home page) - done
        * Shows daily forecast - done
        * Shows hourly forecast 
        * Allow the user to favorite this location and display favorites on homepage - done
* In both instances of the current conditions, display the relevant weather icon https://developer.accuweather.com/weather-icons  

* Bonus 
	* Host the webpage 
	* Add a mobile layout
	* Eliminate accessibility violations
	* Animate the homepage
	* Add icons to all weather details
