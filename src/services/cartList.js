const CART_ITEMS_KEY = 'cart_items';

if (!JSON.parse(localStorage.getItem(CART_ITEMS_KEY))) {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify([]));
}

const saveCartItems = (cartItems) => localStorage
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
