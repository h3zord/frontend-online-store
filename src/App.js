import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import MoreInfo from './Pages/MoreInfo';
import Checkout from './Pages/Checkout';
import Purchase from './Pages/Components/Purchase';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/moreInfo/:id" component={ MoreInfo } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/purchase" component={ Purchase } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
