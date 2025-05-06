import { Router } from "express";
import { methoHTTP as ProductoController} from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", ProductoController.getProductos);
router.put("/:id", ProductoController.updateProductos);

export default router;