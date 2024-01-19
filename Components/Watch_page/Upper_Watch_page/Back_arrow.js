//IMPORTATIONS
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

//MAIN FUNCTION :
export default function Back_arrow() {
  //SCREEN FUNCTION :
  const Arrow_Component = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Arrow.png')} style={{width: 20, height: 20, left : 10, top : 10}}/>
        </View>
    );
  };

  //RETURN FUNCTION :
  return (
    <>
      <StatusBar style="auto" />
      <Arrow_Component />
      
    </>
  );
}

// STYLE FUNCTION : 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        left : 20,
        top : 60,
    },
  });