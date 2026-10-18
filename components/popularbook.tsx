import { GetBooks } from "@/api/getbooks";
import BookList from "@/components/bookList";

export default async function PopularBook() {
    const books = await GetBooks(20)
    const latestBooks = books.slice(-5);

    return <BookList books={latestBooks}  />;
}