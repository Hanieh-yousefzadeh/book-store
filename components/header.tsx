import { BookOpenCheck, ShoppingCart } from "lucide-react"

export default function Header() {
    return (
        <nav className="flex flex-col">
            <div className="flex">
                <h1 className="flex"><BookOpenCheck />Rbook</h1>
                <input type="text" className="border rounded-2xl" ></input>
                <button>login</button>
                <a href=""><ShoppingCart /></a>
            </div>
            <div className="flex gap-8">
                <a href="">Show all</a>
                <a href="">Stories and Novels</a>
                <a href="">Scientific</a>
                <a href="">Historic</a>
                <a href="">Psychology</a>
                <a href="">Children's and Young Aduilt</a>
            </div>

        </nav>
    )
}