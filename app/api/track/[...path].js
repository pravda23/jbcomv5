export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).send("Invalid request");
  }

  // Construct the Hostinger URL dynamically
  const hostingerUrl = `https://track.johnbartmann.com/${path.join("/")}`;

  console.log("Fetching from Hostinger:", hostingerUrl);

  try {
    const response = await fetch(hostingerUrl);

    if (!response.ok) {
      console.error(`Hostinger responded with ${response.status}`);
      return res.status(response.status).send("File not found");
    }

    // Set headers from the Hostinger response
    res.setHeader("Content-Type", response.headers.get("Content-Type"));
    res.setHeader("Content-Length", response.headers.get("Content-Length"));

    // Stream the response properly
    const stream = response.body;
    stream.pipeTo(res);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send("Server error");
  }
}
