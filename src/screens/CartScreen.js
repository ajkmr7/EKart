// Libraries
import {View, Text, StyleSheet} from 'react-native';

// Constants
import COLORS from '../constants/colors';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary200,
  },
});
