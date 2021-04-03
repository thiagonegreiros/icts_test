import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditCompra = (props) => {
  const [total, setTotal] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("");
  const [status, setStatus] = useState("");
  
  const updateCompra = () => {
    const currentCompraId = props.match.params.id;

    let _data = {
      total  : total,
      tipo_pagamento: tipoPagamento,
      status: status,
    }

    fetch('http://localhost:3334/compras/'+currentCompraId, {
      method: "PUT",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch (err => console.log(err));
  }
  
  return (
    <Form>
      <Form.Group controlId="compraTotal">
        <Form.Label>Total</Form.Label>
        <Form.Control type="number" placeholder="Informe o total da compra" onChange={(event) => {setTotal(event.target.value) }}/>
      </Form.Group>
      <Form.Group controlId="compraTipoPagamento">
        <Form.Label>Tipo de Pagamento</Form.Label>
        <Form.Control type="text" placeholder="Informe o tipo de pagamento da compra" onChange={(event) => {setTipoPagamento(event.target.value) }}/>
      </Form.Group>
      <Form.Group controlId="compraStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Informe o status da compra" onChange={(event) => {setStatus(event.target.value) }}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={updateCompra}>
        Editar Compra
      </Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}

export default EditCompra;