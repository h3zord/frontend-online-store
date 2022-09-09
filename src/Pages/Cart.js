import React from 'react';
import PropTypes from 'prop-types';
import { getCartitems, saveCartItems } from '../services/cartList';
import Header from './Components/Header';

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

  redirectToCheckout = () => {
    const { history } = this.props;
    history.push('/checkout');
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
    const { quantityProductsCart } = this.props;
    const cartList = getCartitems();
    cartList.forEach(({ id, quantity, maxQuantity }, index) => {
      if (id === productID && quantity < maxQuantity) cartList[index].quantity += 1;
    });
    saveCartItems(cartList);
    this.setState({ cartList });
    quantityProductsCart();
  }

  subQuantity = (productID) => {
    const { quantityProductsCart } = this.props;
    const cartList = getCartitems();
    cartList.forEach(({ id, quantity }, index) => {
      if (id === productID && quantity > 1) cartList[index].quantity -= 1;
    });
    saveCartItems(cartList);
    this.setState({ cartList });
    quantityProductsCart();
  }

  deleteItemCart = (id) => {
    const cartList = getCartitems();
    const filteredCartItems = cartList.filter((item) => item.id !== id);
    console.log(filteredCartItems);
    saveCartItems(filteredCartItems);
    this.setState({ cartList: filteredCartItems });
    if (filteredCartItems.length === 0) { this.setState({ cartEmpty: true }); }
  };

  showCartProducts = (cartList) => {
    const productsInCart = cartList.map(({ image, title, price, quantity, id }) => (
      <div key={ id } className="cart-product">
        <img src={ image } alt="imagem ilustrativa do produto" className="product-image" />
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
        <div className="cart-buttons">
          <button
            data-testid="product-increase-quantity"
            type="button"
            id={ id }
            onClick={ () => this.sumQuantity(id) }
            className="quantity-button"
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            id={ id }
            onClick={ () => this.subQuantity(id) }
            className="quantity-button"
          >
            -
          </button>
          <button
            type="button"
            className="delete-button"
            onClick={ () => this.deleteItemCart(id) }
            id={ id }
          >
            Excluir
          </button>
        </div>
      </div>
    ));

    return productsInCart;
  }

  render() {
    const { cartEmpty, cartList } = this.state;
    return (
      <div className="cart-page">
        <Header />
        <div className="cart-container">
          {
            cartEmpty
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : <div className="cart-products">{ this.showCartProducts(cartList) }</div>
          }
          <div className="close-order">
            <button
              data-testid="checkout-products"
              type="button"
              onClick={ this.redirectToCheckout }
              disabled={ cartEmpty }
            >
              Fechar Pedido
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  quantityProductsCart: PropTypes.func.isRequired,
};

export default Cart;
