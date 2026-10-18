import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import type { CartBook } from "@/types/book";


type Cartinitial = {
    items : CartBook[]
}

const initialState :Cartinitial = {
    items :[]
}


const cartSlice = createSlice({
    name : "caet",
    initialState,
    reducers :{

        addToCart :(state , action : PayloadAction<CartBook>) =>{
            const book = state.items.find((item)=> item.key === action.payload.key)

            if(book){
                book.quantity +=1
            }else{
                state.items.push( {...action.payload , quantity :1})
            }
        },
        increase : (state ,action : PayloadAction<string>) =>{
            const book = state.items.find((item) => item.key === action.payload)
            if(book){
                book.quantity += 1
            }
        },
        decrease : (state , action : PayloadAction<string>) =>{
            const book = state.items.find((item) => item.key === action.payload)
            if(book && book.quantity > 1){
                book.quantity -= 1
            }
        },
        deletecart : (state ,action :PayloadAction<string>) =>{

            state.items = state.items.filter((item) => item.key !== action.payload)

        }
    }
})
export const {addToCart ,increase ,decrease ,deletecart} = cartSlice.actions
export default cartSlice.reducer