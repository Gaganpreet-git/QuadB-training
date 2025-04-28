import React from "react";
import Card from "../Card/Card";
import styles from "./WeatherCard.module.css"; 

const WeatherCard = ({ data }) => {
  return (
    <Card className={styles.container}>
      <h2 className={styles.heading}>{data?.name}</h2>
      <p>Temperature: <span className={styles.value}>{data?.main?.temp}°C</span></p>
      <p>Humidity: <span className={styles.value}>{data?.main?.humidity}%</span></p>
      <p>Wind Speed: <span className={styles.value}>{data?.wind?.speed} m/s</span></p>
      <p>Weather: <span className={styles.value}>{data?.weather[0]?.description}</span></p>
      <p>Pressure: <span className={styles.value}>{data?.main?.pressure} hPa</span></p>
      <p>Visibility: <span className={styles.value}>{data?.visibility} meters</span></p>
      <p>Cloudiness: <span className={styles.value}>{data?.clouds?.all}%</span></p>
      {data?.main?.sea_level && (
        <p>Sea Level: <span className={styles.value}>{data?.main?.sea_level} m</span></p>
      )}
      {data?.main?.grnd_level && (
        <p>Ground Level: <span className={styles.value}>{data?.main?.grnd_level} m</span></p>
      )}
      <p>Feels Like: <span className={styles.value}>{data?.main?.feels_like}°C</span></p>
    </Card>
  );
};

export default WeatherCard;
