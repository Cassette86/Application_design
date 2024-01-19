import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
  title: {
    fontFamily: 'r_semibold',
    fontSize: 16,
    letterSpacing: -0.24,
    paddingTop : 8,
  },
});

export default CardTitle;