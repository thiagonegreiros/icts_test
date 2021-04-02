import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary mr-5" to="/homeCompra">Compras</Link>
            <Link className="btn btn-primary" to="/homeProduto">Produto</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;