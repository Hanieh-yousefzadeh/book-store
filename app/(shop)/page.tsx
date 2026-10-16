import Link from "next/link";
import { Suspense } from "react";
import HomeBooks from "@/components/homebooks";


export default function Home() {
  return (

    <main>
      <section>
        <h1 className="text-2xl font-bold">Discover Books </h1>

        <Suspense fallback={<p>Loading books...</p>}>
          <HomeBooks  />
        </Suspense>

        <div className="mt-6 flex justify-center">
          <Link href="/categoris" className="btn "> Show All Books </Link>
        </div>
      </section>
    </main>
  );
}
