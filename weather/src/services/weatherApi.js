const API_KEY = 'YOUR_API_KEY'; // Thay thế bằng API Key của bạn
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherByCity = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=vi`);
  const data = await response.json();
  return data;
};

const getWeatherByCoords = async (lat, lon) => {
  const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

export default {
  getWeatherByCity,
  getWeatherByCoords,
};