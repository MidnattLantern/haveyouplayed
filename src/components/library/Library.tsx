import type { IGame } from "../../models"
import Styles from "./Library.module.scss"
import GameCard from "../gameCard/GameCard"
import libraryData from "./library-data.json"

function Library() {
    const games = libraryData as IGame[]

    return (
        <>
            <h2>Library</h2>
            <div className={Styles.container}>
                {games.map((game, index) => (
                    <GameCard key={index} gameCardData={game}/>
                ))}
            </div>
        </>
    )
}

export default Library