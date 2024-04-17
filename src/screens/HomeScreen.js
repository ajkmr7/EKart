// Libraries
import {View, Text, StyleSheet} from 'react-native';

// Constants
import COLORS from '../constants/colors';
import Card from '../components/product/Card';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Card />
        <Card />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Card />
        <Card />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary200,
  },
});
