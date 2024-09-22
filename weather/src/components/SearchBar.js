import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="searchLocation">
        <Form.Control
          type="text"
          placeholder="Nhập tên thành phố..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100 mt-2">
        Tìm kiếm
      </Button>
    </Form>
  );
};

export default SearchBar;