import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type FavoriteState = {
    ids: string[]
}

const initialState: FavoriteState = { ids: [] };

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const id = action.payload

            if (state.ids.includes(id)) {
                state.ids = state.ids.filter((favoriteId) => favoriteId !== id)
            } else {
                state.ids.push(id);
            }
        },
        saveFavorites: (state, action: PayloadAction<string[]>) => { state.ids = action.payload }
    }
})
export const {toggleFavorite , saveFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer