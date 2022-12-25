import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../../styles/Home.module.css';

class CartButton extends React.Component {
  redirectToCart = () => {
    const { history } = this.props;
    history.push('/cart');
  }

  render() {
    const { quantityProducts } = this.props;
    return (
      <div className={ styles.cartButton }>
        <button
          data-testid="shopping-cart-button"
          type="button"
          id=""
          onClick={ this.redirectToCart }
        >
          <FaShoppingCart className={ styles.cart } />
          <p data-testid="shopping-cart-size">{ quantityProducts }</p>
        </button>
      </div>
    );
  }
}

CartButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  quantityProducts: PropTypes.number.isRequired,
};

export default CartButton;
