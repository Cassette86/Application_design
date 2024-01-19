import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardSubTitle = ({ subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
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
  subtitle: {
    fontFamily: 'regular',
    fontSize: 12,
    letterSpacing: -0.24,
  },
});

export default CardSubTitle;