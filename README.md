# RestfulCountries
This is a simple app where users can search for countries and display additional information (eg. currency, population, capital) about a country. The app uses the [restcountries](https://restcountries.com/) API to fetch info about countries. The app is deployed [here](https://restfulcountries.fly.dev/).

## Frontend
The rc-client directory contains the frontend of the app built with Vite + React + TypeScript + TailwindCSS.

## Backend
The rc-server client contains the backend of the app built with Java + Quarkus + Maven. The backend acts as an intermediary between the frontend and the restcountries API. Technically the quarkus app is not needed, but I wanted to test out Quarkus and this app was the chance to do it. 
