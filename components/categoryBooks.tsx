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
            <div className="flex flex-wrap px-10 gap-y-6.5  justify-between mt-20 ">
                {books.map((book) => (
                    <Link key={book.key} href={`/book/${book.key.split("/").pop()}`} className="w-67 border rounded-lg pr-3 pl-5 py-5 hover:-translate-y-3 hover:transition-transform border-[#023d8a2f]">
                        {book.cover_id ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className="w-57 h-67 rounded-lg " />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} className="w-57 h-67 rounded-lg " />}
                        <div className="pt-4  w-60 pr-4">
                            <h3 className=" text-base font-semibold line-clamp-1">{book.title}</h3>
                            <div className="flex items-center justify-between pt-3">
                                <p className="line-clamp-1  text-[#1e293bbc] text-sm w-45"> <span className="mr-2">By</span> {book.authors?.map((author) => author.name).join(", ")}</p>
                                <p className=" font-semibold  text-[#E6E7E4] bg-[#023d8adc] py-1 px-2 rounded-sm">$20.0</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={loadMore} disabled={loading} className="rounded-xl text-[#F5F3EF] px-5 py-2 mb-30 mt-15 self-center bg-[#023e8a] cursor-pointer" > {loading ? "Loading..." : "Load More"} </button>
        </main>
    )

}