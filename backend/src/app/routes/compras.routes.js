/**
 * Arquivo: src/routes/compra.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Compra'.
 * Data: 01/04/2021
 * Author: Thiago Negreiros
 */

import Router from "express-promise-router";
import comprasController from "../controller/compras.controller";

const router = Router();

router.get("/list", comprasController.listAllCompras);

router.post("/create", comprasController.createCompra);

router.get("/:id", comprasController.findCompraById);

router.put("/:id", comprasController.updateCompra);

router.delete("/:id", comprasController.deleteCompra);

module.exports = router;
