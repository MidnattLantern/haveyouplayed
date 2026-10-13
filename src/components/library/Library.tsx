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

    function handleSetGenreFilter(event: React.ChangeEvent) {
        const { name, checked } = event.target as HTMLInputElement
        if (checked) {
            setGenreFilters(prev => [...prev, name]) // add category
        } else {
            setGenreFilters(genreFilters.filter(genre => genre !== name)) // remove category
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
            <div className={Styles.categoryFilterContainer}>
                <label>
                    <span>Action</span>
                    <input type="checkbox" name={"Action"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Adventure</span>
                    <input type="checkbox" name={"Adventure"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Open world</span>
                    <input type="checkbox" name={"Open world"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Puzzle</span>
                    <input type="checkbox" name={"Puzzle"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Metroidvania</span>
                    <input type="checkbox" name={"Metroidvania"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Horror</span>
                    <input type="checkbox" name={"Horror"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>3D platformer</span>
                    <input type="checkbox" name={"3D platformer"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Souls-like</span>
                    <input type="checkbox" name={"Souls-like"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Comedy</span>
                    <input type="checkbox" name={"Comedy"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Strategy</span>
                    <input type="checkbox" name={"Strategy"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Role-play</span>
                    <input type="checkbox" name={"Role-play"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Shooter</span>
                    <input type="checkbox" name={"Shooter"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Sandbox</span>
                    <input type="checkbox" name={"Sandbox"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Rouge-like</span>
                    <input type="checkbox" name={"Rouge-like"} onChange={handleSetGenreFilter}/>
                </label>
                <label>
                    <span>Multiplayer</span>
                    <input type="checkbox" name={"Multiplayer"} onChange={handleSetGenreFilter}/>
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