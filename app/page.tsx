import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-widest text-gray-400 mb-6">
            AI & Software Engineering
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Modernizing Operational
            Platforms Across Europe
          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
            Novaire Systems helps logistics,
            operational, and infrastructure-focused
            companies improve backend systems,
            automation workflows, AI integrations,
            and platform scalability.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Book a Conversation
            </a>

            <Link
              href="/blog"
              className="border border-white/20 px-8 py-4 rounded-xl hover:border-white/50 transition"
            >
              Read Insights
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Backend Modernization
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Improve scalability, reliability,
              infrastructure, and operational
              performance across legacy systems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              AI & Automation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Streamline workflows through AI-assisted
              operations, automation pipelines,
              analytics, and intelligent coordination.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Operational Platforms
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Support logistics, transportation,
              warehouse, aviation, and operational
              software systems across Europe.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="flex items-center justify-between mb-14">
          <div>
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              Insights
            </div>

            <h2 className="text-5xl font-bold">
              Latest Articles
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Let’s Improve Operational
            Complexity Together
          </h2>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed">
            We partner with operational businesses
            across Europe to modernize workflows,
            systems, and infrastructure.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Contact Novaire Systems
          </a>
        </div>
      </section>
    </main>
  );
}