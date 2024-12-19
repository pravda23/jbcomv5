// export default async function handler(req, res) {
//   const { method } = req;
//   const { endpoint } = req.query;

//   // Check for allowed HTTP methods
//   if (method !== "GET") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     // Fetch data from the WordPress API
//     const wpResponse = await fetch(
//       `https://johnbartmann.com.com/wp-json${endpoint}`
//     );
//     const data = await wpResponse.json();

//     // Pass through the response
//     res.status(wpResponse.status).json(data);
//   } catch (error) {
//     console.error("Proxy Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
