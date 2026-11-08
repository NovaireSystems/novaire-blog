import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { getAllPosts, getPost } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { notFound } from "next/navigation";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.opsmodernized.com"
).replace(/\/$/, "");

const siteName = "Ops Modernized";
const publisherName = "Novaire Systems";
const publisherUrl = "https://www.novairesystems.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Explicit related-article relationships.
 *
 * Each article receives recommendations based on subject relevance
 * rather than publication date.
 */
const relatedArticleMap: Record<string, string[]> = {
  "hidden-cost-fleet-spreadsheets": [
    "logistics-operational-bottlenecks",
    "fleet-management-software-small-business",
    "ai-logistics-operations",
  ],

  "logistics-operational-bottlenecks": [
    "hidden-cost-fleet-spreadsheets",
    "warehouse-management-modernization",
    "ai-logistics-operations",
  ],

  "fleet-management-software-small-business": [
    "hidden-cost-fleet-spreadsheets",
    "logistics-operational-bottlenecks",
    "ai-logistics-operations",
  ],

  "warehouse-management-modernization": [
    "logistics-operational-bottlenecks",
    "ai-logistics-operations",
    "fleet-management-software-small-business",
  ],

  "ai-logistics-operations": [
    "warehouse-management-modernization",
    "fleet-management-software-small-business",
    "logistics-operational-bottlenecks",
  ],
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const publishedDate = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.description,

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      type: "article",
      url: articleUrl,
      title: post.title,
      description: post.description,
      siteName,
      publishedTime: publishedDate,
      authors: [publisherUrl],
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${post.title} | ${siteName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  const allPosts = getAllPosts();

  const relatedSlugs = relatedArticleMap[post.slug] ?? [];

  const relatedPosts = relatedSlugs
    .map((relatedSlug) =>
      allPosts.find((item) => item.slug === relatedSlug)
    )
    .filter((item) => item !== undefined)
    .slice(0, 3);

  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const publishedDate = new Date(post.date).toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    author: {
      "@type": "Organization",
      name: publisherName,
      url: publisherUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      url: publisherUrl,
    },
    isPartOf: {
      "@type": "Blog",
      name: siteName,
      url: `${siteUrl}/blog`,
    },
    inLanguage: "en",
  };

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
          }}
        />

        <div className="text-sm uppercase tracking-widest text-gray-500 mb-6">
          {post.date}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
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

      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Continue Learning
            </div>

            <h2 className="text-4xl font-bold">
              Related Articles
            </h2>

            <p className="mt-4 text-gray-400">
              Explore more practical guides to fleet management,
              logistics operations, and modernization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block rounded-2xl border border-white/10 p-7 hover:border-white/40 transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {relatedPost.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {relatedPost.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-white">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-5">
            Operational Technology & Engineering
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Building Better Operational Systems
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Novaire Systems helps businesses modernize software,
            improve operational workflows, integrate AI, and build
            scalable technology platforms.
          </p>

          <a
            href={publisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Explore Novaire Systems
          </a>
        </div>
      </section>
    </main>
  );
}