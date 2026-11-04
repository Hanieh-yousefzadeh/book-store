import SearchBook from "./search"
export default function Hero() {
    return (
        <section className="sm:h-140 h-60  mt-5 w-full bg-[url('/wp10055128.jpg')] bg-cover bg-center rounded-2xl flex lg:flex-row flex-col lg:gap-0 gap-8  justify-center items-center">
            <div className="flex flex-col sm:gap-10 ">
                <h1 className="sm:text-5xl   text-[#F5F3EF] text-center lg:text-start pt-5  font-semibold sm:leading-14">Read Book Daily <br /> To Grow  Your Mind</h1>
                <div>
                    <p className="text-[#F5F3EF] text-lg xl:w-120 w-120 hidden sm:block text-center lg:text-start">The Largest Cataloge of books, a wide range of genres, for adults and children.Meet Your Next Favorite Book.</p>
                </div>
            </div>
            <SearchBook />

        </section>
    )
}