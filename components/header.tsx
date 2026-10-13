import Link from "next/link"
import { BookOpenCheck, ShoppingCart } from "lucide-react"

export default function Header() {
    return (
        <nav className="flex flex-col pt-5 gap-5 lg:px-10">
            <div className="flex justify-between">
                <Link href="/" className="flex"><BookOpenCheck />ReadB</Link>
                <input type="text" className="border rounded-2xl w-120" ></input>
                <div className="flex gap-5">
                    <Link href="/login">Login</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/cart"><ShoppingCart /></Link>
                </div>
            </div>
            <div className="flex gap-17 justify-center">
                <Link href="/categoris">Show all</Link>
                <Link href="/categoris/stories">Stories and Novels</Link>
                <Link href="/categoris/Scientific">Scientific</Link>
                <Link href="/categoris/Historic">Historic</Link>
                <Link href="/categoris/Psychology">Psychology</Link>
                <Link href="/categoris/children">Children's and Young Aduilt</Link>
            </div>

        </nav>
    )
}