// IMPORTATIONS :
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// MAIN FUNCTION :
const Title_subtitle_price = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container_title_subtitle}>
              <Text style={styles.titre_watch_page}>Apple Watch Series 7</Text>
              <Text style={styles.sous_titre_watch_page}>(With solo loop)</Text>
            </View>
            <Text style={styles.price_watch_page}>$799</Text>
        </View>
      );
};

// RETURN FUNCTION :
export default function App() {
  return (
    <>
      <Title_subtitle_price />
    </>
  );
}

// STYLE FUNCTION :
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 40,
    gap : 110,
  },
  titre_watch_page: {
    fontFamily: 'r_bold',
    fontSize: 20,
    color: '#1b153d',
    letterSpacing: -0.24,
  },
    sous_titre_watch_page: {
        fontFamily: 'r_semibold',
        fontSize: 12,
        color: '#9095a6',
        letterSpacing: -0.24,
    },
    price_watch_page: {
        fontFamily: 'poppins',
        fontSize: 24,
        color: '#5b40ff',
        letterSpacing: -0.24,
    },
    container_title_subtitle : {
        gap : 8,
    }
});