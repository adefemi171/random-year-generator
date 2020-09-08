import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

import Colors from '../Constants/Colors'
const CustomButton = props => {
    
    // Creating some touchable effect function
    let CustomButtonComponent = TouchableOpacity;

    // checking platform specification and android version for ripple effect support
    if  (Platform.OS === 'android' && Platform.Version >= 21) {
        CustomButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.customButtonContainer}>
            <CustomButtonComponent activeOpacity={0.9} onPress={props.onTouch}>
                <View style={styles.buttonContainer}>
                    <Text style={{...styles.buttonText, ...props.style}}>{props.children}</Text>
                </View>
            </CustomButtonComponent>
        </View>
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
    },
    customButtonContainer: {
        borderBottomStartRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden'
    }
})

export default CustomButton;