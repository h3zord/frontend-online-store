import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './Components/CartButton';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import Loading from './Components/Loading';
import '../Styles/homeStyle.css';
import ProductListCard from './Components/ProductList';

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
      // quantityProducts
    } = this.state;
    const { history,
      updateCartAndQuantityItems,
      quantityProducts,
    } = this.props;

    const listProductCard = (
      <div className="product-container">
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

    return (
      <div className="home-page">
        <aside className="category-list">
          {
            isLoading ? <Loading /> : this.getCategoryBtns(productCategories)
          }
        </aside>

        <main>
          <div className="search-and-cart">
            <input
              data-testid="query-input"
              type="search"
              placeholder="Digite aqui o que você procura"
              name="searchInput"
              value={ searchInput }
              onChange={ this.handleStateInput }
              id="search-input"
            />

            <button
              data-testid="query-button"
              type="button"
              onClick={ this.getProductsListSearch }
            >
              Buscar
            </button>

            <CartButton
              history={ history }
              quantityProducts={ quantityProducts }
            />
          </div>
          <section className="searched-products">
            {
              !productSearch
                ? (
                  <h1 data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </h1>
                )
                : listProductCard
            }
          </section>
        </main>
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
