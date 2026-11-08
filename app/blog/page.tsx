import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logistics, Fleet Management & AI Articles",

  description:
    "Explore practical guides and insights covering fleet management, logistics operations, warehouse modernization, supply chain technology, and artificial intelligence.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Logistics, Fleet Management & AI Articles",
    description:
      "Practical guides to improving logistics operations, modernizing fleet and warehouse systems, and applying AI to operational businesses.",
    url: "/blog",
    siteName: "Ops Modernized",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Logistics, Fleet Management & AI Articles",
    description:
      "Explore practical insights into logistics technology, fleet management, warehouse modernization, and AI.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        {/* PAGE INTRODUCTION */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
            Ops Modernized Knowledge Hub
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Insights & Articles
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            Explore practical insights into fleet management,
            logistics operations, warehouse modernization,
            artificial intelligence, and the technology
            transforming modern operational businesses.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Our articles examine common operational challenges,
            emerging technologies, software solutions, and
            practical strategies businesses can use to improve
            efficiency, visibility, and scalability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-400">
            <span className="border border-white/10 rounded-full px-4 py-2">
              Fleet Management
            </span>

            <span className="border border-white/10 rounded-full px-4 py-2">
              Logistics Operations
            </span>

            <span className="border border-white/10 rounded-full px-4 py-2">
              Warehouse Technology
            </span>

            <span className="border border-white/10 rounded-full px-4 py-2">
              AI & Automation
            </span>
          </div>
        </div>

        {/* ARTICLE LIBRARY */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold">
              All Articles
            </h2>

            <span className="text-sm text-gray-500">
              {posts.length} {posts.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  slug={post.slug}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              New articles are coming soon. Check back for practical
              insights into logistics and operational technology.
            </p>
          )}
        </div>

        {/* RELATED RESOURCES */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
              Beyond the Articles
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Explore Logistics Technology
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Discover how modern software platforms and
              engineering solutions can help businesses
              improve logistics workflows, operational
              visibility, and business performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.logipulse.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-6 py-3 rounded-xl hover:border-white/50 transition"
              >
                Explore LogiPulse →
              </a>

              <a
                href="https://www.novairesystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-6 py-3 rounded-xl hover:border-white/50 transition"
              >
                Explore Novaire Systems →
              </a>

              <Link
                href="/"
                className="border border-white/20 px-6 py-3 rounded-xl hover:border-white/50 transition"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}