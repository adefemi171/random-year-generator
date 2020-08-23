import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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


    return(
        <View style={styles.mainContainer}>
            <Text> Your Yeear choice</Text>
            <YearScreen>{currentApprox}</YearScreen>
            <Card style={styles.choiceContainer}>
                <Button title="LOWER" onPress={() => {}}/>
                <Button title="HIGHER" onPress={() => {}}/>
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