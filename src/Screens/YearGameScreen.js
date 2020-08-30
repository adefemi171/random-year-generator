import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import YearScreen from '../Components/YearContainer'
import Card from '../Components/Card'
import CustomButton from '../Components/CustomButton'


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

    const initialApprox = yearRandomGeneratBetween(1800, 2011, props.userChoice);

    const [currentApprox, setCurrentApprox] = useState(initialApprox);

    // const [rounds, setRounds] = useState(0);

    // State to save past year guess from user input
    const [pastApprox, setPastApprox] = useState([initialApprox]);

    // useRef allows to define a value which survives component re-rendering
    // This const are boundaries for initial year
    const currentLow = useRef(1800);
    const currentHigh = useRef(2011);
    
    // using object destructuring to destructure props
    const { userChoice, onGameOver} = props;

    // useEffect allows logic after every render cycle
    // check if the game is over
    useEffect(() => {
        if (currentApprox === userChoice){
            onGameOver(pastApprox.length);
        }
    }, [currentApprox, userChoice, onGameOver])


    // Function for the next year guess
    const nextApproxHandler = direction => {
        // validating if the year is higher or lower
        if ((direction === 'lower' && currentApprox < props.userChoice) || (direction === 'higher' && currentApprox > props.userChoice)){
            Alert.alert(
                'Nah!! Try Again!!', 
                'This is wrong...',
                [{text: 'Try Again!', style: 'cancel'}] 
            );
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentApprox;
        } else {
            currentLow.current = currentApprox + 1; //by adding 1 the new lower boundary in the yearRandomGeneratBetween is 1 higher than the currentApprox
        }
        const nextYear = yearRandomGeneratBetween(
            currentLow.current, 
            currentHigh.current, 
            currentApprox
        );
        setCurrentApprox(nextYear)
        // setRounds(curRounds => curRounds + 1)
        setPastApprox(curPastApprox => [nextYear, ...curPastApprox])
    };


    return(
        <View style={styles.mainContainer}>
            <Text> Your Year choice</Text>
            <YearScreen>{currentApprox}</YearScreen>
            <Card style={styles.choiceContainer}>
                <CustomButton onTouch={nextApproxHandler.bind(this, 'lower')}> 
                    <MaterialCommunityIcons name="less-than" size={24} color="black" />
                </CustomButton>
                <CustomButton onTouch={nextApproxHandler.bind(this, 'higher')}> 
                    <MaterialCommunityIcons name="greater-than" size={24} color="black" />
                </CustomButton>
            </Card>
            <ScrollView>
                {pastApprox.map(approx => (
                    <View key={approx}>
                        <Text>{approx}</Text>
                    </View>
                ))}
            </ScrollView>
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