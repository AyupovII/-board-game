import { useEffect, useState } from 'react'
import style from './Player.module.scss'
import heroImage from './../../img/hero.png'
interface PlayerProps {
    position: { x: number, y: number }
    setPosition: (position: { x: number, y: number }) => void
    size: number
    randomNumber: number
    startGame: boolean
    x: number
    y: number
    matrixMap: number[][]
    currentPositionMap: number[]
    setCurrentPositionMap: ((currentPosition: [i: number, j: number]) => void)
}
const Player: React.FC<PlayerProps> = ({ position, setPosition, size, randomNumber, startGame, x, y, matrixMap, currentPositionMap, setCurrentPositionMap }) => {
    // console.log("player ", position);
    const [routeMap, setRouteMap] = useState<number[][]>([currentPositionMap])
    const enum Direction {
        RIGHT = "right",
        LEFT = "left",
        TOP = "top",
        BOTTOM = "bottom"
    }
    console.log(routeMap)
    const [direction, setDirection] = useState<Direction>(Direction.RIGHT)
    useEffect(() => {
        const map = document.querySelector(`.map`)
        map?.addEventListener('mousemove', (e: Event | MouseEvent) => {
            // setPosition({ x: (e as MouseEvent).pageX, y: (e as MouseEvent).pageY })
            // console.log(e.pageX, e.pageY)
        })

    }, [])
    useEffect(() => {
        const [i, j] = currentPositionMap;
        for (let t = 0; t < randomNumber; t++) {
            // alert(t)
        }
    }, [randomNumber])

    const calculateDirection = (x: number, y: number, directionToMove: Direction) => {
        // if (matrixMap[x]?.[y + 1] === 1 && matrixMap[x + 1]?.[y] === 1 && directionToMove !== Direction.LEFT) {
        //     return (randomNumber % 2) ? { x, y: y + 1, direction: Direction.RIGHT } : { x: x + 1, y: y, direction: Direction.BOTTOM }
        // }
        // else 
        if (matrixMap[x]?.[y + 1] === 1 && directionToMove !== Direction.LEFT) {
            return { x, y: y + 1, direction: Direction.RIGHT }
        }
        else if (matrixMap[x + 1]?.[y] === 1 && directionToMove !== Direction.TOP) {
            return { x: x + 1, y, direction: Direction.BOTTOM }
        }
        else if (matrixMap[x]?.[y - 1] === 1) {
            return { x, y: y - 1, direction: Direction.LEFT }
        }
        else if (matrixMap[x - 1]?.[y] === 1) {
            return { x: x - 1, y, direction: Direction.TOP }
        }

    }
    useEffect(() => {
        if (startGame) {
            //////////////////
            const array = [];
            let directionToMove = direction;
            let [i, j] = routeMap[routeMap.length - 1];
            // console.log(i, j)
            for (let step = 0; step < randomNumber; step++) {
                const res = calculateDirection(i, j, directionToMove);
                i = res?.x!;
                j = res?.y!;
                directionToMove = res?.direction!;
                array.push([i, j]);
                console.log(res)
            }
            setDirection(directionToMove)
            setRouteMap(array)

            ///////////////////

        }
    }, [randomNumber]);
    useEffect(() => {
        if (startGame) {
            const [i, j] = currentPositionMap;
            // console.log(routeMap);
            let k = 0;
            const animate = (step: number) => {
                const [i, j] = routeMap[step];
                console.log(routeMap[step])
                setPosition({
                    x: x * 2 * (j) + x,
                    y: y * 2 * (i) + y
                })
                setCurrentPositionMap([i, j])
                k++;
                if (k <= routeMap.length) {
                    // console.log(1)
                    setTimeout(() => animate(k - 1), 400);
                }
            };
            animate(0);
        }
        else {
            const [i, j] = currentPositionMap;
            setPosition({
                x: x * 2 * (i) + x,
                y: y * 2 * (j) + y
            })
        }
    }, [routeMap])
    // console.log(position)

    const rotateHero = () => {
        switch (direction) {
            case Direction.RIGHT: {
                return -90;
            }
            case Direction.LEFT: {
                return 90;
            }
            case Direction.TOP: {
                return 180;
            }
            case Direction.BOTTOM: {
                return 0;
            }
        }
    }
    return (
        <img className={style.player}
            src={heroImage}
            alt='hero'
            style={{
                left: position.x - size / 2,
                top: position.y - size / 2,
                width: size,
                height: size,
                transform: `rotate(${rotateHero()}deg)`

            }} />
    )
}

export default Player