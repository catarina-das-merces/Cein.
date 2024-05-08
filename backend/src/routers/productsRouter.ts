import { Router } from "express";
import { checkRoles } from "../middlewares/authMiddleware.js";
import ProductsController from "../controllers/productControllers.js";

const router = Router();
// Get all products
router.get(
	"/products",
	ProductsController.getAllProducts
);
// Get product by ID
router.get(
	"/products/:id",
	checkRoles(["USER", "ADMIN"]),
	ProductsController.getProductById
);
// Create a new product
router.post(
	"/products",
	checkRoles(["ADMIN"]),
	ProductsController.createProduct
);
// Update an existing product
router.put(
	"/products/:id",
	checkRoles(["ADMIN"]),
	ProductsController.updateProduct
);
// Delete an existing product
router.delete(
	"/products/:id",
	checkRoles(["ADMIN"]),
	ProductsController.deleteProduct
);
export default router;
