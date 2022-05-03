import './App.css';

import Books from './components/books.js';
import { useEffect, useState } from 'react';

// const URL = 'http://127.0.0.1:3000/books';
const URLProduction = 'https://back-react-brito.herokuapp.com/books';

const getApiData = () => {
  return fetch(URLProduction, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.json());
}

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    getApiData().then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello mundo! :D</h1>
      <Books livros={ books }/>
    </div>
  );
}

export default App;
