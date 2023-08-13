import './index.scss';
import React from 'react';

/**
 * Функциональный компонент для отображения счётчика.
 * @returns {JSX.Element} Разметка для отображения счётчика.
 */
function App() {

  const [count, setCount] = React.useState(0);

  /**
   * Функция для увеличения счётчика на единицу.
   */
  const onClickPlus = () => {
    setCount(count + 1);
  }

  /**
   * Функция для уменьшения счётчика на единицу.
   */
  const onClickMinus = () => {
    setCount(count - 1);
  }

  /**
   * Функция для умножения счётчика на два.
   */
  const onClickMultiply = () => {
    setCount(count * 2);
  }

  /**
   * Функция для деления счётчика на два.
   */
  const onClickDivide = () => {
    setCount(Math.round(count / 2));
  }

  /**
   * Функция для возведения счётчика во вторую степень.
   */
  const onClickSquare = () => {
    setCount(count ** 2);
  }

  return (
    <div className="App">
      <div>
        <h2>Счётчик:</h2>
        <h1>{count}</h1>
        <div className='button-container'>
          <button className="red" onClick={onClickMinus}>- Минус</button>
          <button className="green" onClick={onClickPlus}>Плюс +</button>
        </div>
        <div className='button-container'>
          <button className='red' onClick={onClickDivide}>/ Разделить</button>
          <button className='green' onClick={onClickMultiply}>Умножить *</button>
        </div>
        <button className='yellow' onClick={onClickSquare}>Возвести в степень ^</button>
      </div>
    </div>
  );
}

export default App;
