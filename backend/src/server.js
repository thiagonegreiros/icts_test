import express from "express";
import cors from "cors";
import "../database/connection";
const app = express();
const port = process.env.PORT || 3334;

//* Api Routes
import index from "./app/routes/index";
import comprasRoute from "./app/routes/compras.routes";
import produtoRoute from "./app/routes/produtos.routes";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/compras", comprasRoute);
app.use("/produtos", produtoRoute);

//* Start serve
app.listen(port, (req, res) => {
  console.log(`🏃 Running on port ${port}`);
});
