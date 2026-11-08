import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b12] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition"
            >
              Ops Modernized
            </Link>

            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Insights on logistics, fleet management, warehouse operations,
              technology, and AI-driven operational modernization.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Network */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Network
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.novairesystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Novaire Systems
                </a>
              </li>

              <li>
                <a
                  href="https://www.logipulse.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LogiPulse
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} Ops Modernized. All rights reserved.
          </p>

          <p>
            Published by Novaire Systems
          </p>
        </div>

      </div>
    </footer>
  );
}