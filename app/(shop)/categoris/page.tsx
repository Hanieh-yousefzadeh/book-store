import AllBooks from "@/components/allbook";
import type { book } from "@/types/book";
import Link from "next/link"


export default async function ShowAllBook() {

    const response = await fetch("https://openlibrary.org/search.json?title=the&limit=20&page=1&fields=key,title,author_name,cover_i")

    console.log("Status:", response.status);
    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }
    const data = await response.json()
    console.log(data)
    const books: book[] = data.docs
    console.log("First book key:", books[0]?.key);

    return (
        <main>
            <h1>All Book</h1>
            <AllBooks initialBooks={books} />
        </main>
    )
}