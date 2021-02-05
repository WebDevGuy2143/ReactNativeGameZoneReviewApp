import React, {useState} from 'react';
import Home from './screens/home';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
  });


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);


  if(fontsLoaded){
    return (
      <Home />
    );
  } else {
    return (
    <AppLoading
     startAsync={getFonts}
     onFinish={()=> setFontsLoaded(true)} 
     onError={() => console.log('error')}
    />
    )
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});