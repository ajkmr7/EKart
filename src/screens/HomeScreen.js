// Libraries
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

// Network
import {fetchProducts} from '../api/product-service';

// Constants
import COLORS from '../constants/colors';

// Components
import ProductList from '../components/product/ProductList';
import Header from '../components/reusable/Header';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setIsFetching(false);
      } catch (error) {
        {
          /** TODO: Handle Error **/
        }
        console.log(error);
      }
    }
    getProducts();
  }, [isFetching]);

  if (isFetching) {
    return <View>{/** TODO: Show Loader **/}</View>;
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}>Our Product</Header>
      <ProductList products={products} cardStyle={styles.card}/>
    </View>
  );
};

export default HomeScreen;

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
  }
});
