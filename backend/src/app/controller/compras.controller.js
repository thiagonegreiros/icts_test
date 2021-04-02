import database from "../../../database/connection";

exports.createCompra = async (req, res) => {
  const { total, tipo_pagamento, status } = req.body;

  await database.query(
    "INSERT INTO compras (total, tipo_pagamento, status) VALUES (?,?,?)",
    [total, tipo_pagamento, status]
  );

  res.status(201).send({
    message: "Successfuly!",
    body: {
      compras: { total, tipo_pagamento, status },
    },
  });
};

exports.listAllCompras = async (req, res) => {
  const sql = "SELECT total, tipo_pagamento, status  FROM icts_test.compras";
  await database.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

exports.findCompraById = async (req, res) => {
  const compraId = parseInt(req.params.id);
  const sql =
    "SELECT total, tipo_pagamento, status  FROM icts_test.compras  WHERE id = " +
    [compraId];

  await database.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

exports.updateCompra = async (req, res) => {
  const compraId = req.params.id;
  const { total, tipo_pagamento, status } = req.body;

  const response = await database.query(
    "UPDATE icts_test.compras SET total = ?, tipo_pagamento = ?, status = ? WHERE id = ?",
    [total, tipo_pagamento, status, compraId]
  );

  res.status(200).send({ message: "Compra Updated Successfully!" });
};

exports.deleteCompra = async (req, res) => {
  const compraId = req.params.id;

  const response = await database.query(
    "DELETE FROM icts_test.compras WHERE id = ?",
    [compraId]
  );

  res.status(200).send({ message: "Compra deleted Successfully!" });
};
