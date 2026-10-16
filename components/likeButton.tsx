"use client"


import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { stateType, dispatch } from "@/lib/store"
import { toggleFavorite, saveFavorites } from "@/lib/favoriteSlice"
import { useEffect, useState } from "react"
import { Heart, CircleX } from "lucide-react"
import Link from "next/link"

export default function LikeButton({ bookId }: { bookId: string }) {
    const dispatch = useDispatch<dispatch>()
    const isLogin = useSelector((state: stateType) => Boolean(state.auth.user))
    const favoriteIds = useSelector((state: stateType) => state.favorite.ids)

    const [showModal, setShowModal] = useState(false)
    const [prev, setPreve] = useState(false)

    ///get prev favorite

    useEffect(() => {
        const saved = localStorage.getItem("favoriteIds")
        if (saved) {
            dispatch(saveFavorites(JSON.parse(saved)))
        }
        setPreve(true)
    }, [dispatch])

    ////set favorte

    useEffect(() => {
        if (prev) {
            localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds))
        }
    }, [favoriteIds, prev])

    const isFavorite = favoriteIds.includes(bookId);

    function handleFavorite() {
        if (!isLogin) {
            setShowModal(true);
            return;
        }
        dispatch(toggleFavorite(bookId));
    }

    function handleModal() {
        setShowModal(false)
    }

    return (
        <div>
            <span className="cursor-pointer" onClick={handleFavorite}> <Heart  fill={isFavorite ? "#e11d48" : "none"}   color={isFavorite ? "#e11d48" : "currentColor"}/></span>
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