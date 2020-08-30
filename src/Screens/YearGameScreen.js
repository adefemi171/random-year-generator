import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import YearScreen from '../Components/YearContainer'
import Card from '../Components/Card'
import CustomButton from '../Components/CustomButton'
import TextBody from '../Components/TextBody'


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

// To style and render the list for past guesses
const renderPastApproxItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <TextBody>{listLength - itemData.index}</TextBody>
        <TextBody>{itemData.item}</TextBody>
    </View>
)

const YearGameScreen = props =>{

    const initialApprox = yearRandomGeneratBetween(1800, 2011, props.userChoice);

    const [currentApprox, setCurrentApprox] = useState(initialApprox);

    // const [rounds, setRounds] = useState(0);

    // State to save past year guess from user input
    const [pastApprox, setPastApprox] = useState([initialApprox.toString()]);

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
        setPastApprox(curPastApprox => [nextYear.toString(), ...curPastApprox])
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
            <View style={styles.listContainer}>
                { /*<ScrollView contentContainerStyle={styles.contentList}>
                    {pastApprox.map((approx, index) => renderPastApproxItem(approx, pastApprox.length - index))}
                </ScrollView> */}
                <FlatList 
                    keyExtractor={(item) => item} 
                    data={pastApprox} 
                    renderItem={renderPastApproxItem.bind(this, pastApprox.length)}
                    contentContainerStyle={styles.contentList}
                />
            </View>
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
    },
    listContainer:{
        flex: 1,
        width: '60%'
    },
    contentList: {
        flexGrow: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem:{
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        width: '100%'
    }
})

export default YearGameScreen;