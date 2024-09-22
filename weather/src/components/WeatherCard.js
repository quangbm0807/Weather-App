import React from 'react';
import { Cloud, Droplet, Wind, Sunrise, Sunset } from 'lucide-react';
import { Card, Col, Row } from 'react-bootstrap';

const WeatherIcon = ({ iconCode }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return <img src={iconUrl} alt="Weather icon" className="weather-icon" />;
  };
  
  const WeatherCard = ({ weatherData }) => {
    const { name, sys, main, weather, wind, clouds, dt, visibility } = weatherData;
    
    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    };
  
    return (
      <Card className="mb-4 weather-card">
        <Card.Body>
          <Row className="align-items-center mb-4">
            <Col>
              <Card.Title className="mb-0 h2">{name}, {sys.country}</Card.Title>
              <Card.Subtitle className="mt-1 text-muted">{weather[0].description}</Card.Subtitle>
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
              <Card.Text><i className="bi bi-droplet-fill me-2"></i>Độ ẩm: {main.humidity}%</Card.Text>
            </Col>
            <Col sm={6} className="mb-3">
              <Card.Text><i className="bi bi-wind me-2"></i>Gió: {wind.speed} m/s</Card.Text>
            </Col>
            <Col sm={6} className="mb-3">
              <Card.Text><i className="bi bi-cloud-fill me-2"></i>Mây: {clouds.all}%</Card.Text>
            </Col>
            <Col sm={6} className="mb-3">
              <Card.Text><i className="bi bi-eye-fill me-2"></i>Tầm nhìn: {visibility / 1000} km</Card.Text>
            </Col>
          </Row>
  
          <Row className="text-muted">
            <Col sm={6} className="mb-2">
              <small><i className="bi bi-sunrise-fill me-2"></i>Mặt trời mọc: {formatTime(sys.sunrise)}</small>
            </Col>
            <Col sm={6} className="mb-2">
              <small><i className="bi bi-sunset-fill me-2"></i>Mặt trời lặn: {formatTime(sys.sunset)}</small>
            </Col>
          </Row>
  
          <Card.Footer className="text-center text-muted mt-3">
            <small>Cập nhật lần cuối: {new Date(dt * 1000).toLocaleString('vi-VN')}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };
export default WeatherCard;