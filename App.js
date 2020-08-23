import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


import Header from './src/Components/Header'
import StartScreen from './src/Screens/StartScreen'
import YearGameScreen from './src/Screens/YearGameScreen'

export default function App() {
  const [userYear, setUserYear] = useState();

  const startGameHandler = (selectedYear) => {
    setUserYear(selectedYear);
  };

  // Get selected year from the StartScreen when start is press
  // It's then stored in the state of the app component using useState 
  let content = <StartScreen onStartGame={startGameHandler}/>

  if (userYear) {
    content = <YearGameScreen  userChoice={userYear}/>
  }
  return (
    <View style={styles.container}>
      <Header title={"Random Year Generator"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
