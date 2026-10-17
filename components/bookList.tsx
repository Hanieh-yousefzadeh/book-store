import Link from "next/link";
import type { book } from "@/types/book";

export default function BookList({ books }: { books: book[] }) {

    return (
        <div className="flex justify-between mt-10">
            {books.map((book) => (

                <Link key={book.key} href={`/book/${book.key.split("/").pop()}`} className="w-60">
                    {book.cover_i ? (<img className="rounded-xl w-55 h-70" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} />}
                    <div className="pl-3  py-4">
                        <h3 className=" line-clamp-1 text-base font-semibold">{book.title}</h3>
                        <p className="pt-1.5 text-sm"> <span className="mr-1.5">Author:</span>{book.author_name?.join(", ")}</p>
                    </div>
                </Link>

            ))}
        </div>
    )
}