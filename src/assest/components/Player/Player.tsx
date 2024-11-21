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
    const [routeMap, setRouteMap] = useState<number[][]>([])
    useEffect(() => {
        const map = document.querySelector(`.map`)
        map?.addEventListener('mousemove', (e: Event | MouseEvent) => {
            // setPosition({ x: (e as MouseEvent).pageX, y: (e as MouseEvent).pageY })
            // console.log(e.pageX, e.pageY)
        })

    }, [])
    useEffect(()=>{
        const [i,j] = currentPositionMap;
        for (let t=0; t<randomNumber; t++){
            // alert(t)
        }
    },[randomNumber])
    useEffect(() => {
        if (startGame) {
            let k = 0;
            const animate = () => {
                setPosition({ x: x * 2 * (k) + x, y });
                k++;
                if (k <= randomNumber) {
                    setTimeout(animate, 400);
                }
            };
            animate();
        }
    }, [randomNumber]);
    useEffect(() => {
        const [i, j] = currentPositionMap;
        setPosition({
            x: x * 2 * (i) + x,
            y: y * 2 * (j) + y
        })
    }, [currentPositionMap])
    return (
        <img className={style.player}
            src={heroImage}
            alt='hero'
            style={{
                left: position.x - size / 2,
                top: position.y - size / 2,
                width: size,
                height: size,
                transform: "rotate(-45deg)"

            }} />
    )
}

export default Player