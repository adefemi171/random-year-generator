import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

// To load the font and prolong the screen until a certain task is complete
import { AppLoading } from 'expo' 


import Header from './src/Components/Header'
import StartScreen from './src/Screens/StartScreen'
import YearGameScreen from './src/Screens/YearGameScreen'
import GameOverScreen from './src/Screens/GaveOverScreen'

// To load font
const getFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  // setting the year the user choosed
  const [userYear, setUserYear] = useState();

  // numer of rounds it took to finish
  const [approxRounds, setApproxRounds] = useState(0);

  // managing state for the font to load
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    return (
      <AppLoading  
        startAsync={getFonts} 
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }


  // function to start a new game
  const coonfigNewGameHandler = () => {
    setApproxRounds(0);
    setUserYear(null);
  }

  const startGameHandler = (selectedYear) => {
    setUserYear(selectedYear);
  };

  // Set when the game is over
  const gameOverHandler = numOfRounds => {
    setApproxRounds(numOfRounds);
  }

  // Get selected year from the StartScreen when start is press
  // It's then stored in the state of the app component using useState 
  let content = <StartScreen onStartGame={startGameHandler}/>

  if (userYear && approxRounds <= 0) {
    content = (
      <YearGameScreen  userChoice={userYear} onGameOver={gameOverHandler}/>
    );
  } else if (approxRounds > 0){
    content = (
      <GameOverScreen 
        roundsYear={approxRounds} 
        userYear={userYear} 
        onRestart={coonfigNewGameHandler}
      />
    );
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
