import { useEffect, useState } from 'react'
import style from './Player.module.scss'
import heroImage from './../../assest/img/hero.png'
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
    const [routeMap, setRouteMap] = useState<number[][]>([currentPositionMap])
    const enum Direction {
        RIGHT = "right",
        LEFT = "left",
        TOP = "top",
        BOTTOM = "bottom"
    }
    const [direction, setDirection] = useState<Direction>(Direction.LEFT)
    useEffect(() => {
        const map = document.querySelector(`.map`)
        map?.addEventListener('mousemove', (e: Event | MouseEvent) => {
            // setPosition({ x: (e as MouseEvent).pageX, y: (e as MouseEvent).pageY })
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
        console.log(Boolean(randomNumber % 2))
        console.log(matrixMap[y]?.[x - 1], matrixMap[y + 1]?.[x], directionToMove)

        if (matrixMap[y]?.[x - 1] &&
            matrixMap[y - 1]?.[x] && directionToMove === Direction.LEFT) {
                console.log("top-left")
            return randomNumber % 2 ? { y, x: x - 1, direction: Direction.LEFT } : { y: y - 1, x, direction: Direction.TOP }
        }
        else if (matrixMap[y]?.[x + 1]  &&
            matrixMap[y - 1]?.[x] && directionToMove === Direction.TOP) {
                console.log("top-right")
            return randomNumber % 2 ? { y, x: x + 1, direction: Direction.RIGHT } : { y: y - 1, x, direction: Direction.TOP }
        }
        else if (matrixMap[y]?.[x - 1]  &&
            matrixMap[y + 1]?.[x] && directionToMove === Direction.LEFT) {
                console.log("left-bottom")
            return randomNumber % 2 ? { y, x: x - 1, direction: Direction.LEFT } : { y: y + 1, x, direction: Direction.BOTTOM }
        }
        else if (matrixMap[y]?.[x + 1]  &&
            matrixMap[y + 1]?.[x] && directionToMove === Direction.RIGHT) {
                console.log("right-bottom")
            return randomNumber % 2 ? { y: y + 1, x, direction: Direction.BOTTOM } : { y, x: x + 1, direction: Direction.RIGHT }
        }
        else if (matrixMap[y+1]?.[x]  &&
            matrixMap[y - 1]?.[x] && directionToMove === Direction.LEFT) {
                console.log("top-bottom")
            return randomNumber % 2 ? { y: y - 1, x: x, direction: Direction.TOP } : { y: y + 1, x, direction: Direction.BOTTOM }
        }
        else if (matrixMap[y]?.[x-1]  &&
            matrixMap[y]?.[x+1] && directionToMove === Direction.TOP) {
                console.log("left-right")
            return randomNumber % 2 ? { y: y, x: x-1, direction: Direction.LEFT } : { y: y, x: x+1, direction: Direction.RIGHT }
        }
        else if (matrixMap[y]?.[x+1]  &&
            matrixMap[y+1]?.[x] && directionToMove === Direction.BOTTOM) {
                console.log("bottom-right")
            return randomNumber % 2 ? { y: y, x: x+1, direction: Direction.RIGHT } : { y: y+1, x: x, direction: Direction.BOTTOM }
        }
        // else if (matrixMap[y]?.[x + 1] && directionToMove !== Direction.LEFT &&
        //     matrixMap[y]?.[x-1] && directionToMove !== Direction.RIGHT) {
        //     return randomNumber % 2 ? { y, x: x - 1, direction: Direction.RIGHT } : { y: y, x: x+1, direction: Direction.LEFT }
        // }
        // else if (matrixMap[y]?.[x + 1] && directionToMove !== Direction.LEFT &&
        //     matrixMap[y-1]?.[x] && directionToMove !== Direction.BOTTOM) {
        //     return randomNumber % 2 ? { y:y-1, x: x, direction: Direction.RIGHT } : { y: y, x: x+1, direction: Direction.LEFT }
        // }
        // else if (matrixMap[y]?.[x - 1] && directionToMove !== Direction.RIGHT &&
        //     matrixMap[y - 1]?.[x] && directionToMove !== Direction.BOTTOM) {
        //     return randomNumber % 2 ? { y, x: x - 1, direction: Direction.LEFT } : { y: y - 1, x, direction: Direction.TOP }
        // }

        else if (matrixMap[y]?.[x + 1] && directionToMove !== Direction.LEFT) {
            console.log(1)
            return { y, x: x + 1, direction: Direction.RIGHT }
        }
        else if (matrixMap[y]?.[x - 1] && directionToMove !== Direction.RIGHT) {
            console.log(2)
            return { y, x: x - 1, direction: Direction.LEFT }
        }
        else if (matrixMap[y - 1]?.[x] && directionToMove !== Direction.BOTTOM) {
            console.log(3)
            return { y: y - 1, x, direction: Direction.TOP }
        }
        else if (matrixMap[y + 1]?.[x] && directionToMove !== Direction.TOP) {
            console.log(4)
            return { y: y + 1, x, direction: Direction.BOTTOM }
        }

    }
    useEffect(() => {
        if (startGame) {
            //////////////////
            const array = [];
            let directionToMove = direction;
            let [i, j] = routeMap[routeMap.length - 1];
            for (let step = 0; step < randomNumber; step++) {
                const res = calculateDirection(i, j, directionToMove);
                console.log(res)
                i = res?.x!;
                j = res?.y!;
                directionToMove = res?.direction!;
                array.push([i, j]);
            }
            setDirection(directionToMove)
            setRouteMap(array)

            ///////////////////

        }
    }, [randomNumber]);
    useEffect(() => {
        if (startGame) {
            const [i, j] = currentPositionMap;
            let k = 0;
            const animate = (step: number) => {
                const [i, j] = routeMap[step];
                setPosition({
                    x: x * (i) + x / 2,
                    y: y * (j) + y / 2
                })
                setCurrentPositionMap([i, j])
                k++;
                if (k <= routeMap.length) {
                    setTimeout(() => animate(k - 1), 400);
                }
            };
            animate(0);
        }
        else {
            const [i, j] = currentPositionMap;
            setPosition({
                x: x * (i) + x / 2,
                y: y * (j) + y / 2
            })
        }
    }, [routeMap])

    // const rotateHero = () => {
    //     switch (direction) {
    //         case Direction.RIGHT: {
    //             return -90;
    //         }
    //         case Direction.LEFT: {
    //             return 90;
    //         }
    //         case Direction.TOP: {
    //             return 180;
    //         }
    //         case Direction.BOTTOM: {
    //             return 0;
    //         }
    //     }
    // }
    return (
        <div className={style.player}
            // src={heroImage}
            // alt='hero'
            style={{
                left: position.x - size / 2,
                top: position.y - size / 2,
                width: size,
                height: size,
                // transform: `rotate(${rotateHero()}deg)`

            }} />
    )
}

export default Player