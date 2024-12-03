export async function fetchPosts(page = 1, perPage = 10) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`
  );
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
}
