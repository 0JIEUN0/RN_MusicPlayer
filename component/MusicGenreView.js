import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView, Dimensions } from 'react-native';
import Genre from './Genre';
import { albums } from '../tempdata';

function MusicGenreView ( props ) {
    return (
        <SafeAreaView>
            <FlatList
                data={albums}
                renderItem={({item}) =>
                    <Genre item={item} />}
                horizontal={false}
                //Setting the number of column
                numColumns={2}
                key={albums.length}
                style={styles.container}>
            </FlatList>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        top: -200,
        position: 'absolute',
    },
});

export default MusicGenreView;