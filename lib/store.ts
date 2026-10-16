
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/authSlice"
import favoriteReducer from "@/lib/favoriteSlice"


export const store = configureStore({
    reducer : {
        auth : authReducer ,
        favorite : favoriteReducer
    }
})

export type stateType = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch