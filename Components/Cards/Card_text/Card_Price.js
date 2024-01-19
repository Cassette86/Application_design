import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardPrice = ({ price }) => {
    const dolar_price = '$'+price;
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{dolar_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: 8,
    left: 8,
  },
  price: {
    fontFamily: 'poppins',
    fontSize: 16,
    letterSpacing: -0.24,
    color :'#5b40ff',
    paddingTop : 12,
  },
});

export default CardPrice;