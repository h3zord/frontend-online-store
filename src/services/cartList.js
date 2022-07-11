const CART_ITEMS_KEY = 'cart_items';

if (!JSON.parse(localStorage.getItem(CART_ITEMS_KEY))) {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify([]));
}

export const saveCartItems = (cartItems) => localStorage
  .setItem(CART_ITEMS_KEY, JSON.stringify(cartItems));

export const getCartitems = () => JSON.parse(localStorage.getItem(CART_ITEMS_KEY));

export const addItem = (item) => {
  if (item) {
    const cartItems = getCartitems();
    saveCartItems([...cartItems, item]);
  }
};

export const editItemQuantity = (itemId, newQuantity) => {
  const cartItems = getCartitems();
  cartItems.forEach((item, index) => {
    if (item.id === itemId) {
      cartItems[index].quantity = newQuantity;
      saveCartItems(cartItems);
    }
  });
};

export const addProductInCart = (product) => {
  const productsInCart = getCartitems();
  const alreadyInCart = productsInCart.find(({ id }) => id === product.id);
  if (!alreadyInCart) {
    const productToAdd = {
      image: product.thumbnail,
      title: product.title,
      price: product.price,
      id: product.id,
      quantity: 1,
      maxQuantity: product.available_quantity,
    };
    addItem(productToAdd);
  } else if (alreadyInCart.quantity < alreadyInCart.maxQuantity) {
    const newQuantity = alreadyInCart.quantity + 1;
    editItemQuantity(product.id, newQuantity);
  }
};
