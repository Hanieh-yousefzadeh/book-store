import Link from "next/link";
import type { book } from "@/types/book";

export default function BookList({ books }: { books: book[] }) {

    return (
        <div className="flex flex-wrap xl:gap-y-0 lg:gap-y-2 gap-y-5 xl:justify-between xl:gap-x-0 md:gap-x-5 lg:gap-x-2 sm:justify-center lg:justify-start mt-10">
            {books.map((book) => (

                <Link key={book.key} href={`/book/${book.key.split("/").pop()}`} className="xl:w-67 w-67  sm:w-57 border rounded-lg pr-3 pl-5 py-5 hover:-translate-y-3 hover:transition-transform border-[#023d8a2f] dark:border-[#a8ccde54]">
                    {book.cover_i ? (<img className="xl:w-57 w-57 sm:w-47 xl:h-67 h-67 lg:h-50 md:h-58 rounded-lg xl:pr-0 lg:pr-1 " src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} className="w-57 h-67 rounded-lg " />}
                    <div className="pt-4  w-69 pr-4  sm:pr-12">
                        <h3 className=" text-base font-semibold line-clamp-1 ">{book.title}</h3>
                        <div className="flex items-center justify-between pt-3">
                            <p className="line-clamp-1  text-[#1e293bbc] text-sm w-45 dark:text-[#a8ccded7]"> <span className="mr-1.5">By</span>{book.author_name?.join(", ")}</p>
                            <p className=" font-semibold  text-[#E6E7E4] bg-[#02306bd7] dark:bg-[#07418f] py-1 px-2 rounded-sm">$20.0</p>
                        </div>

                    </div>
                </Link>

            ))}
        </div>
    )
}