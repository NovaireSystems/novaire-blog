import Link from "next/link";

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function BlogCard({
  title,
  description,
  slug,
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      aria-label={`Read article: ${title}`}
      className="group block border border-white/10 rounded-2xl p-7 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-200 transition">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-7 text-sm font-semibold text-white group-hover:text-gray-300 transition">
        Read Article →
      </div>
    </Link>
  );
}