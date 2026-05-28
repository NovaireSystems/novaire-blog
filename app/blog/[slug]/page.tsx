import Navbar from "@/components/Navbar";
import { getPost } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml =
    processedContent.toString();

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-sm uppercase tracking-widest text-gray-500 mb-6">
          {post.date}
        </div>

        <h1 className="text-6xl font-bold leading-tight mb-8">
          {post.title}
        </h1>

        <p className="text-xl text-gray-400 mb-16 leading-relaxed">
          {post.description}
        </p>

        <div
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: contentHtml,
          }}
        />
      </article>
    </main>
  );
}