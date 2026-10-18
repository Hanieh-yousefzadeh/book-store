"use client"

import {Provider} from "react-redux"
import {store} from "@/redux/store"
import PrevAuth from "./prevAuth"
import FavoriteSave from "./favoriteSave"


export default function StoreProvider({children} : {children: React.ReactNode}){
    return(
        <Provider store={store}>
            <FavoriteSave/>
            <PrevAuth/>
            {children}
            </Provider>
    )
}