// Libraries
import {createContext, useState} from 'react';

export const CartContext = createContext({
  products: [],
  addToCart: product => {},
  removeFromCart: product => {},
});

const CartContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = product => {
    setCartProducts(currentCartProducts => [...currentCartProducts, product]);
  };

  const removeFromCart = product => {
    setCartProducts(currentCartProducts =>
      currentCartProducts.filter(
        currentCartProduct => currentCartProduct.id !== product.id,
      ),
    );
  };

  const value = {
    products: cartProducts,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
