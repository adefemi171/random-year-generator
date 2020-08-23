import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Colors from '../Constants/Colors'

const YearContainer = props =>{
    return(
        <View style={styles.container}>
            <Text style={styles.yearContainer}>{props.children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    yearContainer: {
        color: Colors.accent,
        fontSize: 22
    }
})
export default YearContainer;