import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com"
        ],
        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com"
        ],
        connectSrc: [
          "'self'",
          ...(ENV.NODE_ENV !== "production"
            ? ["http://localhost:3000", "http://localhost:5173"]
            : []
          ),
        ],
        imgSrc: ["'self'", "data:"],
      },
    },
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from health endpoint" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "success from books endpoint" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

app.listen(ENV.PORT, () => console.log(`Server is running on ${ENV.PORT}`));