// Libraries
import {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

// Constants
import COLORS from '../constants/colors';

// Components
import ProductList from '../components/home/ProductList';
import Header from '../components/reusable/Header';

// App-Wide State Management
import {WishlistContext} from '../store/wishlist-context';

const WishlistScreen = () => {
  const wishlistContext = useContext(WishlistContext);

  let content = <View>{/** TODO: Fallback Text **/}</View>;

  const wishlistedProducts = wishlistContext.products;

  if (wishlistedProducts.length > 0) {
    content = (
      <View style={styles.container}>
        <ProductList products={wishlistedProducts} cardStyle={styles.card} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}>Wishlist</Header>
      {content}
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary200,
  },
  header: {
    margin: 16,
  },
  card: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});
