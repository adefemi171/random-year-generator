import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const GaveOverScreen = props => {
    return (
        <View style={styles.mainContainer}>
            <Text> Game Over! </Text>
            <Text> Number of rounds: {props.roundsYear}</Text>
            <Text> Number was: {props.userYear}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GaveOverScreen;