import Express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { Purchase } from "./models/purchaseModel.js";
import purchaseRouter from "./routes/purchase.js"
import cors from "cors";
const app = Express();
console.log("process.env.SERVER_URL",process.env.SERVER_URL);
mongoose.connect(process.env.SERVER_URL);
const db = mongoose.connection;

app.use(Express.json());
app.use(cors());


//Routes
app.use('/purchase',purchaseRouter)
app.get("/", (req, res) => {
  return res.send("Hello World");
});
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conected to Database"));

app.listen(3001, () => {
  console.log("Hello World");
});
