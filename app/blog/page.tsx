import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-bold mb-16">
          Insights & Articles
        </h1>

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
      </section>
    </main>
  );
}