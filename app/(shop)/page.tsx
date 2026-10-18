import Link from "next/link";
import { Suspense } from "react";
import HomeBooks from "@/components/homebooks";
import Hero from "@/components/hero";
import PopularBook from "@/components/popularbook"
import LatestBook from "@/components/latestbook";

export default function Home() {
  return (

    <main className="px-10 pb-30 bg-[]">
      <section>
        <Hero />

        <div className="mt-20 flex-col justify-start ">
          <Link href="/categoris" className="text-lg font-medium "> Show All Books </Link>
          <div className="border-b-2 w-20 border-[#023d8ada] "></div>
        </div>
        <Suspense fallback={
          <div className="flex items-center justify-center pt-60">
            <span className="loading loading-spinner loading-xl"></span>
          </div>}>
          <HomeBooks />
        </Suspense>

        <div className="pt-28">
          <h2 className="text-lg font-medium ">Popular</h2>
          <div className="border-b-2 w-15 border-[#023d8ada]"></div>
          <Suspense fallback={
            <div className="flex items-center justify-center pt-60">
              <span className="loading loading-spinner loading-xl"></span>
            </div>}>
            <PopularBook />
          </Suspense>
        </div>

        <div className="pt-28">
          <h2 className="text-lg font-medium ">Latest</h2>
          <div className="border-b-2 w-15 border-[#023d8ada]"></div>
          <Suspense fallback={
            <div className="flex items-center justify-center pt-60">
              <span className="loading loading-spinner loading-xl"></span>
            </div>}>
            <LatestBook />
          </Suspense>
        </div>



      </section>
    </main>
  );
}
