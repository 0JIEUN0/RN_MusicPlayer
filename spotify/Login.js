import React from 'react';
import { Text, View, StyleSheet, Image, Linking, Button } from 'react-native';
//import { Button, Icon, Thumbnail } from 'native-base';
import { accessUrl } from "./Spotify";

function Login() {
    return (
        <View>
            <Image 
                source={{ uri: "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" }} 
                style={{ height: 100, width: 300, margin: 20 }} />

            <Button style={{ margin:20, fontSize: 10}}
                onPress={() => Linking.openURL(accessUrl)}
                title="login">

            </Button>
        </View>
    )
}

export default Login;