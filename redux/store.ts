
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice"
import favoriteReducer from "@/redux/favoriteSlice"
import cartReducer from "@/redux/cartSlice"


export const store = configureStore({
    reducer : {
        auth : authReducer ,
        favorite : favoriteReducer,
        cart : cartReducer
    }
})

export type stateType = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch