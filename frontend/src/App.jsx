import 'bootstrap/dist/css/bootstrap.min.css'
import { NavbarBrand } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduto from './components/Produto/AddProduto';
import Header from './components/Header';
import HomeProduto from './components/Produto/HomeProduto';
import HomeCompra from './components/Compras/HomeCompra';
import AddCompra from './components/Compras/AddCompra';


const App = () =>  {
  return (
    <div style={{maxWidth: "35rem", margin: "4rem auto"}}>
        <div>
          <NavbarBrand href="/">ICTS Test</NavbarBrand>
        </div>
      <div>
        <Router>
            <Route exact path="/" component={Header} />
            <Route path="/homeProduto" component={HomeProduto} />
            <Route path="/addProduto" component={AddProduto} />
            {/* <Route path="/edit/:id" component={EditUser} /> */}
            <Route path="/homeCompra" component={HomeCompra} />
            <Route path="/addCompra" component={AddCompra} />
          
        </Router>
      </div>
    </div>
  );
}

export default App;
