# NutsDotCom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7,
@ng-bootstrap/ng-bootstrap version :4.1.0",
bootstrap version :4.3.1",

## Environment Set Up

Run npm install in the project directory.

## Development server

"ng serve" will build and run
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Application code gotchas:
● SPA with Routing 
● Tried to incorporate comments for readablitity
● Interceptor for http get and postrequest
● Feature level components created.
● Used ng-bootstrap for styling grid and nav bar
● products, product-details pages created for navigation.

## Work in Progress
● Infinite scroll and lazyloading for every 10 products or reaching bottom of the page.
● Image resizing and rendering for different resolutions
● Get and set token from server to  app for every 48hrs or when it expires. For now, setting at:
    auth.service --> getAuthorizationToken-->access_token, replace with the latest while running.
