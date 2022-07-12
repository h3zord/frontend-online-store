import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import MoreInfo from './Pages/MoreInfo';
import Checkout from './Pages/Checkout';
import Purchase from './Pages/Components/Purchase';
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
      <BrowserRouter>
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
              quantityProducts={ quantityProducts }
            />) }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/purchase" component={ Purchase } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
