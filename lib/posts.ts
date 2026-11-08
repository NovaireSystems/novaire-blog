import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type PostMetadata = {
  title: string;
  date: string;
  description: string;
};

export type PostSummary = PostMetadata & {
  slug: string;
};

export type Post = PostSummary & {
  content: string;
};

export function getAllPosts(): PostSummary[] {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  const posts: PostSummary[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const metadata = matterResult.data as PostMetadata;

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      description: metadata.description,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const metadata = matterResult.data as PostMetadata;

  return {
    slug,
    content: matterResult.content,
    title: metadata.title,
    date: metadata.date,
    description: metadata.description,
  };
}