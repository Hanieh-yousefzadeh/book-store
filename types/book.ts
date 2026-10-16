
export type book = {
    key: string
    title: string
    author_name?: string[]
    cover_i?: number
}



export type CategoryBook = {
    key: string
    title: string
    authors?: {
        key: string
        name: string
    }[]
    cover_id?: number
}

export type FavoriteBook = {
    key: string
    title: string
    cover_id?: number
}