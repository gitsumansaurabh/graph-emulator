import dotenv from "dotenv";
import connectDB from "./database.js";
const path = require("path");
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

app.use(express.static(path.resolve(__dirname, "build")));

connectDB()
  .then(() => {
    app.get("*", (req, res) =>
      res.sendFile(path.resolve("build", "index.html"))
    );
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server Started !!");
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
