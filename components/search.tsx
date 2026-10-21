"use client"

import { useEffect, useState } from "react"
import{ X} from "lucide-react"
import Link from "next/link"
import type { book } from "@/types/book"





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
                const response = await fetch(`https://openlibrary.org/search.json?q=${search}&fields=key,title,author_name,cover_i&limit=15`)

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
        <div className=" flex justify-center">
            <div className="flex w-120 bg-[#FFFFFF] rounded-full">
                <input type="text" className="outline-none w-120 pl-4 py-3.5 dark:placeholder:text-accent  dark:text-accent" value={search} onChange={handleInput} placeholder="Discover Books. . ." />
                {result.length > 0 && (<button onClick={deleteSearch} className="cursor-pointer pr-3 dark:text-accent"><X/></button>)}
            </div>
            {result.length > 0 &&
                <div className="max-h-50 overflow-y-auto w-120 bottom-18  absolute z-1  grid gap-5 p-5 bg-[#FFFFFF] rounded-2xl">
                    {result.map((book) => (
                        <Link key={book.key} onClick={deleteSearch} href={`/book/${book.key.split("/").pop()}`} className="flex items-center" >
                            {book.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}  className="rounded-xs"/>) : <img src={`https://covers.openlibrary.org/b/id/240720-S.jpg`} className="rounded-xs" />}
                            <div className="pl-3 text-sm font-semibold">
                                <h3 className="dark:text-black">{book.title}</h3>
                                <p className="line-clamp-1 text-xs pt-1 text-[#1e293b8e]"> <span className="mr-1.5">By</span>{book.author_name?.join(", ")}</p>
                            </div>

                        </Link>
                    ))
                    }
                </div>}
        </div>
    )
}