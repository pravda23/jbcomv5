export default async function handler(req, res) {
  console.log("API route called");

  try {
    const { path } = req.query;
    console.log("req.query:", req.query);
    console.log("path:", path);

    if (!path) {
      console.error("Path is undefined. req.query:", req.query);
      res.status(400).json({ error: "Missing path parameter" });
      return;
    }

    const hostingerUrl = `/api/track/${path.join("/")}`;
    console.log("Fetching from Hostinger:", hostingerUrl);

    const response = await fetch(hostingerUrl);

    if (!response.ok) {
      console.error(`Hostinger responded with ${response.status}`);
      return res.status(response.status).send("File not found");
    }

    // Set headers from the Hostinger response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Content-Type", response.headers.get("Content-Type"));
    res.setHeader("Content-Length", response.headers.get("Content-Length"));

    // Stream the response properly
    const stream = response.body;
    stream.pipe(res);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send("Server error");
  }
}
