//IMPORTATIONS
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Title_subtitle_price from '../Bottom_Watch_page/Title_subtitle_price_Watch_page';
import DescriptionScreen from '../Bottom_Watch_page/Description_Watch_page';

//MAIN FUNCTION :
export default function Upper_Watch_page() {
  //SCREEN FUNCTION :
  const UpperWatchScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.arrow}>
          <Image source={require('../../../assets/Arrow.png')} />
        </View>
        <View style={styles.watch}>
          <Image source={require('./Series_7.png')} />
        </View>
        <Title_subtitle_price />
        <DescriptionScreen />
      </View>
    );
  };

  //RETURN FUNCTION :
  return (
    <>
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
      left : 20,
      top : 60,
  },
  arrow : {
    width: 20, 
    height: 20, 
    left : 10, 
    top : 10,
    position: 'absolute'
  },
  watch : {
    width : 311,
    height : 311,
    left : 32,
    top : 26,
    resizeMode : 'cover',
  },
  titre_watch_page : {
    fontFamily: 'r_bold',
    fontSize: 20,
    color: '#1b153d',
    letterSpacing: -0.24,
  }
});