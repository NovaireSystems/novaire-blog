import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.opsmodernized.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Logistics, Fleet Management & AI Operations Insights",
  description:
    "Explore practical guides to fleet management, logistics operations, warehouse modernization, and artificial intelligence. Discover strategies for building more efficient operational businesses.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ops Modernized",
    title: "Ops Modernized | Logistics, Technology & AI Insights",
    description:
      "Practical insights into fleet management, logistics operations, warehouse modernization, and AI-powered operational systems.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ops Modernized | Logistics & Technology Insights",
    description:
      "Explore practical insights into logistics, fleet management, warehouse operations, and AI.",
  },
};

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            Logistics • Operations • Technology
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Modernizing Logistics
            <br />
            & Operational Systems
          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
            Practical insights for businesses looking to improve
            fleet management, logistics operations, warehouse
            efficiency, and operational performance through
            modern software, automation, and artificial intelligence.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Explore Articles
            </Link>

            <a
              href="https://www.novairesystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-8 py-4 rounded-xl hover:border-white/50 transition"
            >
              Engineering & Technology
            </a>
          </div>
        </div>
      </section>

      {/* TOPIC AREAS */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="mb-14">
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Explore Our Topics
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Modern Operations, Explained
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-3xl">
            Explore the technologies, systems, and operational
            strategies shaping modern logistics and growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Fleet Management
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Learn how fleet management software, vehicle visibility,
              maintenance planning, and operational analytics help
              transportation businesses improve efficiency.
            </p>

            <Link
              href="/blog/fleet-management-software-small-business"
              className="inline-block mt-6 text-sm font-semibold hover:text-gray-300 transition"
            >
              Explore Fleet Management →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Warehouse & Logistics
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Explore warehouse management systems, inventory
              accuracy, logistics workflows, operational bottlenecks,
              and supply chain modernization.
            </p>

            <Link
              href="/blog/warehouse-management-modernization"
              className="inline-block mt-6 text-sm font-semibold hover:text-gray-300 transition"
            >
              Explore Warehouse Modernization →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              AI & Automation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Discover how artificial intelligence, predictive
              analytics, intelligent automation, and connected
              software systems are changing operational businesses.
            </p>

            <Link
              href="/blog/ai-logistics-operations"
              className="inline-block mt-6 text-sm font-semibold hover:text-gray-300 transition"
            >
              Explore AI in Logistics →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Latest Insights
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Operational Articles
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
              Practical guides and perspectives on improving
              logistics operations, modernizing business systems,
              and adopting emerging technologies.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold border border-white/20 px-6 py-3 rounded-xl hover:border-white/50 transition"
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* LOGIPULSE PRODUCT */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
              Logistics Technology
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Technology That Supports Better Logistics Operations
            </h2>

            <p className="mt-7 text-xl text-gray-400 leading-relaxed">
              Modern logistics businesses need more than spreadsheets
              and disconnected tools. Purpose-built software can
              improve operational visibility, simplify workflows,
              and help teams make better decisions.
            </p>

            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              LogiPulse is a logistics operations platform developed
              by Novaire Systems, bringing software-driven
              operational management and optimization to logistics
              businesses.
            </p>

            <a
              href="https://www.logipulse.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-9 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Explore LogiPulse →
            </a>
          </div>
        </div>
      </section>

      {/* NOVAIRE SYSTEMS CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            Operational Technology & Engineering
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Better Operational Systems
          </h2>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed">
            Novaire Systems partners with businesses to modernize
            software platforms, improve backend scalability,
            integrate artificial intelligence, and build
            automation systems that support business growth.
          </p>

          <a
            href="https://www.novairesystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Explore Novaire Systems →
          </a>
        </div>
      </section>
    </main>
  );
}