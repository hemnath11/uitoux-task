import express from 'express';
import { createProduct, GetProducts} from '../actions/products/product_actions.js';
const router = express.Router();


router.post('/', createProduct);
router.get("/", GetProducts)

export default router;