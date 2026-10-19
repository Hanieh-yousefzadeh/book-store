"use client"

import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatch } from "@/redux/store"
import { addToCart } from "@/redux/cartSlice"
import type { PropButton } from "@/types/book"



export default function BuyButton({ book }: PropButton) {

    const dispatch = useDispatch<dispatch>()
    const cartBook = useSelector((state: stateType) => state.cart.items.find((item) => item.key === book.key))
    const quantity = cartBook ? cartBook.quantity : 0

    function handleButton() {
        dispatch(addToCart({
            ...book,
            quantity: 1
        }))
    }

    return (
        <div className="flex  flex-col gap-2">
            <div className="flex items-center justify-between px-1">
                <span className=" py-1 font-semibold">${book.price.toFixed(1)}</span>
                {quantity > 0 && (<span className="text-lg">(<span className="px-1 font-semibold">{quantity}</span>)</span>)}
            </div>
            <button onClick={handleButton} className=" text-[#E6E7E4] bg-[#02306bd7] rounded-lg py-2 cursor-pointer">Buy</button>
        </div>
    )
}