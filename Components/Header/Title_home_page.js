import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleComponent = () => {
    const Title_text = 'Find you suitable\nwatch now.';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Title_text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontFamily: 'r_bold',
    color: '#1b153d',
    letterSpacing: -0.24,
    lineHeight: 48,
  },
});

export default TitleComponent;