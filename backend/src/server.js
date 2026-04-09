import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";
import helmet from "helmet";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import { serve } from "inngest/express";
import { inngest } from "./lib/inngest.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middleware
app.use(express.json())
// credentials true = server allow browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))


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

app.use("/api/inngest", serve({ client: inngest, functions }))

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



const startServer = async () => {
  try {
    await connectDB()
    app.listen(ENV.PORT, () => console.log("Server is running on port : ", ENV.PORT),
    );
  } catch (error) {
    console.log("Error Starting Server", error)
  }
}

startServer(); 