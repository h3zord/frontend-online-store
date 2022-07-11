import React from 'react';
import { getCartitems } from '../services/cartList';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartEmpty: true,
      cartList: [],
    };
  }

  componentDidMount() {
    this.getCartList();
  }

  getCartList = () => {
    const cartList = getCartitems();
    if (cartList.length > 0) {
      this.setState({
        cartList,
        cartEmpty: false,
      });
    }
  }

  showCartProducts = (cartList) => {
    const productsInCart = cartList.map(({ image, title, price, quantity, id }) => (
      <div key={ id }>
        <img src={ image } alt="imagem ilustrativa do produto" />
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <p>
          R$
          {' '}
          <span>{ price }</span>
        </p>
        <p>
          Quantidade:
          {' '}
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        </p>
      </div>
    ));

    return productsInCart;
  }

  render() {
    const { cartEmpty, cartList } = this.state;
    return (
      <div className="cart-page">
        {
          cartEmpty
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : this.showCartProducts(cartList)
        }
      </div>
    );
  }
}

export default Cart;
