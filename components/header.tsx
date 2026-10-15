import Link from "next/link"
import { BookOpenCheck, ShoppingCart } from "lucide-react"
import { Suspense } from "react";
import SearchBook from "@/components/search"
import CategoryNav from "./categoryNav"


export default function Header() {
    return (
        <nav className="flex flex-col pt-5 gap-5 lg:px-10">
            <div className="flex justify-between">
                <Link href="/" className="flex"><BookOpenCheck />ReadB</Link>
                <SearchBook />
                <div className="flex gap-5">
                    <Link href="/login">Login</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/cart"><ShoppingCart /></Link>
                </div>
            </div>
            <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
                <CategoryNav />
            </Suspense>


        </nav>
    )
}