"use client"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatch } from "@/redux/store"
import { setCart } from "@/redux/cartSlice"


export default function CartStorage() {
    const dispatch = useDispatch<dispatch>()
    const items = useSelector((state: stateType) => state.cart.items)
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const saved = localStorage.getItem("cart")
        if(saved){
            dispatch(setCart(JSON.parse(saved)))
        }
        setLoaded(true)
    },[dispatch])

    useEffect(()=>{
        if(loaded){
            localStorage.setItem("cart" ,JSON.stringify(items))
        }
    },[loaded,items])

    return null
}