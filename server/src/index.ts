import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello Rememory API");
});

const PORT = process.env.PORT || 5000;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.CONNECTION_URL as string, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// prevent warnings in the console
mongoose.set("useFindAndModify", false);
