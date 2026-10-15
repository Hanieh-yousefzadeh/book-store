
export type CategoryBook = {
    key: string
    title: string
    authors?: {
        key: string
        name: string
    }[]
    cover_id?: number
}