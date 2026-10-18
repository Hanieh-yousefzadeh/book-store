"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CategoryNav() {
    const pathName = usePathname();

    return (
        <div className="flex gap-16 justify-center ">
            <Link href="/categoris/fiction" className={pathName === "/categoris/fiction" ? "text-[#023e8a] font-bold border-b border-[#023e8a] pb-1" : ""}>Stories & Novels</Link>
            <Link href="/categoris/biology" className={pathName === "/categoris/biology" ? "text-[#023e8a] font-bold border-b border-[#023e8a] pb-1" : ""}>Science & Nature</Link>
            <Link href="/categoris/history" className={pathName === "/categoris/history" ? "text-[#023e8a] font-bold border-b border-[#023e8a] pb-1" : ""}>History</Link>
            <Link href="/categoris/cognitive_psychology" className={pathName === "/categoris/cognitive_psychology" ? "text-[#023e8a] font-bold border-b border-[#023e8a] pb-1" : ""}>Psychology</Link>
        </div>
    )

}

