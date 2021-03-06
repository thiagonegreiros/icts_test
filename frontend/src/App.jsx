import 'bootstrap/dist/css/bootstrap.min.css'
import { NavbarBrand } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduto from './components/Produto/AddProduto';
import Header from './components/Header';
import HomeProduto from './components/Produto/HomeProduto';
import HomeCompra from './components/Compras/HomeCompra';
import AddCompra from './components/Compras/AddCompra';
import EditCompra from './components/Compras/EditCompra';
import EditProduto from './components/Produto/EditProduto';


const App = () =>  {
  return (
    <div style={{maxWidth: "50rem", margin: "4rem auto"}}>
        <div>
          <NavbarBrand href="/">ICTS Test</NavbarBrand>
        </div>
      <div>
        <Router>
            <Route exact path="/" component={Header} />
            <Route path="/homeProduto" component={HomeProduto} />
            <Route path="/addProduto" component={AddProduto} />
            <Route path="/produto/edit/:id" component={EditProduto} />
            {/* <Route path="/edit/:id" component={EditUser} /> */}
            <Route path="/homeCompra" component={HomeCompra} />
            <Route path="/addCompra" component={AddCompra} />
            <Route path="/compra/edit/:id" component={EditCompra} />
          
        </Router>
      </div>
    </div>
  );
}

export default App;
