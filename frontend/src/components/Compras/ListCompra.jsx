import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

  const removeCompra = (id) => {  
    fetch('http://localhost:3334/compras/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
  }

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
            <Link className="btn btn-warning"  to={`/compra/edit/${compra.id}`} >Edit</Link>
            <Button className="btn btn-danger" onClick={() => removeCompra(compra.id)}>Delete</Button>
          </td>
        </tr>
      ))}
        
      </tbody>
    </Table>
  );
}

export default ListCompra;