import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css'

import {
  fetchCards,
} from './api';

import {
  DeckList,
  SearchBar,
  SearchResults,
} from './components';

const App = () => {
  const [results, setResults] = useState([]);
  const [deck, setDeck] = useState([]);

  const addCardToDeck  = ({id, name}) => {
  }

  const removeCardFromDeck = ({id}) => {
  }

  return (
    <div id="app">
      <SearchBar setResults= {setResults} />
      <SearchResults 
        results= {results}
        addCardToDeck={addCardToDeck}
        removeCardFromDeck={removeCardFromDeck} />
      <DeckList deck={deck} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);