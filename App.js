import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home_page from './Pages/Home_page';
import Watch_page from './Pages/Watch_page';

export default function App() {
  return (
    <View style={styles.container}>
      <Watch_page />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});