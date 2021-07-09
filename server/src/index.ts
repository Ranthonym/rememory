import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts";

// const postRoutes = require("./routes/posts");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes

app.use("/posts", postRoutes);

//mongodb atlas connect
const CONNECTION_URL =
  "mongodb+srv://mernuser:123qwe@cluster0.9vt7k.mongodb.net/rememory?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(CONNECTION_URL, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// prevent warnings in the console
mongoose.set("useFindAndModify", false);
