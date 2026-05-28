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
    <a
      href={`/blog/${slug}`}
      className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 transition"
    >
      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 text-sm text-white">
        Read Article →
      </div>
    </a>
  );
}