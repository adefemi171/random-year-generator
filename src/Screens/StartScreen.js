import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../Components/Card';
import Colors from '../Constants/Colors'
import Input from '../Components/Input'

// StartScreen constant for functional components
const StartScreen = props => {

    // To validate user input
    const [enteredYear, setEnteredYear] = useState('');
    
    // A state to check and confirm user year
    const [confirmed, setConfirmed] = useState(false);

    // A state to save the entered year
    const [selectedYear, setSelectedYear] = useState();

    const yearInputHandler = inputText => {
        // validating input using regex to allow only number values
        setEnteredYear(inputText.replace(/[^0-9]/g, ''))
    };

    // Function to reset the entered year
    const resetInputHandler = () => {
        setEnteredYear('');
        setConfirmed(false);
    };

    // Function to reset the entered year
    const confirmInputHandler = () => {
        const chosenYear = parseInt(enteredYear);
        if (chosenYear === NaN || chosenYear <= 0 || chosenYear > 2010) {
            return;
        }
        setConfirmed(true);
        setSelectedYear(chosenYear);
        setEnteredYear('');
    };

    // checking for user confirmed output
    let confirmedOutput;

    if (confirmed) {
    confirmedOutput = <Text>Chosen Year: { selectedYear}</Text>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.startContainer}>
                <Text style={styles.startTitle}> Generate your DOB </Text>
                <Card style={styles.inputContainer}>
                    <Text>Choose a Value</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        keyboardType="number-pad" 
                        maxLength={4}
                        onChangeTExt={yearInputHandler}
                        value={enteredYear}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.eachButton}>
                            <Button 
                                title="Reset" 
                                onPress={resetInputHandler} 
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.eachButton}>
                            <Button 
                                title="Confirm" 
                                onPress={confirmInputHandler} 
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    startContainer:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    startTitle:{
        color: 'black', //black
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'        
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    eachButton:{
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartScreen;