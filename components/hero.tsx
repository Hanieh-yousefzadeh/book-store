import SearchBook from "./search"
export default function Hero() {
    return (
        <section className="h-140  mt-5 w-full bg-[url('/wp10055128.jpg')] bg-cover bg-center rounded-2xl flex justify-center items-center">
            <div className="flex flex-col gap-10 pr-20">
                <h1 className="text-5xl text-[#F5F3EF] font-semibold leading-14">Read Book Daily <br /> To Grow  Your Mind</h1>
                <div>
                    <p className="text-[#F5F3EF] text-lg w-120">The Largest Cataloge of books, a wide range of genres, for adults and children.Meet Your Next Favorite Book.</p>
                </div>
            </div>
            <SearchBook />

        </section>
    )
}