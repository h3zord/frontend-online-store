import React from 'react';
import PropTypes from 'prop-types';
import { calculateTotalPrice, getCartitems, saveCartItems } from '../services/cartList';
import Header from './components/Header';
import emptyCart from '../images/emptyCart.svg';
import styles from '../styles/Cart.module.css';
import BackButton from './components/BackButton';
import sum from '../images/sum.svg';
import sub from '../images/sub.svg';

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
      <div key={ id } className={ styles.cartProduct }>
        <hr />
        <img src={ image } alt="produt img" className={ styles.productImage } />
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
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
        <div className={ styles.cartButtons }>
          <button
            data-testid="product-increase-quantity"
            type="button"
            id={ id }
            onClick={ () => this.sumQuantity(id) }
            className="quantity-button"
          >
            <img src={ sum } alt="sum img" />
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            id={ id }
            onClick={ () => this.subQuantity(id) }
            className="quantity-button"
          >
            <img src={ sub } alt="sub img" />
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
    const { history } = this.props;
    return (
      <div className={ styles.cartPage }>
        <Header />
        <BackButton history={ history } />
        {
          cartEmpty
            ? (
              <div className={ styles.emptyCart }>
                <img
                  src={ emptyCart }
                  data-testid="empty-msg"
                  alt="emptyCart img"
                />
              </div>
            )
            : (
              <div className={ styles.cartContainer }>
                <div className={ styles.cartProducts }>
                  <p className={ styles.title }>Carrinho de compras</p>
                  { this.showCartProducts(cartList) }
                </div>
                <div className={ styles.closeOrder }>
                  <p>Valor total da compra:</p>
                  <p>{ `R$ ${calculateTotalPrice().toFixed(2)}` }</p>
                  <button
                    data-testid="checkout-products"
                    type="button"
                    onClick={ this.redirectToCheckout }
                    disabled={ cartEmpty }
                  >
                    Finalizar compra
                  </button>
                </div>
              </div>
            )
        }
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
