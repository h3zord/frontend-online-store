import PropTypes from 'prop-types';
import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { getProductFromProductId } from '../services/api';
import { addEvaluation, getEvaluations } from '../services/getEvaluation';
import '../Styles/homeStyle.css';
import CartButton from './Components/CartButton';

class MoreInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      emailInput: '',
      textAreaInput: '',
      rateButton: 0,
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
      freeShipping } = this.state;
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
        >
          {i}
        </button>,
      );
    }

    return (
      <div className="info-container">
        <CartButton history={ history } quantityProducts={ quantityProducts } />
        <div>
          <img src={ productInfo.thumbnail } alt="imagem ilustrativa do produto" />
        </div>
        <div>
          <p data-testid="product-detail-name">{productInfo.title}</p>
          <p>{productInfo.id}</p>
          <p>{`R$ ${this.adjustPrice(productInfo.price)}`}</p>
          {
            freeShipping && (
              <div data-testid="free-shipping">
                <FaShippingFast />
                <p>Frete Grátis</p>
              </div>
            )
          }
          <p>{productInfo.warranty}</p>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => updateCartAndQuantityItems(productInfo) }
        >
          Adicionar ao Carrinho
        </button>
        <form>
          <h1>Avaliação</h1>
          <input
            onChange={ this.handleChange }
            type="email"
            name="emailInput"
            value={ emailInput }
            data-testid="product-detail-email"
            placeholder="Digite seu e-mail"
          />
          <div>
            {rateButtons}
          </div>
          <textarea
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
            name="textAreaInput"
            value={ textAreaInput }
            placeholder="Adicione seus comentários sobre o produto (opcional)"
          />
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.saveEvaluationInputs }
          >
            Avaliar
          </button>
        </form>
        <div>
          {
            evaluationList.map((element, index) => (
              <div key={ index }>
                <p>{ element.emailInput }</p>
                <p>{ element.textAreaInput }</p>
                <p>{`Nota: ${element.rateButton}`}</p>
              </div>
            ))
          }
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
