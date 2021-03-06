"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productController_1 = require("../controllers/productController");
const express = require("express");
const multer_1 = require("../config/multer");
exports.productRoute = express.Router();
exports.productRoute.get('/', productController_1.ProductController.getProducts);
exports.productRoute.get('/:id', productController_1.ProductController.getProductById);
exports.productRoute.post("/", multer_1.upload.single('file'), productController_1.ProductController.addProduct);
exports.productRoute.post("/getProductByCategory", productController_1.ProductController.getProductByCategory);
exports.productRoute.post("/searchProduct", productController_1.ProductController.searchProduct);
exports.productRoute.put("", productController_1.ProductController.updateProduct);
