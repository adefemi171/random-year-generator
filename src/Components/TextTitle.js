import React from 'react'
import { Text, StyleSheet } from 'react-native'


const TextTitle = props => <Text style={{...styles.container, ...props.style}}>{props.children}</Text>


const styles = StyleSheet.create({
    container: {
        fontFamily: 'open-sans-bold',
        color: 'black', //black
        fontSize: 20,
        marginVertical: 10
    }
});


export default TextTitle;