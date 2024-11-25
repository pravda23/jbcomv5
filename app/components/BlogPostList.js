import { useState, useEffect } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import PageHeadingTitle from "./PageHeadingTitle";
import Card from "./Card.component";
import BlogPost from "./BlogPost.component";

const BlogPostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(
      `https://johnbartmann.com/creative-commons-music/wp-json/wp/v2/posts?per_page=3`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, []);

  if (!posts) {
    return <div className="center">Loading...</div>;
  }

  console.log();

  return (
    <>
      <PageHeadingTitle title={"BLOG"} />
      <p style={{ marginBottom: 10 }}>
        View all previous music releases and blog posts.
      </p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/creative-commons-music/${post.slug}`}>
              {post.title.rendered}
            </Link>
            <Routes>
              <Route path="/:slug" element={<BlogPost posts={posts} />} />
            </Routes>
          </div>
        );
      })}
    </>
  );
};

export default BlogPostList;
