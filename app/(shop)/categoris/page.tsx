import AllBooks from "@/components/allbook";
import { notFound } from "next/navigation";
import { GetBooks } from "@/api/getbooks";


export default async function ShowAllBook() {

    const books = await GetBooks(20);


    if (!books) {
        notFound()
    }
   
    return (
        <main>
            <h1>All Book</h1>
            <AllBooks initialBooks={books} />
        </main>
    )
}