export async function fetchPosts() {
  const response = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts`
  );
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
}
