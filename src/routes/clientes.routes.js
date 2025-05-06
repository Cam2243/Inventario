import { Router } from "express";
import { methoHTTP as ClienteController} from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", ClienteController.getClientes);
router.post("/", ClienteController.postClientes);

export default router;