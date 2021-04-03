
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListProduto = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3334/produtos/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const removeProduto = (id) => {  
    fetch('http://localhost:3334/produtos/' + id, {
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
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product, index) => (
        <tr>
          <td>{ index + 1 }</td>
          <td>{product.nome}</td>
          <td>{product.descricao}</td>
          <td>{product.preco}</td>
          <td>
            <Link className="btn btn-warning"  to={`/produto/edit/${product.id}`}>Edit</Link>
            <Button className="btn btn-danger" onClick={() => removeProduto(product.id)}>Delete</Button>
          </td>
        </tr>
      ))}
        
      </tbody>
    </Table>
  );
}

export default ListProduto;