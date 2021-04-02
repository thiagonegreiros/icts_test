import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProduto = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [compras_id, setIdCompra] = useState("");
  const [compras, setCompra] = useState([]);

  const saveProduto = () => {

    let _data = {
      nome,
      descricao,
      preco,
      compras_id,
    }

    fetch('http://localhost:3334/produtos/create', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch (err => console.log(err));
    
  };

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
    <Form>
      <Form.Group controlId="produtoNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Informe o nome do Produto" onChange={(event) => {setNome(event.target.value) }}/>
      </Form.Group>
      <Form.Group controlId="produtoDescricao">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" placeholder="Informe o descrição do Produto" onChange={(event) => {setDescricao(event.target.value) }}/>
      </Form.Group>
      <Form.Group controlId="produtoPreco">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="number" placeholder="Informe o preço do Produto" onChange={(event) => {setPreco(event.target.value) }}/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Example select</Form.Label>
        <Form.Control as="select" onChange={(event) => {setIdCompra(event.target.value) }}>
          {compras.map((compra) => (
            <option value={compra.id}> { compra.tipo_pagamento }</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="button" onClick={saveProduto}>
        Salvar Produto
      </Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}

export default AddProduto;