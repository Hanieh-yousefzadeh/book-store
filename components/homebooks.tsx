import { GetBooks } from "@/api/getbooks";
import BookList from "@/components/bookList";

export default async function HomeBooks() {
    const books = await GetBooks(5);

    return <BookList books={books}  />;
}