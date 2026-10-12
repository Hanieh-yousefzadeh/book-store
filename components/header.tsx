import Link from "next/link"
import { BookOpenCheck, ShoppingCart } from "lucide-react"

export default function Header() {
    return (
        <nav className="flex flex-col">
            <div className="flex">
                <Link href="/" className="flex"><BookOpenCheck />Rbook</Link>
                <input type="text" className="border rounded-2xl" ></input>
                <Link href="/login">login</Link>
                <Link href="/cart"><ShoppingCart /></Link>
            </div>
            <div className="flex gap-8">
                <Link href="/">Show all</Link>
                <Link href="/categoris/stories">Stories and Novels</Link>
                <Link href="/categoris/Scientific">Scientific</Link>
                <Link href="/categoris/Historic">Historic</Link>
                <Link href="/categoris/Psychology">Psychology</Link>
                <Link href="/categoris/children">Children's and Young Aduilt</Link>
            </div>

        </nav>
    )
}