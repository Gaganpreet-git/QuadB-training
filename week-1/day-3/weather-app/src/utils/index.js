const fetchWeather = async (latitude, longitude, options = {}) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { signal } = options;
  const request_url = `${
    import.meta.env.VITE_WEATHER_API_URL
  }?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(request_url, {
      signal,
    });
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const getUserLocation = async () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
        resolve({ lat: null, lon: null });
      }
    );
  });
};

export { fetchWeather, getUserLocation };
