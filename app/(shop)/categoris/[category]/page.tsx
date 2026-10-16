
import CategoryBooks from "@/components/categoryBooks";
import type { CategoryBook } from "@/types/book";



type categoryResponse = {
    works: CategoryBook[]
}


export default async function CategorisPage({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params

    const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=20&offset=0`)
    if (!response.ok) {
        throw new Error("Failed")
    }
    const data: categoryResponse = await response.json()

    return (
       <CategoryBooks initialBooks={data.works} category={category} />
    )
}