import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import { Image, message } from 'antd';
import { Moon, Sun } from 'lucide-react';
import './App.css';
const API_KEY = '60e470ab19c539299b136b3ad543a067';
const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
      aria-label="Toggle theme"
    >
      <div className="icon-container">
        <Sun className="sun" size={20} />
        <Moon className="moon" size={20} />
      </div>
    </button>
  );
};
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchWeatherData = async (location = 'Ho Chi Minh') => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=vi`
      );
      setWeatherData(response.data);
      message.success('Tải thành công thời tiết của: ' + location);
    } catch (error) {
      message.error('Không tìm thấy địa điểm này.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container className={`py-5 ${isDarkMode ? 'dark-mode' : ''}`}>
      <ThemeToggle classList="fixed-top" isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <h1 className="text-center mb-0 d-flex justify-content-center align-items-center">
        <Image
          src={process.env.PUBLIC_URL + '/logo.png'}
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        Quang Bui Minh
      </h1>

      <Row className="justify-content-center">
        <Col md={6}>
          <SearchBar onSearch={fetchWeatherData} />
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Đang tải...</span>
              </Spinner>
            </div>
          ) : weatherData ? (
            <WeatherCard weatherData={weatherData} isDarkMode={isDarkMode} />
          ) : (
            <p className="text-center">Không có dữ liệu</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;