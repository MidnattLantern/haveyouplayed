import type { IGame } from "../../models"
import Styles from "./Library.module.scss"
import GameCard from "../gameCard/GameCard"
import rawLibraryData from "./library-data.json"
import { useState } from "react"

function Library() {
    const libraryData = rawLibraryData as IGame[]
    const [platformFilters, setPlatformFilters] = useState<string[]>([])
    const [genreFilters, setGenreFilters] = useState<string[]>([])

    function handleSetPlatformFilter(event: React.ChangeEvent) {
        const { name, checked } = event.target as HTMLInputElement
        if (checked) {
            setPlatformFilters(prev => [...prev, name]) // add platform
        } else {
            setPlatformFilters(platformFilters.filter(platform => platform !== name)) // remove platform
        }
    }

    function handleClearFilter() {
        setPlatformFilters([])
        setGenreFilters([])
    }

    function handleSetGenreFilter(event: React.ChangeEvent) {
        const { name, checked } = event.target as HTMLInputElement
        if (checked) {
            setGenreFilters(prev => [...prev, name]) // add genre
        } else {
            setGenreFilters(genreFilters.filter(genre => genre !== name)) // remove genre
        }
    }

    const filtered = libraryData
    .filter(game => {
        const filteredByPlatform = platformFilters.length === 0 || platformFilters.some(selectedPlatform =>
            game.platform.some(gamePlatform =>
                gamePlatform === selectedPlatform
            )
        )
        const filteredByGenre = genreFilters.length === 0 || genreFilters.some(selectedGenre =>
            game.genre.some(gameGenre =>
                gameGenre === selectedGenre
            )
        )

        return filteredByPlatform && filteredByGenre
    })

    return (
        <>
            <h2>Library</h2>
            <details className={Styles.filterContainer}>
                <summary>Filters</summary>
                <div className={Styles.filterOptionsWrapper}>
                    <button onClick={handleClearFilter} className={Styles.clearFilterButton}>Clear filters</button>
                    <section>
                        <h3>By platform</h3>
                        <label>
                            <span>Steam for Windows</span>
                            <input type="checkbox" name={"Steam for Windows"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Steam for Windows")}/>
                        </label>
                        <label>
                            <span>Steam for Mac</span>
                            <input type="checkbox" name={"Steam for Mac"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Steam for Mac")}/>
                        </label>
                        <label>
                            <span>Steam for Linux</span>
                            <input type="checkbox" name={"Steam for Linux"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Steam for Linux")}/>
                        </label>
                        <label>
                            <span>Xbox One</span>
                            <input type="checkbox" name={"Xbox One"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Xbox One")}/>
                        </label>
                        <label>
                            <span>Xbox Series</span>
                            <input type="checkbox" name={"Xbox Series"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Xbox Series")}/>
                        </label>
                        <label>
                            <span>Nintendo Switch</span>
                            <input type="checkbox" name={"Nintendo Switch"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Nintendo Switch")}/>
                        </label>
                        <label>
                            <span>Nintendo Switch 2</span>
                            <input type="checkbox" name={"Nintendo Switch 2"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("Nintendo Switch 2")}/>
                        </label>
                        <label>
                            <span>PlayStation 4</span>
                            <input type="checkbox" name={"PlayStation 4"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("PlayStation 4")}/>
                        </label>
                        <label>
                            <span>PlayStation 5</span>
                            <input type="checkbox" name={"PlayStation 5"} onChange={handleSetPlatformFilter} checked={platformFilters.includes("PlayStation 5")}/>
                        </label>
                    </section>
                    <section>
                        <h3>By genre</h3>
                        <label>
                            <span>Action</span>
                            <input type="checkbox" name={"Action"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Action")}/>
                        </label>
                        <label>
                            <span>Adventure</span>
                            <input type="checkbox" name={"Adventure"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Adventure")}/>
                        </label>
                        <label>
                            <span>Open world</span>
                            <input type="checkbox" name={"Open world"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Open world")}/>
                        </label>
                        <label>
                            <span>Puzzle</span>
                            <input type="checkbox" name={"Puzzle"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Puzzle")}/>
                        </label>
                        <label>
                            <span>Metroidvania</span>
                            <input type="checkbox" name={"Metroidvania"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Metroidvania")}/>
                        </label>
                        <label>
                            <span>Horror</span>
                            <input type="checkbox" name={"Horror"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Horror")}/>
                        </label>
                        <label>
                            <span>3D platformer</span>
                            <input type="checkbox" name={"3D platformer"} onChange={handleSetGenreFilter} checked={genreFilters.includes("3D platformer")}/>
                        </label>
                        <label>
                            <span>Souls-like</span>
                            <input type="checkbox" name={"Souls-like"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Souls-like")}/>
                        </label>
                        <label>
                            <span>Strategy</span>
                            <input type="checkbox" name={"Strategy"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Strategy")}/>
                        </label>
                        <label>
                            <span>Role-play</span>
                            <input type="checkbox" name={"Role-play"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Role-play")}/>
                        </label>
                        <label>
                            <span>Shooter</span>
                            <input type="checkbox" name={"Shooter"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Shooter")}/>
                        </label>
                        <label>
                            <span>Sandbox</span>
                            <input type="checkbox" name={"Sandbox"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Sandbox")}/>
                        </label>
                        <label>
                            <span>Rouge-like</span>
                            <input type="checkbox" name={"Rouge-like"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Rouge-like")}/>
                        </label>
                        <label>
                            <span>Multiplayer</span>
                            <input type="checkbox" name={"Multiplayer"} onChange={handleSetGenreFilter} checked={genreFilters.includes("Multiplayer")}/>
                        </label>
                    </section>
                </div>
            </details>
            <div className={Styles.libraryContainer}>
                {filtered.map((game, index) => (
                    <GameCard key={index} gameCardData={game}/>
                ))}
            </div>
        </>
    )
}

export default Library