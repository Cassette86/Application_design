//IMPORTATIONS
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Arrow_Component from './Back_arrow';

//MAIN FUNCTION :
export default function Upper_Watch_page() {
  //SCREEN FUNCTION :
  const UpperWatchScreen = () => {
    return (
        <View style={styles.container}>
            <Arrow_Component/>
        </View>
    );
  };

  //RETURN FUNCTION :
  return (
    <>
      <StatusBar style="auto" />
      <UpperWatchScreen />
      
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
        backgroundColor : '#FCFCFF',
    },
  });