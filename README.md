# Weather App
## Overview
This weather app fetches weather data for a given location and displays the current, minimum, and maximum temperatures in Celsius. The app uses data from the OpenWeatherMap API, which provides weather information in Kelvin by default. The app includes functionality to convert the temperature data from Kelvin to Celsius.

## Features
Fetches current weather data for a given city.
Converts temperatures from Kelvin to Celsius.
Displays the minimum and maximum temperatures for the day.
Installation
To get started with the Weather App, follow these steps:

## Prerequisites
Ensure you have the following installed:

Node.js
A code editor like VSCode (optional)
Steps to Set Up
Clone the repository to your local machine.
cd weather-app
Install necessary dependencies (if any):

If you are using any external packages like Axios for API requests (not included in the code above), you can install them using npm:

npm install axios
Set up an account on OpenWeatherMap to get an API key.

In your project directory, create a .env file to store your API key:

OPENWEATHER_API_KEY=your_api_key_here
Add your API request code (for example, using fetch or axios) to get weather data from OpenWeatherMap and display it using the temperature conversion logic provided.

## Usage
The app fetches weather data for a specified city.

The temperatures provided by OpenWeatherMap API are in Kelvin.

The app converts the temp_min and temp_max values from Kelvin to Celsius using the formula:

## Contributing
If you want to contribute to the project, feel free to fork the repository and create a pull request. Here are a few things you can do to contribute:

Fix bugs or improve code performance.
Add more weather-related features (e.g., humidity, wind speed, etc.).
Improve the user interface (if applicable).
