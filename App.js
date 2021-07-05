import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { getAccessTokenByClientCredentialsFlow } from './spotify/Spotify'

import HomeScreen from './screen/HomeScreen'
import SearchScreen from './screen/SearchScreen'
import UploadScreen from './screen/UploadScreen'
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
    getAccessTokenByClientCredentialsFlow();
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="home" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Search" component={SearchScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="search" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Upload" component={UploadScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="plus-square" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Notice" component={NoticeScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="heart" color={color} size={25}/>)
          }} />
        <Tab.Screen name="Mypade" component={MypageScreen} theme={DarkTheme}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({color})=>(  
              <Icon name="user" color={color} size={25}/>)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTab;