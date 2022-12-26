import PropTypes from 'prop-types';
import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { getProductFromProductId } from '../services/api';
import { addEvaluation, getEvaluations } from '../services/getEvaluation';
import BackButton from './components/BackButton';
import CartButton from './components/CartButton';
import Header from './components/Header';
import styles from '../styles/MoreInfo.module.css';
import star from '../images/star.svg';

class MoreInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      emailInput: '',
      rateButton: 0,
      textAreaInput: '',
      evaluationList: [],
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.getProductInfo();
    this.getEvaluationList();
  }

  getProductInfo = async () => {
    const { match: { params: { id } } } = this.props;
    const productData = await getProductFromProductId(id);
    this.setState({
      productInfo: productData,
      freeShipping: productData.shipping.free_shipping,
    });
  }

  handleRateChange = (rate) => {
    this.setState({ rateButton: rate });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveEvaluationInputs = (event) => {
    event.preventDefault();
    const { emailInput, textAreaInput, rateButton } = this.state;
    const { match: { params: { id } } } = this.props;
    const evaluationData = {
      emailInput,
      textAreaInput,
      rateButton,
      evaluationId: id,
    };
    addEvaluation(evaluationData);
    this.setState({
      emailInput: '',
      textAreaInput: '',
      rateButton: 0,
    });
    this.getEvaluationList();
  }

  getEvaluationList = () => {
    const { match: { params: { id } } } = this.props;
    const evaluationList = getEvaluations()
      .filter(({ evaluationId }) => evaluationId === id);
    this.setState({ evaluationList });
  }

  adjustPrice = (price) => {
    if (price) return price.toFixed(2);
  }

  render() {
    const {
      productInfo,
      emailInput,
      textAreaInput,
      evaluationList,
      freeShipping,
      rateButton } = this.state;
    const { history, quantityProducts, updateCartAndQuantityItems } = this.props;

    const rateButtons = [];
    const maxRate = 5;
    for (let i = 1; i <= maxRate; i += 1) {
      rateButtons.push(
        <button
          onClick={ () => this.handleRateChange(i) }
          data-testid={ `${i}-rating` }
          type="button"
          key={ i }
          className={ styles.star }
        >
          <img src={ star } alt="star img" />
        </button>,
      );
    }

    return (
      <div className={ styles.infoPage }>
        <Header />
        <div className={ styles.infoTitle }>
          <BackButton history={ history } />
          <CartButton history={ history } quantityProducts={ quantityProducts } />
        </div>
        <div className={ styles.infoContainer }>
          <div className={ styles.infoContent }>
            <div className={ styles.infoProductCard }>
              <img src={ productInfo.thumbnail } alt="imagem ilustrativa do produto" />
              <p data-testid="product-detail-name">{productInfo.title}</p>
              <p>{productInfo.id}</p>
              <p>{productInfo.warranty}</p>
              {
                freeShipping && (
                  <div data-testid="free-shipping">
                    <FaShippingFast />
                    <p>Frete Grátis</p>
                  </div>
                )
              }
              <p>{`R$ ${this.adjustPrice(productInfo.price)}`}</p>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => updateCartAndQuantityItems(productInfo) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
            <form className={ styles.infoForm }>
              <h1>Avaliação</h1>
              <input
                onChange={ this.handleChange }
                type="email"
                name="emailInput"
                value={ emailInput }
                data-testid="product-detail-email"
                placeholder="Digite seu e-mail"
              />
              <textarea
                onChange={ this.handleChange }
                data-testid="product-detail-evaluation"
                name="textAreaInput"
                value={ textAreaInput }
                placeholder="Adicione seus comentários sobre o produto (opcional)"
              />
              <div>
                {rateButtons}
              </div>
              <button
                type="submit"
                data-testid="submit-review-btn"
                className={ styles.rating }
                onClick={ this.saveEvaluationInputs }
                disabled={ !(emailInput.length && rateButton) }
              >
                Avaliar
              </button>
            </form>
          </div>
          <div className={ styles.infoComments }>
            <p className={ styles.commentTitle }>Comentários</p>
            {
              evaluationList.map((element, index) => (
                <div key={ index } className={ styles.comments }>
                  <p>{ element.emailInput }</p>
                  <p>{`Nota: ${element.rateButton}`}</p>
                  <p className={ styles.textComent }>{ element.textAreaInput }</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

MoreInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

MoreInfo.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  quantityProducts: PropTypes.number.isRequired,
  updateCartAndQuantityItems: PropTypes.func.isRequired,
};

export default MoreInfo;
