import { useEffect, useMemo, useState } from 'react';
import backgroundCard from '../../img/background-card.webp';
import frontgroundCard from '../../img/frontground-card.png';
import style from './Card.module.scss'
interface CardProps {
    positionX: number;
    positionY: number;
    playerPosition: { x: number, y: number }
}
const Card: React.FC<CardProps> = ({ positionX, positionY, playerPosition }) => {

    const positionCard = useMemo(() => ({
        x1: Math.round((positionX) * window.innerWidth * 0.1),
        y1: Math.round((positionY) * window.innerWidth * 0.1 * 88 / 58),
        x2: Math.round((positionX + 1) * window.innerWidth * 0.1),
        y2: Math.round((positionY + 1) * window.innerWidth * 0.1 * 88 / 58),
    }), [window.innerWidth])


    const [state, setState] = useState(false);

    useEffect(() => {
        if (playerPosition.x > positionCard.x1 &&
            playerPosition.x < positionCard.x2 &&
            playerPosition.y > positionCard.y1 &&
            playerPosition.y < positionCard.y2) {
            setState(true)
        }
        if (state) {
            setTimeout(() => setState(false), 400)
        }
    }, [playerPosition.x, playerPosition.y])

    return (
        <div className={`${style['card-container']} ${state ? style.show : ''}`}>
            <div className={style.card}>
                <div className={style['card__front']}>
                    <img src={frontgroundCard} alt="Front image" />
                </div>
                <div className={style['card__back']}>
                    <img src={backgroundCard} alt="Back image" />
                </div>
            </div>
        </div>
    )
}
export default Card