import React from "react";

const StarShips = ({ data, pervPage, nextPage }) => {
  return (
    <div className='card'>
      <ul>
        {data.map((ship, index) => (
          <li key={index}>{ship.name}</li>
        ))}
      </ul>
      <hr />
      <div className="paginationBtn">
        <button onClick={nextPage}>Next</button>
        <button onClick={pervPage}>Previous</button>
      </div>
    </div>
  );
}

export default StarShips;
