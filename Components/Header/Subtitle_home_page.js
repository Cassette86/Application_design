import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubTitleComponent = () => {
    const SubTitle_text = 'Smart watch';
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{SubTitle_text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'r_semibold',
    color: '#5b40ff',
    letterSpacing: 0,
    lineHeight: 24,
  },
});

export default SubTitleComponent;