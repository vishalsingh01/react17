import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
/*
  http://localhost:3000/
  http://localhost:3000/cart
  http://localhost:3000/details/5

*/
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/details/:id" component={Details} />
        <Route exact path="/" component={ProductList} />
        <Route default component={Default} />
      </Switch>
    </Router>    
  );
}

export default App;
