import React from 'react'
import { Text, StyleSheet } from 'react-native'


const TextBody = props => <Text style={styles.container}>{props.children}</Text>


const styles = StyleSheet.create({
    container: {
        fontFamily: 'open-sans-regular'
    }
});


export default TextBody;