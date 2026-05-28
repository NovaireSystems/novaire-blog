import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl font-bold">
          Novaire Systems
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}