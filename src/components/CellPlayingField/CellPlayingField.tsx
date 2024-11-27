import style from './CellPlayingField.module.scss'

interface CellPlayingFieldProps {
    backgroundImage: string
}
const CellPlayingField: React.FC<CellPlayingFieldProps> = ({ backgroundImage }) => {
    return (
        <div className={style.cellPlayingField}
        >
            <div className={style.cellPlayingField__container}>
                <img className={style.cellPlayingField__img} src={backgroundImage} />
            </div>
        </div>
    )
}

export default CellPlayingField