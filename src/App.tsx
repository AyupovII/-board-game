import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './assest/components/Card/Card';
import Player from './assest/components/Player/Player';


function App() {
  const matrixMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]
  const cards = [
    {
      id: 1,
      name: "card 1",
    }, {
      id: 2,
      name: "card 1",
    }, {
      id: 3,
      name: "card 1",
    }, {
      id: 4,
      name: "card 1",
    }, {
      id: 5,
      name: "card 1",
    }, {
      id: 6,
      name: "card 1",
    }, {
      id: 7,
      name: "card 1",
    }, {
      id: 8,
      name: "card 1",
    }, {
      id: 9,
      name: "card 1",
    }, {
      id: 10,
      name: "card 1",
    },
    {
      id: 11,
      name: "card 1",
    }, {
      id: 12,
      name: "card 1",
    }, {
      id: 13,
      name: "card 1",
    }, {
      id: 14,
      name: "card 1",
    }, {
      id: 15,
      name: "card 1",
    }, {
      id: 16,
      name: "card 1",
    }, {
      id: 17,
      name: "card 1",
    },
  ]
  const size = 120
  const x = Math.floor(window.innerWidth * 0.1) / 2
  const y = Math.floor(window.innerWidth * 0.1 * 88 / 58) / 2
  const [position, setPosition] = useState({ x: x, y: y })
  const [currentPositionMap, setCurrentPositionMap] = useState([0, 0]);
  const [randomNumber, setRandomNumber] = useState(0)
  const [startGame, setStartGame] = useState(false)
  const tossCubes = () => {
    setStartGame(true)
    setRandomNumber(Math.floor(Math.random() * 8) + 2);
    // setPosition({ x: x, y: y })
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='map'>
        <Player
          currentPositionMap={currentPositionMap}
          setCurrentPositionMap={setCurrentPositionMap}
          matrixMap={matrixMap}
          position={position}
          setPosition={setPosition}
          size={size}
          randomNumber={randomNumber}
          startGame={startGame}
          x={x}
          y={y}
        />
        <div className='random'>
          <p>{randomNumber}</p>
          <button onClick={tossCubes}>Бросить кубики</button>
        </div>
        {matrixMap.map((row, rowIndex) =>
          <div className='row' key={rowIndex}>
            {row.map((card, colIndex) =>
              card ?
                <Card
                  key={`${rowIndex}-${colIndex}`}
                  positionX={colIndex}
                  positionY={rowIndex}
                  playerPosition={position}
                />
                :
                <div key={`${rowIndex}-${colIndex}`}></div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
