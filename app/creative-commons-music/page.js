import Navbar from "../components/Navbar.js";
import PageHeadingTitle from "../components/PageHeadingTitle.js";
import { fetchPosts } from "../../lib/api.js";

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <PageHeadingTitle title="Blog posts" />
        {posts.map((post) => (
          <div key={post.id} className="mb-10 border-b pb-5">
            <h2 className="text-xl font-semibold">{post.title.rendered}</h2>
            <div
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a
              href={`/creative-commons-music/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </main>
    </>
  );
}
