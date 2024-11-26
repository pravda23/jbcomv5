console.log("top page");
import { fetchPosts } from "../../../lib/api.js";
import { notFound } from "next/navigation";

console.log("params");
export default async function PostPage({ params }) {
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
