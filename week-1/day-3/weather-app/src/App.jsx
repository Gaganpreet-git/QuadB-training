import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { cities } from "world-cities-json";
import Select from "./components/Select/Select";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { fetchWeather, getUserLocation } from "./utils";

const indianCities = cities.filter((city) => city.country === "India");

const options = indianCities.map((city) => ({
  label: city.city,
  value: city.city,
  key: city.id,
  lat: city.lat,
  lon: city.lng,
}));

function App() {
  const [selectedCityData, setSelectedCityData] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const initialRun = async () => {
      const { lat, lon } = await getUserLocation();

      if (lat === null || lon === null) {
        console.error("Unable to get user location");
        return;
      }

      const { data, error } = await fetchWeather(lat, lon, { signal });

      if (error) {
        console.error("Error fetching weather data:", error);
        return;
      }
      setWeatherData(data);
    };

    initialRun();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    if (selectedCityData) {
      const { lat, lon } = selectedCityData;

      const fetchWeatherData = async () => {
        const { data, error } = await fetchWeather(lat, lon, { signal });
        if (error) {
          console.error("Error fetching weather data:", error);
        } else {
          setWeatherData(data);
        }
      };

      fetchWeatherData();
    }

    return () => {
      controller.abort();
    };
  }, [selectedCityData]);

  const handleSelectedCity = (data) => {
    setSelectedCityData(data);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Weather App</h1>
      <Select options={options} onSelect={handleSelectedCity} />
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default App;
