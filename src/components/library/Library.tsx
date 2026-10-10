import type { IGame } from "../../models"
import Styles from "./Library.module.scss"
import GameCard from "../gameCard/GameCard"
import rawLibraryData from "./library-data.json"
import { useState } from "react"

function Library() {
    const libraryData = rawLibraryData as IGame[]
    const [platformFilters, setPlatformFilters] = useState(["Steam for Windows", "Steam for Mac"])

    function handleApplyPlatformFilters() {
        const filtered = libraryData.filter(gameFromLibraryData =>
            platformFilters.some(platformToInclude =>
                gameFromLibraryData.platform.some(platformThatExists =>
                    platformThatExists === platformToInclude
                )
            )
        )
        console.log(filtered)
    }

    return (
        <>
            <h2>Library</h2>
            <div>
                <button onClick={handleApplyPlatformFilters}>test filter platforms</button>
            </div>
            <div className={Styles.container}>
                {libraryData.map((game, index) => (
                    <GameCard key={index} gameCardData={game}/>
                ))}
            </div>
        </>
    )
}

export default Library