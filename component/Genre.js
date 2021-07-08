import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { useTheme } from '@react-navigation/native';

function Genre(props) {
    const { colors } = useTheme();
    const [imgColors, setImgColors] = useState({})

    useEffect(() => {
        async function getImageColors(URL) {
            await ImageColors.getColors(URL, {
                fallback: '#1D8954',
                cache: true,
            })
            .then(result => setImgColors(result))
        }
        getImageColors(props.item.icons[0].url)
    }, [props.item.img])
    //console.log(imgColors);
    //console.log(props.item)
    
    return (
        <View style={{
            ...styles.container,
            backgroundColor: imgColors['average'],
        }}>
            <Image
                source={{ uri: props.item.icons[0].url }}
                style={ styles.rotatedImage } />
            <Text style={ {...styles.titleText, color: colors.text } }>{props.item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        margin: 5,
        width: (Dimensions.get("window").width-20) / 2,
        position: 'relative',
        borderRadius: 15,
    },
    titleText: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
    rotatedImage: {
        height: 80, 
        width: 80, 
        resizeMode: 'contain', 
        position: 'absolute',
        right: 0,
        bottom: 10, 
        transform: [{ rotate: '30deg' }],
    }
});

export default Genre;