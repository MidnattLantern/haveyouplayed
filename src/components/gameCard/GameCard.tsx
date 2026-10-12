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
                    <div className={Styles.titleAndLogo}>
                        <h3 className={Styles.title}>{gameCardData.title}</h3>
                        {gameCardData.logo ? (<img src={gameCardData.logo} alt={`Logo for ${gameCardData.title}`}/>) : undefined}
                    </div>
                    <p>{gameCardData.description}</p>
                    <h4>Genre(s):</h4>
                    <ul>
                        {gameCardData.genre.map((genreName, index) => (
                            <li key={index}>{genreName}</li>
                        ))}
                    </ul>
                    <h4>Available on:</h4>
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