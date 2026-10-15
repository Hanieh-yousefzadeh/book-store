import Link from "next/link";

type Book = {
    key: string
    title: string
    authors?: {
        key: string
        name: string
    }[]
    cover_id?: number
}

type categoryResponse = {
    works: Book[]
}


export default async function CategorisPage({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params

    const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json?limit=20`)
    if (!response.ok) {
        throw new Error("Failed")
    }
    const data: categoryResponse = await response.json()

    return (
        <main>
            <h1>Category : {category}</h1>
            <div>
                {data.works.map((book) => (
                    <Link key={book.key} href={`/book/${book.key.split("/").pop()}`}>
                        {book.cover_id ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-M.jpg`} />}
                        <div className="pl-3 text-sm font-semibold">
                            <h3>{book.title}</h3>
                            <p className="line-clamp-1"> Author: {book.authors?.map((author) => author.name).join(", ")}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}