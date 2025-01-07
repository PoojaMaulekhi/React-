// Import necessary components 
import SearchBox from "./SearchBox"; // Import the SearchBox component for user input
import InfoBox from "./InfoBox"; // Import the InfoBox component to display weather information
import { useState } from "react"; // Import useState  from React

// Define  WeatherApp functional component
export default function WeatherApp() {
    // Initialize state to hold weather information with default values
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi", // Default city name
        temp: 56.7, // Default temperature
        min_temp: 27.90, // Default minimum temperature
        max_temp: 90.67, // Default maximum temperature
        feels_like: "haze", // Default feels like condition
        humidity: 9, // Default humidity percentage
    });

    // Function to update the weather information state
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); // Update the state with new weather information
    };

    // Render the WeatherApp component
    return (
        <>
            <div className="weatherdata" style={{ textAlign: "center" }}> {/* Center-align the content */}
                <SearchBox updateInfo={updateInfo} /> {/* Render the SearchBox component and pass the updateInfo function as a prop */}
                <InfoBox info={weatherInfo} /> {/* Render the InfoBox component and pass the current weatherInfo as a prop */}
            </div>
        </>
    );
}
