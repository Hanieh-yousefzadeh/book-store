"use client"

import { useSelector } from "react-redux"
import type { stateType } from "@/lib/store"


export default function Profile(){

    const user =useSelector((state :stateType) => state.auth.user)
    return(
        <main>
            <h1>{user?.name}</h1>
        </main>
    )
}