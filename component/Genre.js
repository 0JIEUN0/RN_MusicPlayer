import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import ImageColors from 'react-native-image-colors'

function Genre(props) {
    const [imgColors, setImgColors] = useState({})

    useEffect(() => {
        async function getImageColors(URL) {
            const result = await ImageColors.getColors(URL, {
                fallback: '#228B22',
                cache: true,
            });
            setImgColors(result);
        };
        getImageColors(props.item.img)
    }, [props.item.img])
    console.log(imgColors['average']);
    
    return (
        <View style={{
            height: 100,
            margin: 10,
            width: (Dimensions.get("window").width-20) / 2,
            backgroundColor: imgColors['average']
        }}>

            <Image
                source={{ uri: props.item.img }}
                style={{ height:100, width: 200, resizeMode: 'contain' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        margin: 10,
        width: (Dimensions.get("window").width-20) / 2,
    },
});

export default Genre;