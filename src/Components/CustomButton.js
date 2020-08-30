import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../Constants/Colors'
const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={props.onTouch}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};



const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderBottomStartRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20
       
    },
    buttonText:{
        color: 'black',
        fontFamily: 'open-sans-regular',
        fontSize: 16
    }
})

export default CustomButton;