import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import PageHeadingTitle from "./PageHeadingTitle.js";
import DOMPurify from "dompurify";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(
      `https://johnbartmann.com/creative-commons-music/wp-json/wp/v2/posts?slug=${slug}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data[0]);
      });
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  // Sanitize the HTML content to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(post.content.rendered);

  return (
    <div>
      <Navbar />
      <PageHeadingTitle title="BLOG" margin={"mb-6"} />
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
}

export default BlogPost;
