import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import Colors from '../Constants/Colors'
import TextTitle from '../Components/TextTitle'

// Header constant for functional components
const Header = props => {
    return(
        <View 
            style={{
                ...styles.headerContainer, 
                ...Platform.select({
                    ios: styles.headerIOS, 
                    android: styles.headerAndroid
                })
            }}
        >
            <TextTitle style={styles.title}>{props.title}</TextTitle>
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white', // #f7287b
        // borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        // borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth:  1
    },
    headerAndroid: {
        backgroundColor: Colors.primary, // #f7287b
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
});

export default Header;