// Import necessary components from Material-UI and React
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
// Import custom CSS for styling
import { useState } from "react"; 
// Import useState hook from React

// Define the SearchBox functional component
export default function SearchBox({ updateInfo }) {
  // State variable to hold the city name input by the user
  let [city, setCity] = useState("");
  
  // Define constants for the OpenWeatherMap API URL and API key
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "eed571ca051f683c9f3f946384c182f8"; 
  // Note: API keys should be kept secure 

  // Asynchronous function to fetch weather information based on the city
  const getWeatherInfo = async () => {
    // Fetch weather data from the API using the city name
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json(); 
    // convert the JSON response

    // Log the full response for checking 
    console.log(jsonResponse);

    // Create a result object containing relevant weather information
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      min_temp: jsonResponse.main.temp_min,
      max_temp: jsonResponse.main.temp_max,
      feels_like: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
    };

    // Log the result object for checking purposes
    console.log(result);
    return result; // Return the result object
  };

  // Event handler for input field changes
  let handleChange = (evt) => {
    setCity(evt.target.value); 
    // Update the city state with the input value
  };

  // Event handler for form submission
  let handleSubmit = async (evt) => {
    evt.preventDefault(); 
    // Prevent the default form submission behavior
    console.log(city); 
    // Log the current city for debugging
    setCity(""); 
    // Clear the input field after submission
    let newInfo = await getWeatherInfo(); 
    // Fetch new weather information
    updateInfo(newInfo); 
    // Call the updateInfo function passed as a prop with the new weather data
  };

  // Render the SearchBox component
  return (
    <div className="SearchBox">
      <h3>Weather SearchBox</h3>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="City"
          variant="outlined"  
          value={city} // Bind the input value to the city state
          onChange={handleChange} // Set  change handler for  input
        />
        <br /><br /><br />
        <Button variant="contained" type="submit">Submit details</Button>
         {/* Button to submit the form */}
      </form>
    </div>
  );
}
