import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* BRAND */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-gray-300 transition"
        >
          Ops Modernized
        </Link>

        {/* NAVIGATION */}
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/blog" className="hover:text-white transition">
            Articles
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}