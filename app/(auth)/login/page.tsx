"use client"

import { TriangleAlert } from "lucide-react"
import { useState } from "react"
import { login } from "@/lib/authSlice"
import type { dispatch } from "@/lib/store"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"




export default function LoginPage() {

    const dispatch = useDispatch<dispatch>()

    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [error, setError] = useState("")


    const correctEmail = "book@gmail.com"
    const correctPassword = "12345678"



    function handelSubmit(e: React.SubmitEvent<HTMLFormElement>) {

        e.preventDefault();

        if (name.trim() === "") {
            setError("please enter name");
            return
        }
        if (email.trim() === "") {
            setError("please enter email");
            return
        }
        if (email !== correctEmail) {
            setError("email invalid");
            return
        }
        if (password.trim() === "") {
            setError("please enter password");
            return
        }
        if (password !== correctPassword) {
            setError("password invalid");
            return
        }

        setError("");

        const user = {
            name: name,
            email: email
        }

        dispatch(login(user))

        localStorage.setItem("user", JSON.stringify(user));

        router.push("/")
    }

    function handelName(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setName(value)
    }

    function handelEmail(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setEmail(value)
    }

    function handelPassword(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setPassword(value)
    }


    return (
        <section className="flex xl:px-50 sm:px-10 px-5 mt-7  sm:py-10 py-5 ">
            <div className="sm:bg-[url(/pv_590.jpg)] sm:h-138 h-70  bg-center w-[50%] sm:rounded-tl-3xl sm:rounded-bl-3xl rounded-tl-2xl rounded-bl-2xl bg-none"></div>
            <div className="flex flex-col sm:w-[50%] w-full bg-[#02304710] sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none sm:rounded-bl-none rounded-2xl px-5">
                <h1 className="sm:text-4xl font-bold text-center sm:pt-19 pt-5 sm:pb-10 pb-5 ">Welcome</h1>
                <form onSubmit={handelSubmit} className="flex flex-col flex-1 pb-5">
                    {error && (<p className="flex gap-2 items-center self-center text-red-700"><TriangleAlert className="size-5 text-red-700" />{error}</p>)}

                    <label className="flex flex-col self-center gap-2 sm:pb-8 pb-6">
                        <input type="text" value={name} placeholder="Name" onChange={handelName} className="border-b-2 border-[#02304721] pb-1 lg:w-90 sm:w-72 w-60 outline-none placeholder:text-[#023047ae] placeholder:font-medium sm:placeholder:text-base placeholder:text-sm" />
                    </label>

                    <label className="flex flex-col self-center gap-2 sm:pb-8 pb-6">
                        <input type="email" value={email} placeholder="E-mail" onChange={handelEmail} className="border-b-2 border-[#02304721] pb-1 lg:w-90 sm:w-72 w-60 outline-none placeholder:text-[#023047ae] placeholder:font-medium sm:placeholder:text-base placeholder:text-sm" />
                    </label>

                    <label className="flex flex-col self-center gap-2 sm:pb-8 pb-6">
                        <input type="password" value={password} placeholder="Password" onChange={handelPassword} className="border-b-2 border-[#02304721] pb-1 lg:w-90 sm:w-72 w-60 outline-none placeholder:text-[#023047ae] placeholder:font-medium sm:placeholder:text-base placeholder:text-sm" />
                    </label>


                    <button type="submit" className=" sm:text-xl border-3 self-center font-bold rounded-full bg-[#F5F3EF] pt-2 pb-3 lg:px-40 sm:px-30 px-25 hover:bg-[#02306bd7] hover:text-amber-50 sm:mt-10 mt-7">Login</button>

                </form>
            </div>

        </section>
    )


}


