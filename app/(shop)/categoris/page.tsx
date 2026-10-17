import AllBooks from "@/components/allbook";
import { notFound } from "next/navigation";
import { GetBooks } from "@/api/getbooks";


export default async function ShowAllBook() {

    const books = await GetBooks(20);


    if (!books) {
        notFound()
    }
   
    return (
        <main className="flex flex-col px-10">
            <h1 className="text-xl font-semibold pt-5">All Books</h1>
            <AllBooks initialBooks={books} />
        </main>
    )
}