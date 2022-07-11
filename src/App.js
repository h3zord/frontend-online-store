import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import MoreInfo from './Pages/MoreInfo';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/moreInfo/:id" component={ MoreInfo } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
