import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'


import TextBody from '../Components/TextBody'
import TextTitle from '../Components/TextTitle'
import CustomButton from '../Components/CustomButton'
import Colors from '../Constants/Colors'


const GaveOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <TextTitle> Game Over! </TextTitle>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../../assets/img/summit.jpeg')}  // passing in local image
                        // source={{
                        //     uri: 'https://unsplash.com/photos/rkNLoQ0QOPY'
                        // }} // loading image from web
                        style={styles.image}
                        resizeMode="cover" 
                    />
                </View>
                <View style={styles.textContainer}>
                    <TextBody> Number of rounds: 
                        <Text style={styles.textHighlight}> {props.roundsYear} </Text>, 
                        Year was: <Text style={styles.textHighlight}>{props.userYear}</Text>.
                    </TextBody>
                </View>
                <CustomButton onTouch={props.onRestart}>
                    New Game
                </CustomButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer:{
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2, // borderRadius shoul be half of the width and height
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 10
    },
    image:{
        width: '100%',
        height: '100%'
    },
    textHighlight:{
        color: Colors.primary
    },
    textContainer:{
        margin: 20
    },
})

export default GaveOverScreen;