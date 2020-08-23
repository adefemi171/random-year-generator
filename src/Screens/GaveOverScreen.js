import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const GaveOverScreen = props => {
    return (
        <View style={styles.mainContainer}>
            <Text> Game Over! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GaveOverScreen;