import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Player from './components/Player/Player';
import CellPlayingField from './components/CellPlayingField/CellPlayingField';
//////////////////////
import airport from './assest/icon/airport.png';
import bank from './assest/icon/bank.png';
import carNewDealership from './assest/icon/car_dealer_secondCars.png';
import carOldDealership from './assest/icon/car_delaer_newCars.png';
import caro from './assest/icon/caro.png';
import cityHall from './assest/icon/city_hall.png';
import construction from './assest/icon/construction.png';
import denza from './assest/icon/denza.png';
import flamant from './assest/icon/flamant.png';
import galaxyNightClub from './assest/icon/galaxy_nightclub.png';
import levelsNightclub from './assest/icon/levels_nightclub.png';
import lombardia from './assest/icon/lombardia.png';
import parking from './assest/icon/parking.png';
import passion from './assest/icon/passion.png';
import events from './assest/icon/events.png';
import fortune from './assest/icon/fortune.png';
import safino from './assest/icon/safino.png';
import medicalCenter from './assest/icon/medical_center.png';
import olivers from './assest/icon/olivers.png';
import lasVegasSign from './assest/icon/welcome.png';
import cosaNostra from './assest/icon/cosa_nostra.png';
import monorail from './assest/icon/monorail.png';
import policeStation from './assest/icon/police_station.png';
import gasStation from './assest/icon/gas_station.png';
import simpson_20 from './assest/icon/simpson_20.png';
import simpson_36 from './assest/icon/simpson_36.png';
import simspon_128 from './assest/icon/simspon_128.png';
import skt_grand from './assest/icon/skt_grand.png';
import spectre from './assest/icon/spectre.png';
import sunlight_44 from './assest/icon/sunlight_44.png';
import sunlight_69 from './assest/icon/sunlight_69.png';
import sunlight_96 from './assest/icon/sunlight_96.png';
import sunrise from './assest/icon/sunrise.png';
import tangoNightClub from './assest/icon/tango_nightclub.png';
import valerian from './assest/icon/valerian.png';
import vesper from './assest/icon/vesper.png';
import welcome from './assest/icon/welcome.png';
import winnie from './assest/icon/winnie.png';
import bigApple from './assest/icon/big_apple.png';

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
    name: 'caro',
    image: caro
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
    name: 'city-hall',
    image: cityHall
  },
  {
    id: 7,
    name: 'construction-company',
    image: construction
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
    image: medicalCenter
  },
  {
    id: 11,
    name: 'welcome',
    image: welcome
  },
  {
    id: 12,
    name: 'las-vegas-sign',
    image: lasVegasSign
  },
  {
    id: 13,
    name: 'mafia-house',
    image: cosaNostra
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
    name: 'winnie',
    image: winnie
  },
  {
    id: 18,
    name: 'simpson_20',
    image: simpson_20
  },
  {
    id: 19,
    name: 'tangoNightClub',
    image: tangoNightClub
  }
  ,
  {
    id: 20,
    name: 'simpson_36',
    image: simpson_36
  },
  {
    id: 21,
    name: 'sunrise',
    image: sunrise
  },
  {
    id: 22,
    name: "levelsNightclub",
    image: levelsNightclub
  },
  {
    id: 23,
    name: 'skt_grand',
    image: skt_grand
  },
  {
    id: 24,
    name: 'vesper',
    image: vesper
  },
  {
    id: 25,
    name: 'lombardia',
    image: lombardia
  },
  {
    id: 26,
    name: 'passion',
    image: passion
  },
  {
    id: 27,
    name: 'flamant',
    image: flamant
  },
  {
    id: 28,
    name: 'spectre',
    image: spectre
  },
  {
    id: 29,
    name: 'valerian',
    image: valerian
  },
  {
    id: 30,
    name: 'parking',
    image: parking
  },
  {
    id: 31,
    name: 'safino',
    image: safino
  },
  {
    id: 32,
    name: 'olivers',
    image: olivers
  },
  {
    id: 33,
    name: 'sunlight_96',
    image: sunlight_96
  },
  {
    id: 34,
    name: 'sunlight_69',
    image: sunlight_69
  },
  {
    id: 35,
    name: 'sunlight_44',
    image: sunlight_44
  },
  {
    id: 36,
    name: 'bigApple',
    image: bigApple
  }
]


function App() {
  const matrixMap = [
    [0, 0, 0, 0, 0, 0, 8, 30, 9, 18, 8, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 16, 0, 0, 0, 0],
    [16, 8, 10, 9, 22, 4, 9, 0, 0, 0, 14, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0],
    [31, 0, 0, 0, 0, 0, 0, 0, 28, 29, 9, 0, 0, 0, 0],
    [9, 6, 8, 16, 0, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0],
    [15, 0, 0, 9, 1, 8, 1, 9, 26, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0],
    [32, 0, 0, 0, 0, 0, 0, 24, 23, 8, 22, 9, 15, 8, 0],
    [16, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 18, 0],
    [9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 16, 9],
    [13, 21, 33, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 21],
    [0, 0, 8, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 34, 9, 35, 3, 7, 16, 1, 1, 1, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 18, 8, 20, 9],
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
                  backgroundImage={Icons[card - 1].image}

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
