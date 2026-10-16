import AllBooks from "@/components/allbook";
import type { book } from "@/types/book";
import { notFound } from "next/navigation";


export default async function ShowAllBook() {

    const response = await fetch("https://openlibrary.org/search.json?title=the&limit=20&page=1&fields=key,title,author_name,cover_i")


    if (!response.ok) {
        notFound()
    }
    const data = await response.json()
    console.log(data)
    const books: book[] = data.docs

    return (
        <main>
            <h1>All Book</h1>
            <AllBooks initialBooks={books} />
        </main>
    )
}