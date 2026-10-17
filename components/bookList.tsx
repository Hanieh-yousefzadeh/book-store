import Link from "next/link";
import type { book } from "@/types/book";

export default function BookList({ books }: { books: book[] }) {

    return (
        <div className="flex flex-wrap gap-12 justify-between mt-10 ">
            {books.map((book) => (

                <Link key={book.key} href={`/book/${book.key.split("/").pop()}`} className="w-62">
                    {book.cover_i ? (<img className="w-72 h-80 rounded-lg" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} className="w-62 h-80 rounded-lg" />}
                    <div className="pl-3  w-60 pt-5">
                        <h3 className=" text-sm font-semibold line-clamp-1">{book.title}</h3>
                        <p className="line-clamp-1 pt-2"> <span className="mr-2">Author:</span>{book.author_name?.join(", ")}</p>
                    </div>
                </Link>

            ))}
        </div>
    )
}