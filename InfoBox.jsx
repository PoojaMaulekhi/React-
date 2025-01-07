// Import necessary components from Material-UI and React
import Card from '@mui/material/Card';// Card component for displaying information
import CardContent from '@mui/material/CardContent'; // Content area of the Card
import CardMedia from '@mui/material/CardMedia'; // Media area for images in the Card
import Typography from '@mui/material/Typography'; // Typography component for text styling
import AcUnitIcon from '@mui/icons-material/AcUnit';// Icon for cold weather
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';// Icon for hot weather
import AddReactionIcon from '@mui/icons-material/AddReaction'; // Icon for rainy weather
import "./InfoBox.css"; // Import custom CSS for styling



//  InfoBox functional component that takes 'info' as a prop
export default function InfoBox({ info }) {
    //  image URLs for different weather conditions
    const Init_Img = "https://images.unsplash.com/photo-1641970304289-77c942a40292?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3QlMjBzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";
    const Rainy_Img = "https://images.unsplash.com/photo-1627192198824-d8ad4ed88082?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww";
    const Hot_Img = "https://media.istockphoto.com/id/495291758/photo/woman-using-water-bottle-to-cool-down.webp?a=1&b=1&s=612x612&w=0&k=20&c=ubbVsrtR3-wYL3omkef7BpxHD8TIn-IuoWI8kxKvmSU=";
    const Cold_Img = "https://images.unsplash.com/photo-1621271415159-5f9eff5eefbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZGRheXxlbnwwfHwwfHx8MA%3D%3D";

    // Render  InfoBox component
    return (
        <div className="InfoBox"> 
            <h2> InfoBox</h2> 
            <div className="cardContainer"> {/* Container for the card */}
                <Card sx={{ maxWidth: 345 }}> {/* Card component with a maximum width */}
                    <CardMedia
                        sx={{ height: 140 }} // Set height for the media section
                        image={info.humidity > 80 ? Rainy_Img : info.temp > 15 ? Hot_Img : Cold_Img} // Conditional image based on weather
                        title="Weather Image" // Title for  media section
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {/* Display the city name */}
                            {info.humidity > 80 ? <AddReactionIcon /> : info.temp > 15 ? <BrightnessLowIcon /> : <AcUnitIcon />}
                             {/* Display appropriate icon based on weather conditions */}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            Dusty Weather {/* Description of the weather */}
                        </Typography>

                        {/* Display  weather information */}
                        <p>Temperature={info.temp}&deg;C</p>
                        <p>Temp_min={info.min_temp}&deg;C</p>
                        <p>Temp_max={info.max_temp}&deg;C</p>
                        <p>Feels_like={info.feels_like}</p>
                        <p>Humidity={info.humidity}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
