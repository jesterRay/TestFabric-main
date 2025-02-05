import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  // State to hold filter options
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');

  // Handle change in filter inputs
  const handleFilterChange = () => {
    // Notify parent component of changes
    onFilterChange({ category, minPrice, maxPrice, rating });
  };

  return (
    <div className="filters-container">
      <h2>Filter Options</h2>

      {/* Category Filter */}
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value); handleFilterChange(); }}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
          {/* Add more categories as needed */}
        </select>
      </label>

      {/* Price Range Filter */}
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => { setMinPrice(e.target.value); handleFilterChange(); }}
          placeholder="Minimum Price"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => { setMaxPrice(e.target.value); handleFilterChange(); }}
          placeholder="Maximum Price"
        />
      </label>

      {/* Rating Filter */}
      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => { setRating(e.target.value); handleFilterChange(); }}
        >
          <option value="">Any Rating</option>
          <option value="4">4 & Up</option>
          <option value="3">3 & Up</option>
          <option value="2">2 & Up</option>
          <option value="1">1 & Up</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
