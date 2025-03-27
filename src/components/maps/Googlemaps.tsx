import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Box } from "@mui/material";

export const apiKey = "AIzaSyB2RcDMneRf0ggsofqQk-lkvl1dGgpLLWA";
const AltitudeTracker: React.FC = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          console.error("Geolocation error:", err);
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Box sx={{width:"100%",height:"100%"}}>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {location ? (
        <>
          {isLoaded ? (
            
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "75vh"}}
              center={{ lat: location.latitude, lng: location.longitude }}
              zoom={18}
            >
              <Marker position={{ lat: location.latitude, lng: location.longitude }} />
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </>
      ) : (
        <p>Fetching location...</p>
      )}
    </Box>
  );
};

export default AltitudeTracker;
