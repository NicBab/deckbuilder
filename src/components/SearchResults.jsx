import React from 'react';
import Card from './Card';

const SearchResults = ({results}) => {
    return (
     <div id="results">
       <h3>Here's what we found ({results.length} results):</h3>
       {
         results.map(result => (
           <Card key={results.id} {...result} />
         ))
       }
     </div>
    );
};

export default SearchResults;
