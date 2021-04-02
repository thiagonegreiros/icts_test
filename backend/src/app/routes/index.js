import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome the ICTS API - Test project",
    version: "1.0.0",
    author: "Thiago Negreiros",
  });
});

module.exports = routes;
