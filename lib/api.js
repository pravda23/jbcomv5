// USING SERVER API ROUTE

// export default async function handler(req, res) {
//   const { method } = req;
//   const { endpoint } = req.query;

//   if (method !== "GET") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const wpResponse = await fetch(
//       `https://johnbartmann.com/wp-json${endpoint}`
//     );
//     const data = await wpResponse.json();

//     res.status(wpResponse.status).json(data);
//   } catch (error) {
//     console.error("Proxy Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// USING REST API

export async function fetchPosts(page = 1, perPage = 10) {
  const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`;

  console.log(apiUrl);

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      console.error("Response Status:", response.status);
      console.error("Response Text:", await response.text());
      throw new Error("Failed to fetch posts");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}
