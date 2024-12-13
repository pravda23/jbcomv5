export async function fetchPosts(page = 1, perPage = 10) {
  // const response = await fetch("./posts-api")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error("Error:", error));

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`,
    {
      method: "GET",
      credentials: "include", // This ensures cookies (such as login cookies) are sent with the request
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
}
