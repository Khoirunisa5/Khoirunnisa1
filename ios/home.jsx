import React, { useState } from 'react';
import './App.css';

function App() {
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleChange = (event) => {
    setGuess(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userGuess = parseInt(guess);
    setGuess('');
    setAttempts(attempts + 1);

    if (userGuess < secretNumber) {
      setMessage('Tebakan terlalu rendah. Coba lagi!');
    } else if (userGuess > secretNumber) {
      setMessage('Tebakan terlalu tinggi. Coba lagi!');
    } else {
      setMessage(`Selamat! Anda menebak angka dengan benar (${secretNumber})! Anda menebak dalam ${attempts} percobaan.`);
      setSecretNumber(Math.floor(Math.random() * 100) + 1);
      setAttempts(0);
    }
  }

  return (
    <div className="App">
      <h1>Tebak Angka</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={guess} onChange={handleChange} />
        <button type="submit">Tebak</button>
      </form>
    </div>
  );
}

export default App;
