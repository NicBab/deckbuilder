import React from 'react';
import Card from './Card';
import './SearchResults.css';

const SearchResults = ({results}) => {
    return (
     <div id="results">
       <h3>Here's what we found ({results.length} results):</h3>

       <div className="CardList">
       {
         results.map(result => (
           <Card key={results.id} {...result} />
         ))
       }
       </div>
     </div>
    );
};

export default SearchResults;
