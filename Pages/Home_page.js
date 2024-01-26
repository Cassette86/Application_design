//IMPORTATIONS
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import TitleHomePage from '../Components/Header/Title_home_page';
import SubTitleComponent from '../Components/Header/Subtitle_home_page';
import CardComponent from '../Components/Cards/Card';

//MAIN FUNCTION : 
export default function Home_page() {
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
  const HomeScreen = () => {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={{flexDirection:'column',gap: 30}}>
            <TitleHomePage/>
            <SubTitleComponent/>
            <View style={styles.row}>
              <CardComponent
                color="#FFC8B7"
                title="Apple Watch"
                subtitle="Series 7"
                price="799"
                image="./images/AppleWatch.png"
              />
              <CardComponent
                color="#FFEFE1"
                title="Galaxy Watch"
                subtitle="Series 4"
                price="599"
                image="AppleWatch"
              />
            </View>
                      <View style={styles.row}>
              <CardComponent
                color="#F0DEC5"
                title="Mi Watch"
                subtitle="All series"
                price="299"
                image="AppleWatch"
              />
              <CardComponent
                color="#FCF1F0"
                title="Amazfit Bip U"
                subtitle="Pro Series"
                price="199"
                image="AppleWatch"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  //RETURN FUNCTION :
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
      
    </>
  );
}

// STYLE FUNCTION :
const styles = StyleSheet.create({
    background : {
      backgroundColor: '#FCFCFF',
      flex : 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        left : 30,
        top : 120,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap : 40,
    },
  });