import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import YearScreen from '../Components/YearContainer'
import Card from '../Components/Card'


// Functon to generate random year between a min and a max year and
// also allows exclusins of certain years
const yearRandomGeneratBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndYr = Math.floor(Math.random() * (max-min)) + min;
    // performing recursion
    if (rndYr === exclude){
        return yearRandomGeneratBetween(min, max, exclude);
    } else {
        return rndYr;
    }
}

const YearGameScreen = props =>{
    const [currentApprox, setCurrentApprox] = useState(
        yearRandomGeneratBetween(1800, 2011, props.userChoice)
    );
    // useRef allows to define a value which survives component re-rendering
    // This const are boundaries for initial year
    const currentLow = useRef(1800);
    const currentHigh = useRef(2011);


    // Function for the next year guess
    const nextApproxHandler = direction => {
        // validating if the year is higher or lower
        if ((direction === 'lower' && currentApprox < props.userChoice) || (direction === 'higher' && currentApprox > props.userChoice)){
            Alert.alert(
                '', 
                'This is wrong...',
                [{text: 'Try Again!', style: 'cancel'}] 
            );
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentApprox;
        } else {
            currentLow.current = currentApprox;
        }
        const nextYear = yearRandomGeneratBetween(currentLow.current, currentHigh.current, currentApprox);
        setCurrentApprox(nextYear)
    }


    return(
        <View style={styles.mainContainer}>
            <Text> Your Year choice</Text>
            <YearScreen>{currentApprox}</YearScreen>
            <Card style={styles.choiceContainer}>
                <Button 
                    title="LOWER" 
                    onPress={nextApproxHandler.bind(this, 'lower')}
                />
                <Button 
                    title="HIGHER" 
                    onPress={nextApproxHandler.bind(this, 'higher')}
                />
            </Card>
        </View>
    )

}


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    choiceContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default YearGameScreen;