import React, { useState } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers.js';

export default function App() {
  const [dates, setDate] = useState([]);

  const handleClick = () => {
    setDate((prev) => [...prev, getNewTimestamp()]);
  };

  return (
    <div>
      <h1>React Hooks</h1>
      <button onClick={handleClick}>Click here</button>
      <ul>
        {dates.map((date, index) => {
          return <li key={index}>{date}</li>;
        })}
      </ul>
    </div>
  );
}
