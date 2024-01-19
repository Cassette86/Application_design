//IMPORTATIONS
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

//MAIN FUNCTION : 
export default function Watch_page() {
  //FONTS LOADING :
  const [fontsLoaded] = useFonts({
    regular: require('../assets/fonts/regular.ttf'),
    r_bold: require('../assets/fonts/bold.ttf'),
    r_semibold: require('../assets/fonts/semibold.ttf'),
    poppins: require('../assets/fonts/Poppins-Medium.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  //SCREEN FUNCTION :
  const WatchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>test du jour</Text>
        </View>
    );
  };

  //RETURN FUNCTION :
  return (
    <>
      <StatusBar style="auto" />
      <WatchScreen />
      
    </>
  );
}

// STYLE FUNCTION :
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        left : 30,
        top : 120,
        color : '#FCFCFF',
    },
  });