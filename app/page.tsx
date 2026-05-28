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
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            Operational Insights
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Modernizing Operational
            Systems & Infrastructure
          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
            Insights around operational scalability,
            logistics workflows, backend systems,
            AI automation, and infrastructure
            modernization across modern operational
            businesses.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Explore Articles
            </Link>

            <a
              href="https://novairesystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-8 py-4 rounded-xl hover:border-white/50 transition"
            >
              Visit Novaire Systems
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES / TOPICS */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              AI & Automation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Exploring how operational businesses
              can streamline workflows through AI,
              automation systems, analytics, and
              intelligent infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Operational Systems
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Insights into backend modernization,
              system scalability, workflow
              coordination, and operational
              visibility.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Logistics Infrastructure
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Articles focused on transportation,
              warehousing, freight coordination,
              supply chain workflows, and operational
              modernization.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="flex items-center justify-between mb-14">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Latest Insights
            </div>

            <h2 className="text-5xl font-bold">
              Operational Articles
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
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            Need Help Modernizing Operations?
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Work With Novaire Systems
          </h2>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed">
            Novaire Systems partners with operational
            businesses across Europe to improve
            backend systems, AI integrations,
            automation workflows, and platform
            scalability.
          </p>

          <a
            href="https://novairesystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Visit Novaire Systems
          </a>
        </div>
      </section>
    </main>
  );
}