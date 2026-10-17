import Link from "next/link";
import { Suspense } from "react";
import HomeBooks from "@/components/homebooks";
import Hero from "@/components/hero";

export default function Home() {
  return (

    <main className="px-10 pb-30 bg-[]">
      <section>
        <Hero />

        <div className="mt-20 flex justify-start ">
          <Link href="/categoris" className="text-lg font-medium"> Show All Books </Link>
        </div>
        <Suspense fallback={<p>Loading books...</p>}>
          <HomeBooks />
        </Suspense>

      </section>
    </main>
  );
}
