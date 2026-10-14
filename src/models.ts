// type IGenres = [
//     "Other",
//     "Action",
//     "Adventure",
//     "Open world",
//     "Puzzle",
//     "Metroidvania",
//     "Souls-like"
// ]

// type IPlatforms = [
//     "Steam for Windows",
//     "Steam for Mac",
//     "Steam for Linux",
//     "Nintendo Switch",
//     "Nintendo Switch 2",
//     "Xbox Series",
//     "PlayStation 5"
// ]

export type IGame = {
    title: string,
    description: string,
    wallpaper?: string,
    logo?: string,
    genre: string[],
    platform: string[]
}

export type IDraft = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}