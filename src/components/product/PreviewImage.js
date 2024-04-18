// Libraries
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

// Constants
import COLORS from '../../constants/colors';
import BACKDROPCOLORS from '../../constants/backdrop-colors';

const getRandomBackdropColor = () => {
  const randomIndex = Math.floor(Math.random() * BACKDROPCOLORS.length);
  return BACKDROPCOLORS[randomIndex];
};

const PreviewImage = ({imageUrl}) => {
  const backdropColor = getRandomBackdropColor();
  return (
    <View style={[styles.outerCircle, {borderColor: backdropColor}]}>
      <View style={[styles.innerCircle, {borderColor: backdropColor}]}></View>
      {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
    </View>
  );
};

export default PreviewImage;

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
  image: {
    position: 'absolute',
    bottom: -10,
    right: -5,
    zIndex: 1,
    width: 90,
    height: 90,
  },
});
