import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const BackgroundCircle = ({ color }) => {
  return (
    <View style={[styles.outerCircle, { borderColor: color }]}>
      <View style={[styles.innerCircle, { borderColor: color }]}></View>
    </View>
  );
};

export default BackgroundCircle;

const styles = StyleSheet.create({
  outerCircle: {
    height: 130,
    width: 130,
    borderRadius: 65,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary100,
  },
  innerCircle: {
    borderWidth: 55,
    borderRadius: 55,
    height: 110,
    width: 110,
  },
});
