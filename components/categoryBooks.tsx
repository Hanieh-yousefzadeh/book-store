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
        <main className="flex flex-col">
            <div className="flex flex-wrap px-10 gap-12 justify-center mt-20 ">
                {books.map((book) => (
                    <Link key={book.key} href={`/book/${book.key.split("/").pop()}`}>
                        {book.cover_id ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className="w-62 h-80 rounded-lg" />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} className="w-62 h-80 rounded-lg" />}
                        <div className="pl-3  w-60 pt-5">
                            <h3 className=" text-sm font-semibold line-clamp-1">{book.title}</h3>
                            <p className="line-clamp-1 pt-2"> <span className="mr-2">Author:</span> {book.authors?.map((author) => author.name).join(", ")}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={loadMore}  disabled={loading} className="rounded-xl text-[#F5F3EF] px-5 py-2 mb-30 mt-15 self-center bg-[#023e8a] cursor-pointer" > {loading ? "Loading..." : "Load More"} </button>
        </main>
    )

}