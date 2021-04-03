import database from "../../../database/connection";

exports.createProduto = async (req, res) => {
  const { nome, descricao, preco, compras_id } = req.body;

  await database.query(
    "INSERT INTO icts_test.produto (nome, descricao, preco, compras_id) VALUES (?,?,?,?)",
    [nome, descricao, preco, compras_id]
  );

  res.status(201).send({
    message: "Successfuly!",
    body: {
      compras: { nome, descricao, preco, compras_id },
    },
  });
};

exports.listAllProduto = async (req, res) => {
  const sql =
    "SELECT id, nome, descricao, preco, compras_id FROM icts_test.produto";
  await database.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

exports.findCompraProduto = async (req, res) => {
  const produtoId = parseInt(req.params.id);
  const sql = "SELECT id from produto p where p.compras_id = " + [produtoId];

  await database.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

exports.findProdutoById = async (req, res) => {
  const produtoId = parseInt(req.params.id);
  const sql =
    "SELECT nome, descricao, preco, compras_id FROM icts_test.produto  WHERE id = " +
    [produtoId];

  await database.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

exports.updateProduto = async (req, res) => {
  const produtoId = req.params.id;
  const { nome, descricao, preco, compras_id } = req.body;

  const response = await database.query(
    "UPDATE icts_test.produto SET nome = ?, descricao = ?, preco = ?, compras_id = ? WHERE id = ?",
    [nome, descricao, preco, compras_id, produtoId]
  );

  res.status(200).send({ message: "Produto Updated Successfully!" });
};

exports.deleteProduto = async (req, res) => {
  const compraId = req.params.id;

  const response = await database.query(
    "DELETE FROM icts_test.produto WHERE id = ?",
    [compraId]
  );

  res.status(200).send({ message: "Produto deleted Successfully!" });
};
