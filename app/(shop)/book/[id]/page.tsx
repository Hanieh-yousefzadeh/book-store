
import LikeButton from "@/components/likeButton"
import { notFound } from "next/navigation";

export default async function DetailBook({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    console.log(id)

    const response = await fetch(`https://openlibrary.org/works/${id}.json`)
    if (!response.ok) {
        notFound()
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
            <div className="flex gap-5">
                {data.covers?.[0] && (<img src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`} className=" rounded-lg h-110 w-80" />)}

                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">{data.title} </h1>
                        <LikeButton book={{
                            key: `/works/${id}`,
                            title: data.title,
                            cover_id: data.covers[0]
                        }} />
                    </div>
                    <p>Author: {authorName}</p>


                    <div className="mt-3">
                        <h2 className="font-bold">Description</h2>
                        <p className="w-250"> {description} </p>
                    </div>

                    <div className="mt-3">
                        <h2 className="font-bold">Categories</h2>

                        {data.subjects?.length && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {data.subjects.slice(0, 5).map(
                                    (subject: string) => (
                                        <span key={subject} className="rounded-full bg-[#02304710] px-3 py-1 text-sm" >
                                            {subject}
                                        </span>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-baseline gap-15">
                        <div className="flex flex-col gap-3">
                            <p className="mt-4"> <span className="mr-2">First published:</span>{data.first_publish_date}  </p>
                            <p>Pages: {edition.number_of_pages}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p> {edition.languages && (<span><span className="mr-2">Language:</span>{edition.languages[0].key.split("/").pop()}</span>)}</p>
                            <p> {edition.publishers && (<span><span className="mr-2">Publisher:</span> {edition.publishers.join(", ")}</span>)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}