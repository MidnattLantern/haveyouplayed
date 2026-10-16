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

export type IDraftError = IDraft