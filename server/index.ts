import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

// Image proxy — allows Three.js to load external textures without CORS issues
const ALLOWED_HOSTS = [
  "triacorp.estalisto.cl",
  "images.unsplash.com",
];
app.get("/api/image-proxy", async (req, res) => {
  const url = req.query.url as string | undefined;
  if (!url) return res.status(400).send("Missing url parameter");

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return res.status(400).send("Invalid URL");
  }

  if (!ALLOWED_HOSTS.some((h) => parsed.hostname === h || parsed.hostname.endsWith(`.${h}`))) {
    return res.status(403).send("Host not allowed");
  }

  try {
    const upstream = await fetch(url);
    if (!upstream.ok) return res.status(upstream.status).send("Upstream error");

    const contentType = upstream.headers.get("content-type");
    if (contentType) res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400, immutable");

    const buffer = Buffer.from(await upstream.arrayBuffer());
    res.send(buffer);
  } catch {
    res.status(502).send("Failed to fetch image");
  }
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const publicDir = path.join(__dirname, "../public");
  app.use(express.static(publicDir));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`TRIACORP server running on port ${PORT}`);
});

export type AppRouter = typeof appRouter;
