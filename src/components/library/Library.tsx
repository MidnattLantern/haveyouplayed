import type { IGame } from "../../models"
import Styles from "./Library.module.scss"
import GameCard from "../gameCard/GameCard"
import rawLibraryData from "./library-data.json"
import { useState } from "react"

function Library() {
    const libraryData = rawLibraryData as IGame[]
    const [platformFilters, setPlatformFilters] = useState<string[]>([])

    function handleSetPlatformFilter(event: React.ChangeEvent) {
        const { name, checked } = event.target as HTMLInputElement
        if (checked) {
            setPlatformFilters(prev => [...prev, name]) // add platform
        } else {
            setPlatformFilters(platformFilters.filter(platform => platform !== name)) // remove platform
        }
    }

    const filtered = platformFilters.length === 0 ? (
        libraryData // no filter = just show all of it
    ) : (
        libraryData.filter(gameFromLibraryData =>
            platformFilters.some(platformToInclude =>
                gameFromLibraryData.platform.some(platformThatExists =>
                    platformThatExists === platformToInclude
                )
            )
        )        
    )


    return (
        <>
            <h2>Library</h2>
            <div className={Styles.platformFilterContainer}>
                <label>
                    <span>Steam for Windows</span>
                    <input type="checkbox" name={"Steam for Windows"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>Steam for Mac</span>
                    <input type="checkbox" name={"Steam for Mac"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>Steam for Linux</span>
                    <input type="checkbox" name={"Steam for Linux"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>Xbox One</span>
                    <input type="checkbox" name={"Xbox One"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>Xbox Series</span>
                    <input type="checkbox" name={"Xbox Series"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>Nintendo Switch</span>
                    <input type="checkbox" name={"Nintendo Switch"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>Nintendo Switch 2</span>
                    <input type="checkbox" name={"Nintendo Switch 2"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>PlayStation 4</span>
                    <input type="checkbox" name={"PlayStation 4"} onChange={handleSetPlatformFilter}/>
                </label>
                <label>
                    <span>PlayStation 5</span>
                    <input type="checkbox" name={"PlayStation 5"} onChange={handleSetPlatformFilter}/>
                </label>
            </div>
            <div className={Styles.container}>
                {filtered.map((game, index) => (
                    <GameCard key={index} gameCardData={game}/>
                ))}
            </div>
        </>
    )
}

export default Library