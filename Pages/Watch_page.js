//IMPORTATIONS
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import UpperWatchScreen from '../Components/Watch_page/Upper_Watch_page/UpperWatch_page';

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
            <UpperWatchScreen/>
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
        left : 0,
        top : 0,
        backgroundColor : '#FFC8B7',
    },
  });