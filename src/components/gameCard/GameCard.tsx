import { useState } from "react"
import type { IGame } from "../../models"
import Styles from "./GameCard.module.scss"

function GameCard({
    gameCardData
} : {
    gameCardData: IGame
}) {
    const [readMore, setReadMore] = useState<boolean>(false)

    return (
        <>
            <div className={`${Styles.container}`}>
                <article className={Styles.gameCardContainer}>
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
                    {readMore ? (<>
                            <p>{`${gameCardData.description}`}</p>
                            <div className={Styles.genresAndPlatforms}>
                                <div>
                                    <h4>Available on:</h4>
                                    <ul>
                                        {gameCardData.platform.map((platformName, index) => (
                                            <li key={index}>{platformName}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Genre(s):</h4>
                                    <ul>
                                        {gameCardData.genre.map((genreName, index) => (
                                            <li key={index}>{genreName}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <span className={Styles.closeSpan}><u>Close</u></span>
                        </>) : (<>
                            <p className={Styles.gameDescription}>{`${gameCardData.description.slice(0, 150)}...`}<u>Read more</u></p>
                        </>)}
                </article>
                <button className={Styles.readMoreButton} onClick={() => {setReadMore(!readMore)}} aria-label="Show or hide detailed information">{readMore ? "Hide" : "Show"}</button>
            </div>
        </>
    )
}

export default GameCard