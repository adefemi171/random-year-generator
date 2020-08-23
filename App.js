import React from 'react';
import { StyleSheet, View } from 'react-native';


import Header from './src/Components/Header'
import StartScreen from './src/Screens/StartScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Random DOB Generator"} />
      <StartScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
