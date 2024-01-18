import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-7xl font-bold tracking-tighter">About Page</h1>
      <div className="flex items-center space-x-5">
        <button className="mt-8 bg-red-500 hover:bg-red-700 h-12 text-white font-bold py-2 px-4 rounded">
          Sign out
        </button>
        <Link href={"/"}>
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 h-12 text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </Link>
      </div>
    </main>
  );
}
