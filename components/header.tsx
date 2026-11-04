"use client"

import Link from "next/link"
import { BookOpenCheck, ShoppingCart, LogOut, Heart, LogIn, X, ChevronDown } from "lucide-react"
import { Suspense, useState, useEffect } from "react";
import CategoryNav from "./categoryNav"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation";
import { logout } from "@/redux/authSlice";
import { stateType, dispatch } from "@/redux/store";
import Theme from "./theme";


export default function Header() {

    const dispatch = useDispatch<dispatch>()
    const router = useRouter()
    const user = useSelector((state: stateType) => state.auth.user)
    const totalQuantity = useSelector((state: stateType) => state.cart.items.reduce((total, item) => total + item.quantity, 0))
    const [isOpen, setIsOpen] = useState(false);
    function handelClick() {
        return setIsOpen(!isOpen)
    }


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
        <div className="flex flex-col">
            <nav className="flex sm:flex-col flex-row justify-between md:pt-8 md:pb-5 py-3 px-3 gap-5 lg:px-10 sm:px-5 border border-b-[#023d8a0a] bg-[#02304710] dark:border-b-[#a8ccde54]">
                <div className="flex justify-between sm:items-center items-baseline">
                    <Link href="/" className="flex md:text-2xl text-xl font-semibold items-center text-[#023e8a] dark:text-current"><BookOpenCheck className="md:size-9 size:6" strokeWidth={1} />ReadB</Link>
                    <div className="hidden sm:block">
                        <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
                            <CategoryNav />
                        </Suspense>
                    </div>
                    <div className="sm:flex  gap-2  items-center text-[#062b5ced] dark:text-current hidden">
                        <Link href="/favorite"><Heart className="sm:size-auto size-5" /></Link>
                        {mounted && (
                            user ? (<button className="cursor-pointer" onClick={handleLogout}><LogOut className="sm:size-auto size-5" /></button>) : (<Link href="/login"><LogIn className="sm:size-auto size-5" /></Link>)
                        )}

                        {/* <Link href="/profile">Profile</Link> */}

                        <Link href="/cart" className="relative">
                            <ShoppingCart className="sm:size-auto size-5" />
                            {mounted && totalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">{totalQuantity}</span>
                            )}
                        </Link>
                        <Theme />
                    </div>
                </div>
                <div className=" sm:hidden flex gap-3 items-baseline">

                    <button onClick={handelClick} className="lg:hidden ">
                        {isOpen ? (<X className="p-0.5 w-7 h-6 sm:w-9 sm:h-8 rounded-sm text-[#062b5ced] border border-[#062b5ced]  dark:bg-[#17123d] dark:border-indigo-400 dark:text-indigo-300" />)
                            :
                            (<div className="flex"> <ChevronDown className="p-0.5 w-7 h-6 sm:w-9 sm:h-8 rounded-sm text-[#062b5ced] border   dark:text-current" />Menu</div>)
                        }
                    </button>
                    <div className="sm:hidden ">
                        <Theme />
                    </div>

                </div>

            </nav>
            {isOpen && (
                <div className="sm:hidden flex flex-col self-end bg-white gap-2 p-3 rounded-lg mr-5 -mt-3">
                    <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
                        <CategoryNav />
                    </Suspense>
                    <div className="flex-col sm:gap-5 gap-2 items-center text-[#062b5ced] dark:text-current">
                        <Link href="/favorite" className="flex items-center">Favorite</Link>


                        {/* <Link href="/profile">Profile</Link> */}

                        <Link href="/cart" className="relative">
                            <div>Shopping Cart</div>
                            {mounted && totalQuantity > 0 && (
                                <div className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">{totalQuantity}</div>
                            )}
                        </Link>
                        {mounted && (
                            user ? (<button className="cursor-pointer" onClick={handleLogout}>Logout</button>) : (<Link href="/login">Login</Link>)
                        )}

                    </div>

                </div>
            )}
        </div>
    )
}