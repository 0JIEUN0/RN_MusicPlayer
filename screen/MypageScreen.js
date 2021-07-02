import React from 'react';
import { View, Text, StyleSheet, useEffect } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "../spotify/Spotify";
import Login from "../spotify/Login"

const spotify = new SpotifyWebApi();

function MypageScreen() {
  const { colors } = useTheme();
  //const [{ token }, dispatch] = useStateValue();

  //useEffect(() => {
    // Set token
    //const hash = getTokenFromResponse();
    //window.location.hash = "";
    //let _token = hash.access_token;
  //})

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyPage Screen</Text>
      <Login />
      {/*{!token && <Login />}
      {token && <Text>인증 성공</Text>} */}
    </View>
  );
}

export default MypageScreen;