import type { IGame } from "../../models"
import Styles from "./GameCard.module.scss"

function GameCard({
    gameCardData
} : {
    gameCardData: IGame
}) {

    return (
        <>
            <div className={Styles.cardBorder} tabIndex={0}>
                <article className={Styles.wrapper}>
                    <h3 className={Styles.title}>{gameCardData.title}</h3>
                    <p>{gameCardData.description}</p>
                    <ul>
                        {gameCardData.genre.map((genreName, index) => (
                            <li key={index}>{genreName}</li>
                        ))}
                    </ul>
                    <ul>
                        {gameCardData.platform.map((platformName, index) => (
                            <li key={index}>{platformName}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </>
    )
}

export default GameCard