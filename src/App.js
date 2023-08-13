import './index.scss';
import React from 'react';

/**
 * Функциональный компонент для отображения счётчика.
 * @returns {JSX.Element} Разметка для отображения счётчика.
 */
function App() {
  return (
    <div className="App">
      <div>
        <h2>Счётчик:</h2>
        <h1>0</h1>
        <button className="minus">- Минус</button>
        <button className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
