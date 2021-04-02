import { Container, Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";


const HeaderCompra = () => {
  return (
    <Navbar>
      <Container>
        <NavbarBrand href="/">Compras</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/addCompra">Adicionar Compra</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderCompra;