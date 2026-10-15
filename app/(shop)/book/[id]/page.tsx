

export default async function DetailBook({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    console.log(id)

    const response = await fetch(`https://openlibrary.org/works/${id}.json`)
    if (!response.ok) {
        return <p>Book not found</p>
    }
    const data = await response.json()
    console.log(data)
    const description = typeof data.description === "string" ? data.description : data.description?.value


    const authorKey = data.authors?.[0].author.key

    let authorName = "Unknown"

    if (authorKey) {
        const response = await fetch(`https://openlibrary.org${authorKey}.json`)
        const author = await response.json()
        authorName = author.name
    }

    const editionsResponse = await fetch(`https://openlibrary.org/works/${id}/editions.json`)

    const editionsData = await editionsResponse.json()
    const edition = editionsData.entries?.[0]
    return (
        <div className="p-8">
            <div className="flex gap-8">
                {data.covers?.[0] && (<img src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`} className=" rounded-lg" />)}

                <div>
                    <h1 className="text-3xl font-bold">{data.title} </h1>
                    <p>Author: {authorName}</p>

                    <div className="mt-4">
                        <h2 className="font-bold">Description</h2>
                        <p> {description || "No description available"} </p>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-bold">Categories</h2>

                        {data.subjects?.length ? (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {data.subjects.slice(0,5).map(
                                    (subject: string) => (
                                        <span key={subject} className="rounded-full bg-purple-100 px-3 py-1 text-sm" >
                                            {subject}
                                        </span>
                                    )
                                )}
                            </div>
                        ) : (<p>No categories available</p>)}
                    </div>

                    <p className="mt-4"> First published:{data.first_publish_date}  </p>
                    <p>Pages: {edition.number_of_pages}</p>
                   <p> {edition.languages && ( <span>Language:{edition.languages[0].key.split("/").pop()}</span>)}</p>
                   <p> {edition.publishers && ( <span>Publisher: {edition.publishers.join(", ")}</span> )}</p>
                </div>
            </div>
        </div>
    )
}