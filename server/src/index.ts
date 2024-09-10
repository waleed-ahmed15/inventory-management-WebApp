import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ===============================IMPORT ROUTES=================================
import dasboardRoute from "./routes/dashboardRoutes";
import productsRoute from "./routes/productRoutes";
import userRoute from "./routes/userRoutes";

// ==============================CONFIGUARATIONS================================
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// =======================ROUTES=======================================
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/dashboard", dasboardRoute);
app.use("/products", productsRoute);
app.use("/user", userRoute);


/*========================SERVER======================================*/

const port = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
