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

export const addProductInCart = (image, title, price, productId) => {
  const productsInCart = getCartitems();
  const alreadyInCart = productsInCart.find(({ id }) => id === productId);
  if (!alreadyInCart) {
    const productToAdd = {
      image,
      title,
      price,
      id: productId,
      quantity: 1,
    };
    addItem(productToAdd);
  } else {
    const newQuantity = alreadyInCart.quantity + 1;
    editItemQuantity(productId, newQuantity);
  }
};
