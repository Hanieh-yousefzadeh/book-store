import Link from "next/link";
import type { book } from "@/types/book";

export default function BookList({ books }: { books: book[] }) {

    return (
        <div className="grid grid-cols-7 px-10">
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
    )
}