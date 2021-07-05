import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { getAccessTokenByClientCredentialsFlow } from './spotify/Spotify'

import HomeScreen from './screen/HomeScreen'
import SearchScreen from './screen/SearchScreen'
import NoticeScreen from './screen/NoticeScreen'
import MypageScreen from './screen/MypageScreen'

const Tab = createBottomTabNavigator();
const DarkTheme = {
  //...DefaultTheme,
  dark: true,
  colors: {
    primary:  'rgb(30, 215, 96)', // : Spotify Main Color [Green]
    text: 'rgb(255, 255, 255)', // : Spotify Main Color [White]
    background: 'rgb(25, 20, 20)', // : Spotify Main Color [Black]
    card: 'rgb(25, 20, 20)',
    border: 'rgb(25, 20, 20)',
    notification: 'rgb(255, 69, 58)',
  },
};

function BottomTab() {
  useEffect(() => {
    //getAccessTokenByClientCredentialsFlow();
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator tabBarOptions={{
        //activeTintColor: '#ffffff',
        //inactiveTintColor: '#888888',
        //activeBackgroundColor: '#ffffff',
        inactiveBackgroundColor: 'rgb(40, 40, 40)',
            style: {
                  backgroundColor: 'rgb(40, 40, 40)',
                  paddingBottom: 0,
            }
    }}>
        <Tab.Screen name="Home" component={HomeScreen} theme={DarkTheme}
          options={{
            tabBarLabel: "홈",
            tabBarIcon:({color})=>(  
              <Icon name="home" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Search" component={SearchScreen} theme={DarkTheme}
          options={{
            tabBarLabel: "검색하기",
            tabBarIcon:({color})=>(  
              <Icon name="search" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Notice" component={NoticeScreen} theme={DarkTheme}
          options={{
            tabBarLabel: "내 라이브러리",
            tabBarIcon:({color})=>(  
              <Icon name="heart" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Mypade" component={MypageScreen} theme={DarkTheme}
          options={{
            tabBarLabel: "프리미엄",
            tabBarIcon:({color})=>(  
              //<Icon name="user" color={color} size={25}/>)
              <Image 
                source= {require('./assets/icons_png/Spotify_Icon_RGB_White.png')} 
                style={{ height: 20, width: 20, }} /> )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTab;