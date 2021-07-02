import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function SearchScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Search Screen</Text>
      </View>
    );
}
export default SearchScreen;