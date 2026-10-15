"use client"

import { useState } from "react"
import Link from "next/link"
import type { book } from "@/types/book"


export default function AllBooks({initialBooks}:{initialBooks : book[]}) {

    const [books, setBooks] = useState<book[]>(initialBooks)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const nextPage = page + 1;


        async function loadmore() {
            if(loading){
                return
            }
            setLoading(true)
            setError("")
            try {
                const response = await fetch(`https://openlibrary.org/search.json?title=the&limit=20&page=${nextPage}&fields=key,title,author_name,cover_i`)
                if (!response.ok) {
                    throw new Error("Failed to load more books")
                }
                const data = await response.json()
                const newBooks: book[] = data.docs
                setBooks((prevBooks) => [...prevBooks , ...newBooks])
                setPage(nextPage);
            } catch{
                setError("Failed to load more books")
            } finally {
                setLoading(false);
            }
        }

    return (
        <div>
            <div>
                {books.map((book) => (

                    <Link key={book.key} href={`/book/${book.key.split("/").pop()}`}>
                        {book.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} />}
                        <div className="pl-3 text-sm font-semibold">
                            <h3>{book.title}</h3>
                            <p className=""> Author: {book.author_name?.join(", ")}</p>
                        </div>
                    </Link>

                ))}
            </div>
            {error && (<p className="text-error mt-4">{error}</p>)}
            <button onClick={loadmore} className="btn btn-primary"  > {loading ? "Loading..." : "Load More"}  </button>
        </div>
    )

}