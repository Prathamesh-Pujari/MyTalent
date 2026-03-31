import express from "express";
import path from "path"
import { ENV } from "./lib/env.js"
import helmet from "helmet";

const app = express()

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

const _dirname = path.resolve()


app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from health endpoint" })
})

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "success from books endpoint" })
})

//make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")))

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"))
  })


}

app.listen(ENV.PORT, () => console.log("Server is running on 3000"))