import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


type User = {
    name: string
    email: string
}

// const initialState : {user: User | null} = {user:null}
type AuthState = {
    user: User | null
}

const initialState: AuthState = {
    user: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        restoreUser: (state, action: PayloadAction<User | null>) => {
        state.user = action.payload
    }
    }
})

export const { login, logout ,restoreUser} = authSlice.actions
export default authSlice.reducer