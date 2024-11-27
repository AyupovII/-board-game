import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Player from './components/Player/Player';
import CellPlayingField from './components/CellPlayingField/CellPlayingField';
//////////////////////
import airport from './assest/icon/airport.png';
import bank from './assest/icon/bank.png';
import businessEstablishment from './assest/icon/business-establishment.png';
import carNewDealership from './assest/icon/car-new-dealership.png';
import carOldDealership from './assest/icon/car-old-dealership.png';
import casino from './assest/icon/casino.png';
import constructionCompany from './assest/icon/construction-company.png';
import events from './assest/icon/events.png';
import fortune from './assest/icon/fortune.jpg';
import hospitalStation from './assest/icon/hospital-station.png';
import house from './assest/icon/house.png';
import lasVegasSign from './assest/icon/welcome.png';
import mafiaHouse from './assest/icon/mafia-house.png';
import monorail from './assest/icon/monorail.png';
import policeStation from './assest/icon/police-station.png';
import gasStation from './assest/icon/gas_station.png';
import townHall from './assest/icon/town-hall.png';
import simpson_20 from './assest/icon/simpson_20.png';

const Icons = [
  {
    id: 1,
    name: 'airport',
    image: airport
  },
  {
    id: 2,
    name: 'bank',
    image: bank
  },
  {
    id: 3,
    name: 'business-establishment',
    image: businessEstablishment
  },
  {
    id: 4,
    name: 'car-new-dealership',
    image: carNewDealership
  },
  {
    id: 5,
    name: 'car-old-dealership',
    image: carOldDealership
  },
  {
    id: 6,
    name: 'casino',
    image: casino
  },
  {
    id: 7,
    name: 'construction-company',
    image: constructionCompany
  },
  {
    id: 8,
    name: 'events',
    image: events
  },
  {
    id: 9,
    name: 'fortune',
    image: fortune
  },
  {
    id: 10,
    name: 'hospital-station',
    image: hospitalStation
  },
  {
    id: 11,
    name: 'house',
    image: house
  },
  {
    id: 12,
    name: 'las-vegas-sign',
    image: lasVegasSign
  },
  {
    id: 13,
    name: 'mafia-house',
    image: mafiaHouse
  },
  {
    id: 14,
    name: 'monorail',
    image: monorail
  },
  {
    id: 15,
    name: 'police-station',
    image: policeStation
  },
  {
    id: 16,
    name: 'gas-station',
    image: gasStation
  },
  {
    id: 17,
    name: 'town-hall',
    image: townHall
  },
  {
    id: 18,
    name: 'simpson_20',
    image: simpson_20
  }
]


function App() {
  const matrixMap = [
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 9],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 11],
    [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 1, 1, 1, 1, 7, 1, 1, 1, 1, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 18, 1, 11, 9],
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

  const size = 60
  const x = Math.floor(window.innerWidth / 15)
  const y = Math.floor(window.innerWidth / 15)
  const [position, setPosition] = useState({ x: x, y: y })
  const [currentPositionMap, setCurrentPositionMap] = useState([9, 13]);
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
                <CellPlayingField
                  key={`${rowIndex}-${colIndex}`}
                  backgroundImage={Icons[card-1].image}

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
