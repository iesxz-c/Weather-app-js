# Weatheree

**Weatheree** is a simple, user-friendly weather forecasting website that provides real-time weather information for any city. Built with HTML, CSS, and JavaScript, the website leverages the OpenWeatherMap API to fetch and display weather data.

## Features

- **City-based Weather Search**: Enter the name of any city to get current weather information.
- **Real-time Data**: Fetches and displays up-to-date weather details.
- **Weather Details**: Displays city name, weather description, temperature, and a corresponding weather emoji.
- **Error Handling**: Provides user-friendly error messages when the city is not found or data cannot be fetched.

## How It Works

1. **User Input**: The user inputs a city name into the provided text field.
2. **API Call**: On form submission, an API call is made to the OpenWeatherMap API to fetch weather data for the specified city.
3. **Data Display**: The fetched weather data is displayed on the website, including the city name, weather description, temperature, and an emoji representing the weather condition.
4. **Error Messages**: If the city is not found or there's an issue fetching the data, an error message is displayed to the user.

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/weatheree.git
   ```
2. Navigate to the project directory:
   ```
   cd weatheree
   ```
3. Open `index.html` in your web browser.

### Usage

1. Open the website.
2. Enter the name of the city you want to get the weather for.
3. Click the "Get Weather" button.
4. View the weather details displayed on the card.

## API Integration

Weatheree uses the OpenWeatherMap API to fetch weather data. You need an API key from OpenWeatherMap to make requests.

### Steps to Get an API Key

1. Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
2. Navigate to the API keys section in your account.
3. Copy your unique API key.

### Adding the API Key

Replace the placeholder `YOUR_API_KEY_HERE` in `script.js` with your actual API key:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## Customization

You can customize the appearance of Weatheree by modifying the `style.css` file. Adjust colors, fonts, and layout to suit your preferences.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
