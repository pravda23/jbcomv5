"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import PageHeadingTitle from "../components/PageHeadingTitle.js";
import { fetchPosts } from "../../lib/api.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPosts = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const fetchedPosts = await fetchPosts(page);
      setPosts(fetchedPosts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(currentPage);
  }, [currentPage]);

  const handleNext = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePrevious = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <PageHeadingTitle title="Blog posts" />

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && posts.length === 0 && <p>No posts available.</p>}

        {!loading &&
          !error &&
          posts.map((post) => (
            <div key={post.id} className="mb-10 border-b pb-5">
              <h2 className="text-xl font-semibold">{post.title.rendered}</h2>
              <a
                href={`${process.env.WORDPRESS_API_URL}/${post.slug}`}
                className="text-secondarylight"
              >
                Read More
              </a>
            </div>
          ))}

        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePrevious}
            className="px-4 pb-6 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="px-4 pb-6 bg-gray-200 text-gray-700 rounded"
          >
            <BsChevronRight />
          </button>
        </div>
      </main>
    </>
  );
}
