import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { FavoriteBook } from "@/types/book";

type FavoriteState = {
     books: FavoriteBook[]
}

const initialState: FavoriteState = {  books: [] };

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<FavoriteBook>) => {
            const book = action.payload

            if (state.books.includes(book)) {
                state.books = state.books.filter((item) => item.key !== book.key)
            } else {
               state.books.push(book)
            }
        },
        saveFavorites: (state, action: PayloadAction<FavoriteBook[]>) => { state.books = action.payload }
    }
})
export const {toggleFavorite , saveFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer