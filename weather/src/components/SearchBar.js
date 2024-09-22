import { Search } from 'lucide-react';
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
    <Form onSubmit={handleSubmit} className="mb-4 d-flex">
      <Form.Control
        type="text"
        placeholder="Nhập tên thành phố..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-grow-1 me-2"
      />
      <Button
        variant="primary"
        type="submit"
        className="d-inline-block"
      >
        <Search/>
      </Button>
    </Form>
  );
};

export default SearchBar;