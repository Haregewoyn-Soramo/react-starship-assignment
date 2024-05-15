import React, { useState, useEffect } from 'react';
import './App.css';
import StarShips from './Component/StarShips';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/starships/?format=json&limit=10&page=${currentPage}`)
      .then(res => {
        if (!res.ok) {
          throw Error('Error occurred, can\'t fetch data from SWAPI');
        }
        return res.json();
      })
      .then(data => {
        setData(data.results);
        setItemsPerPage(data.count);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [currentPage]);

  const pervPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(itemsPerPage / 10))); 
  };

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      {isLoading && <div> Loading ...</div>}
      <StarShips data={data} pervPage={pervPage} nextPage={nextPage} />
    </div>
  );
}

export default App;
