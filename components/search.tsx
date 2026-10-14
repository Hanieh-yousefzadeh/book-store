"use client"

import { useEffect, useState } from "react"
import{ X} from "lucide-react"
import Link from "next/link"


export type book = {
    key: string
    title: string
    author_name?: string[]
    cover_i?: number
}


export default function SearchBook() {

    const [search, setSearch] = useState("")
    const [result, setResult] = useState<book[]>([])


    useEffect(() => {
        if (search.trim() === "") {
            setResult([])
            return;
        }
        if (search.trim().length < 3) {
            setResult([])
            return
        }

        async function getbook() {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=${search}&fields=key,title,author_name,cover_i&limit=5`)

                if (!response.ok) {
                    throw new Error("Failed")
                }

                const data = await response.json()
                console.log(data)
                console.log(data.docs)
                setResult(data.docs)
            } catch (error) {
                setResult([])
            }
        } getbook()

    }, [search]);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearch(value)
    }

    function deleteSearch(){
         setSearch("")
    }

    return (
        <div className="">
            <div className="flex border rounded-2xl w-120">
                <input type="text" className="outline-none w-120 px-2 py-2" value={search} onChange={handleInput} placeholder="search a book" />
                {result.length > 0 && (<button onClick={deleteSearch} className="cursor-pointer"><X/></button>)}
            </div>
            {result.length > 0 &&
                <div className="max-h-80 overflow-y-auto w-120  absolute z-1  grid gap-5 p-5 bg-[#EAE3F4]">
                    {result.map((book) => (
                        <Link key={book.key} href={`book/${book.key.split("/").pop()}`} className="flex" >
                            {book.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} />) : <img src={`https://covers.openlibrary.org/b/id/240720-S.jpg`} />}
                            <div className="pl-3 text-sm font-semibold">
                                <h3>{book.title}</h3>
                                <p className="line-clamp-1"> Author: {book.author_name?.join(", ")}</p>
                            </div>

                        </Link>
                    ))
                    }
                </div>}
        </div>
    )
}