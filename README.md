# Weather Report Application

A simple and responsive React application that fetches real-time weather information for any city using the OpenWeatherMap API. This project was developed as a student project.

## Features

- **Dynamic Search**: Allows users to input a city name and fetch current weather details.
- **Axios Integration**: Handles API requests efficiently using the Axios library.
- **Celsius Display**: Temperatures are fetched and displayed in Celsius (°C).
- **Responsive Layout**: Designed using Tailwind CSS and flexbox grids to look great across mobile and desktop screens.
- **Error Handling**: Displays simple and clear alerts if a city is not found or if the search input is left empty.
- **Detailed Metrics**: Displays key parameters including:
  - Current Temperature
  - Weather Description & Icon
  - Humidity Percentage
  - Wind Speed (m/s)

## Technologies Used

- **React** (useState hook)
- **Axios** (Promise-based HTTP client)
- **Tailwind CSS** (for styling and responsiveness)
- **OpenWeatherMap API** (for fetching weather data)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Production Build

To build the project for production, run:
```bash
npm run build
```
This compiles and optimizes the code into the `build` directory.

