"use client"


import type { CategoryBook } from "@/types/book"
import { useState } from "react"
import Link from "next/link"

type Props = {
    initialBooks: CategoryBook[]
    category: string;
}

export default function CategoryBooks({ initialBooks, category }: Props) {
    const [books, setBooks] = useState<CategoryBook[]>(initialBooks);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function loadMore() {
        setLoading(true)
        setError("")

        try {
            const nextPage = page + 1;

            const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=20&offset=${page * 20}`);

            if (!response.ok) {
                throw new Error("Failed");
            }

            const data = await response.json();
            const newBooks: CategoryBook[] = data.works

            setBooks((prevBooks) => [...prevBooks, ...newBooks]);
            setPage(nextPage)

        } catch {
            setError("Failed to fetch books");
        } finally {
            setLoading(false);
        }

    }
    return (
        <main>
            <h1>Category : {category}</h1>
            <div>
                {books.map((book) => (
                    <Link key={book.key} href={`/book/${book.key.split("/").pop()}`}>
                        {book.cover_id ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} />}
                        <div className="pl-3 text-sm font-semibold">
                            <h3>{book.title}</h3>
                            <p className="line-clamp-1"> Author: {book.authors?.map((author) => author.name).join(", ")}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={loadMore}  disabled={loading} className="btn btn-primary" > {loading ? "Loading..." : "Load More"} </button>
        </main>
    )

}