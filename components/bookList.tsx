import Link from "next/link";
import type { book } from "@/types/book";

export default function BookList({ books }: { books: book[] }) {

    return (
        <div className="flex flex-wrap  justify-between mt-10 ">
            {books.map((book) => (

                <Link key={book.key} href={`/book/${book.key.split("/").pop()}`} className="w-67 border rounded-lg pr-3 pl-5 py-5 hover:-translate-y-3 hover:transition-transform border-[#023d8a2f]">
                    {book.cover_i ? (<img className="w-57 h-67 rounded-lg  " src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} className="w-57 h-67 rounded-lg " />}
                    <div className="pt-4  w-60 pr-4">
                        <h3 className=" text-base font-semibold line-clamp-1">{book.title}</h3>
                        <div className="flex items-center justify-between pt-3">
                            <p className="line-clamp-1  text-[#1e293bbc] text-sm w-45"> <span className="mr-1.5">By</span>{book.author_name?.join(", ")}</p>
                            <p className=" font-semibold  text-[#E6E7E4] bg-[#023d8adc] py-1 px-2 rounded-sm">$20.0</p>
                        </div>

                    </div>
                </Link>

            ))}
        </div>
    )
}