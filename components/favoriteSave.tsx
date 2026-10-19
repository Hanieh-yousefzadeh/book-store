"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { stateType, dispatch } from "@/redux/store";
import { saveFavorites } from "@/redux/favoriteSlice";

export default function FavoriteSave() {
    const dispatch = useDispatch<dispatch>();

    const favoriteBooks = useSelector((state: stateType)=> state.favorite.books)

    const [ready, setReady] = useState(false);

    // get favorite
         useEffect(() => {
        const saved = localStorage.getItem("favoriteBooks")
        if (saved) {
            dispatch(saveFavorites(JSON.parse(saved)))
        }
        setReady(true)
    }, [dispatch])

     ////set favorte

    useEffect(() => {
        if (ready) {
            localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks))
        }
    }, [favoriteBooks, ready])

    return null;
}