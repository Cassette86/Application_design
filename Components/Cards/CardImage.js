import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CardImage = ({ color, image }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.frame_color, { backgroundColor: color }]}>
        <Image style={styles.image} source={require('./images/AppleWatch.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      top : 8,
      left : 8,
    },
  frame_color: {
    width: 141,
    height: 101,
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    flex: 1,
    width: 121,
    height: 101,
    alignSelf: 'center'
  },
});

export default CardImage;