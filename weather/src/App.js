import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import { message } from 'antd';


const API_KEY = '60e470ab19c539299b136b3ad543a067';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Quang Bui Minh</h1>
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
            <WeatherCard weatherData={weatherData} />
          ) : (
            <p className="text-center">Không có dữ liệu</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;