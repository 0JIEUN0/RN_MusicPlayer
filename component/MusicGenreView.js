import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView, Dimensions } from 'react-native';
import Genre from './Genre';
import { browseCategories } from '../spotify/Spotify'

function MusicGenreView ( props ) {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        browseCategories()
        .then(response => setCategories(response['categories']['items']))
        .then(console.log(categories))
    }, [])
    //console.log(categories.length)

    return (
        <SafeAreaView>
            <FlatList
                data={categories}
                renderItem={({item}) =>
                    <Genre item={item} />}
                horizontal={false}
                //Setting the number of column
                numColumns={2}
                key={categories.length}
                style={styles.container}>
            </FlatList>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        marginHorizontal: 3,
    },
});

export default MusicGenreView;