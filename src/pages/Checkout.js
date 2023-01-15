/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { calculateTotalPrice, getCartitems } from '../services/cartList';
import Header from './components/Header';
import BackButton from './components/BackButton';
import styles from '../styles/Checkout.module.css';
import boleto from '../images/boleto.svg';
import visa from '../images/visa.svg';
import mastercard from '../images/mastercard.svg';
import elo from '../images/elo.svg';

class Checkout extends Component {
  redirectToPurchase = () => {
    const { history } = this.props;
    history.push('/purchase');
  }

  render() {
    const { history } = this.props;

    const productList = getCartitems();
    const totalPrice = calculateTotalPrice().toFixed(2);
    return (
      <div className={ styles.checkoutPage }>
        <Header />
        <BackButton history={ history } />
        <div className={ styles.checkoutContainer }>
          <div className={ styles.productsCheckout }>
            <p className={ styles.title }>Revise seus produtos</p>
            {
              productList.map(({ id, image, price, quantity, title }) => (
                <div key={ id } className={ styles.productCheckout }>
                  <img
                    src={ image }
                    alt="imagem ilustrativa do produto"
                    className="product-image"
                  />
                  <h4>{ title }</h4>
                  <p>{ `R$ ${(price * quantity).toFixed(2)}` }</p>
                  <p>{`Quantidade: ${quantity}`}</p>
                </div>
              ))
            }
            <p className={ styles.title }>{`Total: R$ ${totalPrice}`}</p>
          </div>
          <div className={ styles.infoContainer }>
            <p className={ styles.title }>Informações do Comprador</p>
            <form className={ styles.formCheckout }>
              <input
                data-testid="checkout-fullname"
                type="text"
                placeholder="Nome Completo"
                className={ styles.fullName }
              />
              <input
                data-testid="checkout-cpf"
                type="text"
                placeholder="CPF"
                className={ styles.cpf }
              />
              <input
                data-testid="checkout-email"
                type="email"
                placeholder="Email"
                className={ styles.email }
              />
              <input
                data-testid="checkout-phone"
                type="tel"
                placeholder="Telefone"
                className={ styles.phone }
              />
              <input
                data-testid="checkout-cep"
                type="text"
                placeholder="CEP"
                className={ styles.cep }
              />
              <input
                data-testid="checkout-address"
                type="text"
                placeholder="Endereço"
                className={ styles.adress }
              />
              <input
                data-testid="checkout-complement"
                type="text"
                placeholder="Complemento"
                className={ styles.complement }
              />
              <input
                data-testid="checkout-number"
                type="text"
                placeholder="Número"
                className={ styles.number }
              />
            </form>
            <p className={ styles.title }>Método de pagamento</p>
            <div className={ styles.paymentContainer }>
              <div className={ styles.paymentDescription }>
                <div className={ styles.boletoPayment }>
                  <p>Boleto</p>
                </div>
                <div className={ styles.creditPayment }>
                  <p>Cartão de crédito</p>
                </div>
              </div>
              <div className={ styles.paymentMethod }>
                <form className={ styles.boleto }>
                  <label htmlFor="boleto" className={ styles.boletoMethod }>
                    <input type="radio" id="boleto" name="payment" value="boleto" />
                    <img src={ boleto } alt="boleto img" />
                  </label>
                  <label htmlFor="visa">
                    <input type="radio" id="visa" name="payment" value="visa" />
                    <img src={ visa } alt="visa img" />
                  </label>
                  <label htmlFor="master">
                    <input type="radio" id="master" name="payment" value="master" />
                    <img src={ mastercard } alt="mastercard img" />
                  </label>
                  <label htmlFor="elo">
                    <input type="radio" id="elo" name="payment" value="elo" />
                    <img src={ elo } alt="elo img" />
                  </label>
                </form>
              </div>
              <div className={ styles.purchase }>
                <button
                  type="button"
                  onClick={ this.redirectToPurchase }
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
