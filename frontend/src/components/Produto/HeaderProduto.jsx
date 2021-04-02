import { Container, Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";


const HeaderProduto = () => {
  return (
    <Navbar>
      <Container>
        <NavbarBrand href="/">Produtos</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/addProduto">Adicionar Produto</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderProduto;