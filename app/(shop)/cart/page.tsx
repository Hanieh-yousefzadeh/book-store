"use client"

import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatch } from "@/redux/store"
import { increase, decrease, deletecart } from "@/redux/cartSlice"
import { Trash } from "lucide-react"



export default function CartPagr() {
    const dispatch = useDispatch<dispatch>()
    const items = useSelector((state: stateType) => state.cart.items)

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <main className="flex flex-col px-10 py-7">
            <h1 className=" text-2xl font-bold  pt-3 pb-5"> shopping Cart</h1>
            <div className="flex  justify-between">
                <div className="flex flex-col w-250">

                    {items.length === 0 && (
                        <h2 className="text-xl pt-7 text-[#1e293bbc] ">Your cart is Empty.</h2>
                    )}
                    {items.map((book) => (
                        <div key={book.key} className="flex items-center gap-5 border-b border-[#023d8a2f]  pb-5 mb-5 pt-10">
                            {book.cover_id && (
                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className="w-20 h-28 object-cover rounded" />
                            )}

                            <div className="flex-1">
                                <h2 className="font-semibold"> {book.title} </h2>
                                <h3 className="text-[#1e293bbc] text-sm">By{book.author_name}</h3>


                                <div className="flex items-center gap-3 pt-5 justify-between">
                                    <p>${book.price.toFixed(1)}</p>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => dispatch(decrease(book.key))} className="border border-[#023d8a2f] rounded px-2  cursor-pointer" >
                                            -
                                        </button>

                                        <span>{book.quantity}</span>

                                        <button onClick={() => dispatch(increase(book.key))} className="border border-[#023d8a2f] rounded px-2 cursor-pointer" >
                                            +
                                        </button>

                                        <button onClick={() => dispatch(deletecart(book.key))} className="text-red-500 ml-3 cursor-pointer" >
                                            <Trash />
                                        </button>
                                    </div>
                                    <p className="font-semibold">
                                        total : ${(book.price * book.quantity).toFixed(1)}
                                    </p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>

                <div className="border border-[#023d8a2f] rounded-lg flex flex-col w-90 justify-center items-center gap-5 py-10 min-h-30  max-h-50">
                    <p className=" text-xl font-bold"> Total: ${totalPrice.toFixed(1)}</p>
                    {totalPrice > 0 && (
                        <button className=" font-semibold  text-[#E6E7E4] bg-[#023d8adc] py-2 px-20 rounded-sm cursor-pointer">payment</button>
                    )}
                </div>
            </div>

        </main >
    )
}