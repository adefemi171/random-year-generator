import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


import Header from './src/Components/Header'
import StartScreen from './src/Screens/StartScreen'
import YearGameScreen from './src/Screens/YearGameScreen'
import GameOverScreen from './src/Screens/GaveOverScreen'



export default function App() {
  // setting the year the user choosed
  const [userYear, setUserYear] = useState();

  // numer of rounds it took to finish
  const [approxRounds, setApproxRounds] = useState(0);

  const startGameHandler = (selectedYear) => {
    setUserYear(selectedYear);
    setApproxRounds(0);
  };

  // Set when the game is over
  const gameOverHandler = numOfRounds => {
    setApproxRounds(numOfRounds);
  }

  // Get selected year from the StartScreen when start is press
  // It's then stored in the state of the app component using useState 
  let content = <StartScreen onStartGame={startGameHandler}/>

  if (userYear && approxRounds <= 0) {
    content = <YearGameScreen  userChoice={userYear} onGameOver={gameOverHandler}/>
  } else if (approxRounds > 0){
    content = <GameOverScreen />
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
