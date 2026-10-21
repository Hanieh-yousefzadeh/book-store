"use client"

import { stateType } from "@/redux/store"
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
        return (<p className="pt-10 text-center"> You haven't liked any books yet. </p>)
    }

    console.log(favoriteBooks)

    return (
        <div className="flex px-10 gap-5 pt-3">
            {favoriteBooks.map((book) => (
                <div key={book.key} className="w-67 border rounded-lg pr-3 pl-5 py-5 hover:-translate-y-3 hover:transition-transform border-[#023d8a2f] dark:border-[#a8ccde54]">
                    <Link href={book.key.replace("/works/", "/book/")} >
                        {book.cover_id ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className="w-57 h-67 rounded-lg  " />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} className="w-57 h-67 rounded-lg  " />}
                        <div className="pt-4  w-60 pr-4">
                            <h3 className=" text-base font-semibold line-clamp-1">{book.title}</h3>
                            <div className="flex items-center justify-between pt-3">
                                <p className="line-clamp-1  text-[#1e293bbc] text-sm w-45 dark:text-[#a8ccded7] "> <span className="mr-1.5">By</span>{book.author_name?.join(", ") || "unknwon"}</p>
                                <p className=" font-semibold  text-[#E6E7E4] bg-[#02306bd7] dark:bg-[#07418f] py-1 px-2 rounded-sm">$20.0</p>
                            </div>

                        </div>

                    </Link>
                </div>
            ))}
        </div>
    )
}