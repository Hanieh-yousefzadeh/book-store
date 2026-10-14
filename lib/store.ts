
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/authSlice"


export const store = configureStore({
    reducer : {
        auth : authReducer
    }
})

export type stateType = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch