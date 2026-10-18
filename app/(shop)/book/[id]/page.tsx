
import LikeButton from "@/components/likeButton"
import { notFound } from "next/navigation";
import { UserRoundPen, Languages, BookOpenText } from "lucide-react"

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
        <div className="px-10 pt-18">
            <div className="flex gap-9">
                <div className="flex flex-col gap-3">
                    {data.covers?.[0] && (<img src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`} className=" rounded-lg h-85 w-65" />)}
                    <div className=" flex  flex-col gap-2">
                        <p className=" py-1 px-2 font-semibold">$20.0</p>
                        <button className=" text-[#E6E7E4] bg-[#02306bd7] rounded-lg py-2">BUY</button>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between ">
                        <h1 className="text-3xl font-bold pt-1">{data.title} </h1>
                        <LikeButton book={{
                            key: `/works/${id}`,
                            title: data.title,
                            cover_id: data.covers[0]
                        }} />
                    </div>
                    <p className="flex items-center gap-2"><UserRoundPen className="bg-[#02304710] size-7.5 p-1.5 rounded-full" /> {authorName}</p>

                    <div className="flex items-center gap-5 pt-1">

                        {/* <p className="mt-4"> <span className="mr-2">First published:</span>{data.first_publish_date}  </p> */}
                        <p> {edition.publishers && (<span><span className="mr-2 font-medium">Publisher:</span> {edition.publishers.join(", ")}</span>)}</p>
                        <div className="border-r h-7 border-[#02304761]"></div>
                        <p> {edition.languages && (<span className="flex"><span className="mr-2"><Languages /></span>{edition.languages[0].key.split("/").pop()}</span>)}</p>
                        <div className="border-r h-7 border-[#02304761]"></div>
                        <p className="flex gap-2"><BookOpenText /> pages {edition.number_of_pages}</p>

                    </div>

                    <div className="pt-1">
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


                    <div className="pt-6">
                        <h2 className="font-bold pb-2">Description</h2>
                        <p className="w-250 bg-[#02304710] p-5 rounded-xl"> {description} </p>
                    </div>


                </div>
            </div>
        </div>
    )
}