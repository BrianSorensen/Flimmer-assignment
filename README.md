# Hacker News reader for Flimmer assignment.

# App is live here on Github pages:

https://briansorensen.github.io/Flimmer-assignment/

This is a basic app for showing a list of news and aditional meta-data.

## Architectural decisions and trade-offs

Hand coded data fetching logic, to show some actual coding.

The hacker news API CORS policy prevents requesting data with async calls.

## Ideas for improvement

BaseUrl const instead of hardcoded urls.
Use ReactQuery or simular for fetching data, wich will add more functionality e.g caching.
Develop custom fetching hook if same data is needed at multiple components.
re-styling of app and components.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
