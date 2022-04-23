import express from "express";
import {  addProducts , getProducts, getUProducts, markAsSold } from "../controllers/Product.js";
const router = express.Router();

router.get('/allproducts', getProducts);
router.get('/getproducts/:email', getUProducts);
router.post('/addproduct/:name/:email/:price',addProducts);
router.patch('/markassold/:id', markAsSold);


export default router;