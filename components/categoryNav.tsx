"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CategoryNav() {
    const pathName = usePathname();

    return (
        <div className="flex gap-17 justify-center">
            <Link href="/categoris" className={pathName === "/categoris" ? "text-purple-600 font-bold" : ""}>Show all</Link>
            <Link href="/categoris/fiction" className={pathName === "/categoris/fiction" ? "text-purple-600 font-bold" : ""}>Stories & Novels</Link>
            <Link href="/categoris/biology" className={pathName === "/categoris/biology" ? "text-purple-600 font-bold" : ""}>Science & Nature</Link>
            <Link href="/categoris/history" className={pathName === "/categoris/history" ? "text-purple-600 font-bold" : ""}>History</Link>
            <Link href="/categoris/cognitive_psychology" className={pathName === "/categoris/cognitive_psychology" ? "text-purple-600 font-bold" : ""}>Psychology</Link>
        </div>
    )

}

