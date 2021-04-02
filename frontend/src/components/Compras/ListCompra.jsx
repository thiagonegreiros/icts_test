import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const ListCompra = () => {
  const [compras, setCompra] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3334/compras/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCompra(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Total</th>
          <th>Tipo Pagamento</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      {compras.map((compra, index) => (
        <tr>
          <td>{ index + 1 }</td>
          <td>{compra.total}</td>
          <td>{compra.tipo_pagamento}</td>
          <td>{compra.status}</td>
          <td>
            <Button variant="outline-warning">Edit</Button>
            <Button variant="outline-danger">Delete</Button>
          </td>
        </tr>
      ))}
        
      </tbody>
    </Table>
  );
}

export default ListCompra;