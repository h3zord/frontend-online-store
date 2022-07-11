import React from 'react';
import { getCartitems, saveCartItems } from '../services/cartList';

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

  sumQuantity = (productID) => {
    const { cartList } = this.state;
    cartList.forEach(({ id }, index) => {
      if (id === productID) cartList[index].quantity += 1;
    });
    saveCartItems(cartList);
    this.setState({ cartList });
  }

  subQuantity = (productID) => {
    const { cartList } = this.state;
    cartList.forEach(({ id, quantity }, index) => {
      if (id === productID && quantity > 1) cartList[index].quantity -= 1;
    });
    saveCartItems(cartList);
    this.setState({ cartList });
  }

  showCartProducts = (cartList) => {
    const productsInCart = cartList.map(({ title, price, quantity, id }) => (
      <div key={ id }>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <p>
          R$
          {' '}
          <span>{ (price * quantity).toFixed(2) }</span>
        </p>
        <p>
          Quantidade:
          {' '}
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          id={ id }
          onClick={ () => this.sumQuantity(id) }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          id={ id }
          onClick={ () => this.subQuantity(id) }
        >
          -
        </button>
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
