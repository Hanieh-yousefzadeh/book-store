"use client"

import Link from "next/link"
import { BookOpenCheck, ShoppingCart } from "lucide-react"
import { Suspense, useState, useEffect } from "react";
import SearchBook from "@/components/search"
import CategoryNav from "./categoryNav"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation";
import { logout } from "@/lib/authSlice";
import { stateType, dispatch } from "@/lib/store";


export default function Header() {

    const dispatch = useDispatch<dispatch>()
    const router = useRouter()
    const user = useSelector((state: stateType) => state.auth.user)

    function handleLogout() {
        dispatch(logout())
        localStorage.removeItem("user")
        router.push("/")
    }
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className="flex flex-col pt-5 gap-5 lg:px-10">
            <div className="flex justify-between">
                <Link href="/" className="flex"><BookOpenCheck />ReadB</Link>
                <SearchBook />
                <div className="flex gap-5 items-center">
                    <Link href="/favorite">Favorite</Link>
                    {mounted && (
                        user ? (<button className="cursor-pointer" onClick={handleLogout}>Logout</button>) : (<Link href="/login">Login</Link>)
                    )}
                    {/* <Link href="/profile">Profile</Link> */}

                    {/* <Link href="/cart"><ShoppingCart /></Link> */}
                </div>
            </div>
            <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
                <CategoryNav />
            </Suspense>


        </nav>
    )
}