import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../Constants/Colors'
import TextTitle from '../Components/TextTitle'

// Header constant for functional components
const Header = props => {
    return(
        <View style={styles.headerContainer}>
            <TextTitle>{props.title}</TextTitle>
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
});

export default Header;