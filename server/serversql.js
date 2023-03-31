const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

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

app.use("/", router);

app.listen(port, () => console.log("Server started at port " + port));
