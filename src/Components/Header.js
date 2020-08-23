import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../Constants/Colors'

// Header constant for functional components
const Header = props => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary, // #f7287b
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: 'black', //black
        fontSize: 18
    }
});

export default Header;