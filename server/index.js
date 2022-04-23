import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/product",productRoutes);
app.use("/user",userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect( process.env.CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
  

