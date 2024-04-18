// Libraries
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

// Components
import PreviewImage from './PreviewImage';
import Title from '../reusable/Title';
import Price from '../reusable/Price';

const {width: screenWidth} = Dimensions.get('window');
const cardWidth = screenWidth / 2 - 36;

const Card = ({title, price, imageUrl, rating, style}) => {
  return (
    <View style={[styles.card, style]}>
      <PreviewImage imageUrl={imageUrl} />
      <Title style={styles.title}>{title}</Title>
      <Price style={styles.price} amount={price.toFixed(2)} type={'primary'} />
      <Text>{rating.rate}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
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
  title: {
    marginTop: 16,
    marginHorizontal: 8,
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    margin: 4,
  },
});
