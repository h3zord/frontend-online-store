/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './components/CartButton';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import Loading from './components/Loading';
import styles from '../styles/Home.module.css';
import ProductListCard from './components/ProductList';
import Header from './components/Header';
import magnifier from '../images/magnifier.svg';
import text from '../images/text.svg';
import text2 from '../images/text2.svg';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      productSearch: false,
      productCategories: [],
      isLoading: false,
      searchInput: '',
      productList: [],
    };
  }

  componentDidMount() {
    this.getProductCategories();
  }

  getProductCategories = () => {
    this.setState({
      isLoading: true,
    }, async () => {
      const categoryList = await getCategories();
      this.setState({
        productCategories: categoryList,
        isLoading: false,
      });
    });
  }

  getCategoryBtns = (productCategories) => {
    const categoryBtns = productCategories.map(({ id, name }) => (
      <button
        key={ id }
        type="button"
        data-testid="category"
        id={ id }
        onClick={ this.getProductsListCategory }
      >
        {name}
      </button>
    ));
    return categoryBtns;
  }

  getProductsListCategory = async ({ target }) => {
    const productId = target.id;
    const productData = await getProductsFromCategoryAndQuery(productId);
    const productList = productData.results;
    this.setState({ productList, productSearch: true });
  }

  handleStateInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  getProductsListSearch = async () => {
    const { searchInput } = this.state;
    const productData = await getProductsFromCategoryAndQuery('categoryId', searchInput);
    const productList = productData.results;
    this.setState({ productList, productSearch: true });
  }

  render() {
    const {
      productSearch,
      searchInput,
      productList,
      isLoading,
      productCategories,
    } = this.state;
    const { history,
      updateCartAndQuantityItems,
      quantityProducts,
    } = this.props;

    const listProductCard = () => {
      if (!productList.length) {
        return (
          <span>
            <img src={ text2 } alt="text2 img" />
            Digite outro termo de pesquisa ou escolha uma categoria.
          </span>
        );
      }

      return (
        <div className={ styles.productContainer }>
          {
            productList.map((product) => (
              <ProductListCard
                productData={ product }
                updateCartAndQuantityItems={ updateCartAndQuantityItems }
                key={ product.id }
              />
            ))
          }
        </div>
      );
    };

    return (
      <div className="home-page">
        <Header />
        <div className={ styles.mainContainer }>
          <aside className={ styles.categoryList }>
            <p>Categorias</p>

            <hr />

            {
              isLoading ? <Loading /> : this.getCategoryBtns(productCategories)
            }
          </aside>

          <main>
            <div className={ styles.searchAndCart }>
              <input
                data-testid="query-input"
                type="search"
                placeholder="Digite aqui o que você procura"
                name="searchInput"
                value={ searchInput }
                onChange={ this.handleStateInput }
                id="search-input"
                className={ styles.searchInput }
              />

              <button
                data-testid="query-button"
                type="button"
                onClick={ this.getProductsListSearch }
                className={ styles.searchButton }
              >
                <img src={ magnifier } alt="magnifier" />
              </button>

              <CartButton
                history={ history }
                quantityProducts={ quantityProducts }
              />
            </div>
            <section className={ styles.searchedProducts }>
              {
                !productSearch
                  ? (
                    <span data-testid="home-initial-message">
                      <img src={ text } alt="text img" />
                      Digite algum termo de pesquisa ou escolha uma categoria.
                    </span>
                  )
                  : listProductCard()
              }
            </section>
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updateCartAndQuantityItems: PropTypes.func.isRequired,
  quantityProducts: PropTypes.number.isRequired,
};

export default Home;
