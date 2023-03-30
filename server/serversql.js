"use strict";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import {
  createProduct,
  getProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "./endpoints.js";

const app = express();
const port = 8080;
const router = express.Router();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));


router.post("/server/product", createProduct);

router.get("/server/products", getProducts);
router.get("/server/allProducts", getAllProducts);

router.put("/server/product/:productId", updateProduct);

router.delete("/server/product/:productId", deleteProduct);

//server.use("/", router);

//server.listen(port, () => console.log("Server started at port " + port));