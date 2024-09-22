import React from 'react';
import { Cloud, Droplet, Wind, Sunrise, Sunset, Eye } from 'lucide-react';
import { Card, Col, Row } from 'react-bootstrap';
const WeatherIcon = ({ iconCode }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return <img src={iconUrl} alt="Weather icon" className="weather-icon" />;
};

const WeatherCard = ({ weatherData, isDarkMode }) => {
  const { name, sys, main, weather, wind, clouds, dt, visibility } = weatherData;
  
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  };

  const cardClassName = `mb-4 weather-card ${isDarkMode ? 'dark-mode' : ''}`;

  return (
    <Card className={cardClassName}>
      <Card.Body>
        <Row className="align-items-center mb-4">
          <Col>
            <Card.Title className="mb-0 h2">{name}, {sys.country}</Card.Title>
            <Card.Subtitle className="mt-1">{weather[0].description}</Card.Subtitle>
          </Col>
          <Col xs="auto">
            <WeatherIcon iconCode={weather[0].icon} />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="temperature">{Math.round(main.temp)}°C</h1>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col sm={6} className="mb-3">
            <Card.Text><Droplet size={18} className="me-2" />Độ ẩm: {main.humidity}%</Card.Text>
          </Col>
          <Col sm={6} className="mb-3">
            <Card.Text><Wind size={18} className="me-2" />Gió: {wind.speed} m/s</Card.Text>
          </Col>
          <Col sm={6} className="mb-3">
            <Card.Text><Cloud size={18} className="me-2" />Mây: {clouds.all}%</Card.Text>
          </Col>
          <Col sm={6} className="mb-3">
            <Card.Text><Eye size={18} className="me-2" />Tầm nhìn: {visibility / 1000} km</Card.Text>
          </Col>
        </Row>

        <Row className="">
          <Col sm={6} className="mb-2">
            <small><Sunrise size={18} className="me-2" />Mặt trời mọc: {formatTime(sys.sunrise)}</small>
          </Col>
          <Col sm={6} className="mb-2">
            <small><Sunset size={18} className="me-2" />Mặt trời lặn: {formatTime(sys.sunset)}</small>
          </Col>
        </Row>

        <Card.Footer className="text-center mt-3">
          <small>Cập nhật lần cuối: {new Date(dt * 1000).toLocaleString('vi-VN')}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;