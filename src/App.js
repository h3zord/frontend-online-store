import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MoreInfo from './pages/MoreInfo';
import Checkout from './pages/Checkout';
import Purchase from './pages/components/Purchase';
import { addProductInCart, getCartitems } from './services/cartList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quantityProducts: 0,
    };
  }

  componentDidMount() {
    this.quantityProductsCart();
  }

  updateCartAndQuantityItems = (productData) => {
    addProductInCart(productData);
    this.quantityProductsCart();
  };

  quantityProductsCart = () => {
    const productList = getCartitems();
    const quantity = productList.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);
    this.setState({ quantityProducts: quantity });
  }

  render() {
    const { quantityProducts } = this.state;

    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              updateCartAndQuantityItems={ this.updateCartAndQuantityItems }
              quantityProducts={ quantityProducts }
            />) }
          />
          <Route
            path="/cart"
            render={ (props) => (<Cart
              { ...props }
              quantityProductsCart={ this.quantityProductsCart }
            />) }
          />
          <Route
            path="/moreInfo/:id"
            render={ (props) => (<MoreInfo
              { ...props }
              updateCartAndQuantityItems={ this.updateCartAndQuantityItems }
              quantityProducts={ quantityProducts }
            />) }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/purchase" component={ Purchase } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
