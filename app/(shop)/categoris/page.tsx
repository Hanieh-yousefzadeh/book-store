import type { book } from "@/types/book";
import AllBooks from "@/components/allbook";



export default async function ShowAllBook() {

    const response = await fetch("https://openlibrary.org/search.json?title=the&limit=20&page=1&fields=key,title,author_name,cover_i")

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }
    const data = await response.json()
    const books: book[] = data.docs

    return (
        <main>
            <h1>All Book</h1>
            <div>
                <AllBooks initialBooks={books} />
            </div>
        </main>
    )
}