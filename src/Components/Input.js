import React from 'react'
import {  TextInput, StyleSheet } from 'react-native'

import Colors from '../Constants/Colors'

// Input constant for functional components
const Input = props => {
    return(
       <TextInput {...props} style={{...styles.inputContainer, ...props.style}} />
    );
};


const styles = StyleSheet.create({
    inputContainer:{
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;