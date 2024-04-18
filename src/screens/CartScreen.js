// Libraries
import {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

// Constants
import COLORS from '../constants/colors';

// Components
import ProductList from '../components/product/ProductList';
import Header from '../components/reusable/Header';

// App-Wide State Management
import {CartContext} from '../store/cart-context';

const CartScreen = () => {
  const cartContext = useContext(CartContext);

  let content = <View>{/** TODO: Fallback Text **/}</View>;

  const cartProducts = cartContext.products;

  if (cartProducts.length > 0) {
    content = (
      <View style={styles.container}>
        <ProductList products={cartProducts} cardStyle={styles.card} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}>My Cart</Header>
      {content}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary200,
    marginBottom: 92
  },
  header: {
    margin: 16,
  },
  card: {
    margin: 16,
  },
});
