"use client"

import { stateType } from "@/lib/store"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export default function FavoriteBooks() {

    const favoriteBooks = useSelector((state: stateType) => state.favorite.books)

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <p className="p-8">Loading favorites...</p>
    }
    
    if (favoriteBooks.length === 0) {
        return (<p className="p-8"> You haven't liked any books yet. </p>)
    }

    return (
        <div>
            {favoriteBooks.map((book) => (
                <div key={book.key}>
                    <Link href={book.key.replace("/works/", "/book/")}>
                        {book.cover_id ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} />}
                        <h2>  {book.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}