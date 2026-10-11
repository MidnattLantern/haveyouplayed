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
                    {gameCardData.wallpaper ? (
                        <img src={gameCardData.wallpaper} alt={`Grayscaled and darkened version of ${gameCardData.title} wallpaper`} className={Styles.wallpaperAsBackground}/>
                    ) : undefined}
                    {gameCardData.wallpaper ? (
                        <img src={gameCardData.wallpaper} alt={`Wallpaper for ${gameCardData.title}`} className={Styles.wallpaperAsHero}/>
                    ) : undefined}
                    <h3 className={Styles.title}>{gameCardData.title}</h3>
                    <p>{gameCardData.description}</p>
                    <h3>Genre(s):</h3>
                    <ul>
                        {gameCardData.genre.map((genreName, index) => (
                            <li key={index}>{genreName}</li>
                        ))}
                    </ul>
                    <h3>Available on:</h3>
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