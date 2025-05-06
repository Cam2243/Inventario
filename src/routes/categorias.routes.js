import { Router } from "express";
import { methoHTTP as CategoriaController} from "../controllers/categorias.controllers.js";
/*creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/", CategoriaController.getCategorias); /*para crud - read */
router.post("/", CategoriaController.postCategorias);/*para crud - create */

/*ruta que recibe un parametro */
router.get("/:id", CategoriaController.getCategory);/*para crud - read 1 sola fila*/

/*Ruta que recibe parametro id de categoria a borar*/
router.delete("/:id", CategoriaController.deleteCategory);/*para crud - delete 1 sola fila*/

/*ruta que reciba como parametro tanto el cuerpo id a actualizar*/
router.put("/:id", CategoriaController.updateCategorias);/*para crud - update 1 sola fila*/

/*hacemos disponible a router en toda la app*/
export default router;