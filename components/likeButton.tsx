"use client"


import { useDispatch, useSelector } from "react-redux"
import { stateType, dispatch } from "@/lib/store"
import { toggleFavorite, saveFavorites } from "@/lib/favoriteSlice"
import { useEffect, useState } from "react"
import { Heart, CircleX } from "lucide-react"
import Link from "next/link"
import type { FavoriteBook } from "@/types/book"

export default function LikeButton({ book }: { book: FavoriteBook }) {
    const dispatch = useDispatch<dispatch>()
    const isLogin = useSelector((state: stateType) => Boolean(state.auth.user))
    const favoriteBooks = useSelector((state: stateType) => state.favorite.books)

    const [showModal, setShowModal] = useState(false)
    const [prev, setPreve] = useState(false)

    ///get prev favorite

    useEffect(() => {
        const saved = localStorage.getItem("favoriteBooks")
        if (saved) {
            dispatch(saveFavorites(JSON.parse(saved)))
        }
        setPreve(true)
    }, [dispatch])

    ////set favorte

    useEffect(() => {
        if (prev) {
            localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks))
        }
    }, [favoriteBooks, prev])

    const isFavorite = favoriteBooks.some((item) => item.key === book.key)

    function handleFavorite() {
        if (!isLogin) {
            setShowModal(true);
            return;
        }
        dispatch(toggleFavorite(book));
    }

    function handleModal() {
        setShowModal(false)
    }

    return (
        <div>
            <span className="cursor-pointer" onClick={handleFavorite}> <Heart fill={isFavorite ? "#e11d48" : "none"} color={isFavorite ? "#e11d48" : "currentColor"} /></span>
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Please , First Login</h2>
                            <span className="cursor-pointer" onClick={handleModal}> <CircleX /></span>

                        </div>
                        <div className="modal-action">
                            <Link href="/login" className="btn btn-primary"> Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )


}