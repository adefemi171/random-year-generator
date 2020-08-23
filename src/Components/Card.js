import React from 'react'
import { View, StyleSheet } from 'react-native'


const Card = props => {
    return(
        <View style={{...styles.cardContainer, ...props.style}}>{props.children}</View>
    );
};


const styles = StyleSheet.create({
    cardContainer:{
        shadowColor: 'black',
        shadowOffset:{
            width: 0, 
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 9, // only works on android
        backgroundColor: 'white',
        padding: 18,
        borderBottomLeftRadius: 10
    }
});

export default Card;