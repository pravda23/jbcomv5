import Link from "next/link";
import Navbar from "../../components/Navbar.js";
import BackButton from "../../components/BackButton.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchPosts } from "../../../lib/api.js";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <div className="mb-4">
          <Link href="/creative-commons-music">
            <BackButton title={"Back to blog"} />
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </main>
    </>
  );
}
