// Libraries
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// Constants
import COLORS from '../../constants/colors';
import BackgroundCircle from '../reusable/BackgroundCircle';

const {width: screenWidth} = Dimensions.get('window');
const cardWidth = screenWidth / 2 - 36;

const Card = ({title, price, image, rating, bgcolor, isWishlisted}) => {
  return (
    <View style={styles.card}>
      <BackgroundCircle color={'#a00000'} />
      {/* Image on top of the circle in z axis and in bottom right of it in XY axes*/}
      <Text>Title</Text>
      <Text>Price</Text>
      <Text>Rating</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 8,
    margin: 16,
    backgroundColor: COLORS.primary100,
    shadowColor: COLORS.gray700,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    width: cardWidth,
    minHeight: 1.6 * cardWidth,
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
