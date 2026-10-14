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
        <section className="flex xl:px-50 sm:px-10 px-5  sm:py-10 py-5 ">
            <div className="sm:bg-[url(/assets/images/1525279728795.webp)] sm:h-138 h-70 bg-cover bg-center w-[50%] sm:rounded-tl-4xl sm:rounded-bl-4xl rounded-tl-2xl rounded-bl-2xl bg-none"></div>
            <div className="flex flex-col sm:w-[50%] w-full bg-[#764abc28] sm:rounded-tr-4xl sm:rounded-br-4xl sm:rounded-tl-none sm:rounded-bl-none rounded-2xl px-5">
                <h1 className="sm:text-4xl font-bold text-[#00251C] text-center pt-6 sm:pb-10 pb-5 ">Welcome</h1>
                <form onSubmit={handelSubmit} className="flex flex-col flex-1 pb-5">
                    {error && (<p className="flex gap-2 items-center self-center text-red-700"><TriangleAlert className="size-5 text-red-700" />{error}</p>)}

                    <label className="flex flex-col self-center gap-2 sm:pb-8 pb-6">
                        <input type="text" value={name} placeholder="Name" onChange={handelName} className="border-b-2 border-[#764abc5a] pb-1 lg:w-90 sm:w-72 w-60 outline-none placeholder:text-[#00251C] placeholder:font-medium sm:placeholder:text-base placeholder:text-sm" />
                    </label>

                    <label className="flex flex-col self-center gap-2 sm:pb-8 pb-6">
                        <input type="email" value={email} placeholder="E-mail" onChange={handelEmail} className="border-b-2 border-[#764abc5a] pb-1 lg:w-90 sm:w-72 w-60 outline-none placeholder:text-[#00251C] placeholder:font-medium sm:placeholder:text-base placeholder:text-sm" />
                    </label>

                    <label className="flex flex-col self-center gap-2 sm:pb-8 pb-6">
                        <input type="password" value={password} placeholder="Password" onChange={handelPassword} className="border-b-2 border-[#764abc5a] pb-1 lg:w-90 sm:w-72 w-60 outline-none placeholder:text-[#00251C] placeholder:font-medium sm:placeholder:text-base placeholder:text-sm" />
                    </label>


                    <button type="submit" className="text-[#26141A] sm:text-xl self-center font-bold rounded-full bg-amber-50 pt-2 pb-3 lg:px-40 sm:px-30 px-25 hover:bg-[#764ABC] hover:text-amber-50 sm:mt-10 mt-7">Login</button>

                </form>
            </div>

        </section>
    )


}


