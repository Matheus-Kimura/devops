import React, { useState } from 'react';
import './App.css';

function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSum = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/sum/${n1}/${n2}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  return (
    <div className="container">
      <h1>Soma ai o que precisa</h1>
      <div className="input-container">
        <input 
          className="input-field"
          type="number" 
          value={n1} 
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input 
          className="input-field"
          type="number" 
          value={n2} 
          onChange={(e) => setN2(parseInt(e.target.value))} 
        />
      </div>
      <button onClick={handleSum} className="calculate-button">Calculate Sum</button>
      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default App;