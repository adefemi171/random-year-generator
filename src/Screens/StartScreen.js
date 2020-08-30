import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert 
} from 'react-native';

import Card from '../Components/Card';
import Colors from '../Constants/Colors'
import Input from '../Components/Input'
import YearContainer from '../Components/YearContainer'
import TextBody from '../Components/TextBody'
import TextTitle from '../Components/TextTitle'

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
        if (isNaN(chosenYear)|| chosenYear <= 1799 || chosenYear > 2010) {
            Alert.alert(
                'Invalid Year!', 
                'Year has to be between 1800 and 2010.', 
                [{text:'Okay', style:'destructive', onPress:resetInputHandler}]
            );
            return;
        }
        setConfirmed(true);
        setSelectedYear(chosenYear);
        setEnteredYear('');
        Keyboard.dismiss();
    };

    // checking for user confirmed output
    let confirmedOutput;

    if (confirmed) {
    confirmedOutput = 
        <Card style={styles.cardSumContainer}>
            <TextBody>The Year You Selected</TextBody>
            <YearContainer>
                {selectedYear}
            </YearContainer>
            <Button title="START"  onPress={() => props.onStartGame(selectedYear)}/>
        </Card>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.startContainer}>
                <TextTitle> Generate Year </TextTitle>
                <Card style={styles.inputContainer}>
                    <Text style={styles.startGameText}>Enter a Starting Year of choice</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        keyboardType="number-pad" 
                        maxLength={4}
                        onChangeText={yearInputHandler}
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
    startGameText:{
        color: 'grey',
        fontSize: 15,
        marginVertical: 10,
        fontFamily: 'open-sans-regular'
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
    },
    cardSumContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartScreen;