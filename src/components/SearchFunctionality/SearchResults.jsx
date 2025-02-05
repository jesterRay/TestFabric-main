import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="results-container">
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="result-item">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
              <p>Category: {result.category}</p>
              <p>Price: ${result.price}</p>
              <p>Rating: {result.rating} Stars</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
