"use client"

import { useState } from "react"
import type { book } from "@/types/book"
import BookList from "./bookList"


export default function AllBooks({ initialBooks }: { initialBooks: book[] }) {

    const [books, setBooks] = useState<book[]>(initialBooks)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    async function loadmore() {
        if (loading) {
            return
        }
        setLoading(true)
        setError("")
        const nextPage = page + 1;
        try {
            const response = await fetch(`https://openlibrary.org/search.json?title=the&limit=20&page=${nextPage}&fields=key,title,author_name,cover_i`)
            if (!response.ok) {
                throw new Error("Failed to load more books")
            }
            const data = await response.json()
            const newBooks: book[] = data.docs
            setBooks((prevBooks) => [...prevBooks, ...newBooks])
            setPage(nextPage);
        } catch {
            setError("Failed to load more books")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="">
            <div className="flex flex-col">
                <BookList books={books} />
            </div>
            {error && (<p className="text-error mt-4">{error}</p>)}
            <button onClick={loadmore} disabled={loading} className="btn "> {loading ? "Loading..." : "Load More"}  </button>
        </div>
    )

}