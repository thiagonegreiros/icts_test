/**
 * Arquivo: src/routes/Produto.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Produtos'.
 * Data: 01/04/2021
 * Author: Thiago Negreiros
 */

import Router from "express-promise-router";
import produtosController from "../controller/produtos.controller";

const router = Router();

router.get("/list", produtosController.listAllProduto);

router.get("/compra/:id", produtosController.findCompraProduto);

router.post("/create", produtosController.createProduto);

router.get("/:id", produtosController.findProdutoById);

router.put("/:id", produtosController.updateProduto);

router.delete("/:id", produtosController.deleteProduto);

module.exports = router;
