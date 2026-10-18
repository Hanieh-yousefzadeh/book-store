import { GetBooks } from "@/api/getbooks";
import BookList from "@/components/bookList";

export default async function LatestBook() {
    const books = await GetBooks(10)
    const latestBooks = books.slice(-5);

    return <BookList books={latestBooks}  />;
}