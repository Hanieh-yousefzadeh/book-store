"use client"

import Link from "next/link"
import { BookOpenCheck, ShoppingCart, LogOut, Heart ,LogIn } from "lucide-react"
import { Suspense, useState, useEffect } from "react";
import CategoryNav from "./categoryNav"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation";
import { logout } from "@/lib/authSlice";
import { stateType, dispatch } from "@/lib/store";
import Theme from "./theme";


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
        <nav className="flex flex-col pt-8 pb-5 gap-5 lg:px-10 border border-b-[#023d8a0a] bg-[#02304710]">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex text-2xl font-semibold items-center text-[#023e8a]"><BookOpenCheck  size={35} strokeWidth={1}/>ReadB</Link>
                <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
                    <CategoryNav />
                </Suspense>
                <div className="flex gap-5 items-center text-[#062b5ced]">
                    <Link href="/favorite"><Heart /></Link>
                    {mounted && (
                        user ? (<button className="cursor-pointer" onClick={handleLogout}><LogOut /></button>) : (<Link href="/login"><LogIn/></Link>)
                    )}

                    {/* <Link href="/profile">Profile</Link> */}

                    <Link href="/cart"><ShoppingCart /></Link>
                    <Theme />
                </div>
            </div>

        </nav>
    )
}