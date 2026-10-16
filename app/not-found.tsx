import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold"> Not Found Page</h2>
      <Link href="/" className="btn btn-primary"> Return To Home </Link>
    </div>
  );
}