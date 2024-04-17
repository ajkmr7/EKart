// Libraries
import {View, Text, StyleSheet} from 'react-native';

// Constants
import COLORS from '../constants/colors';

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wishlist Screen</Text>
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary200,
  },
});