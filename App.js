import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreens from './screens/SplashScreens';
import HomeScreens from './screens/HomeScreens';

export default function App() {
  return (
  //  <SplashScreens/>
   <HomeScreens/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
