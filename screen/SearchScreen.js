import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import MusicGenreView from '../component/MusicGenreView';
import Search from '../component/Search';

const Stack = createStackNavigator();

function SearchScreen() {
  return (
    <Stack.Navigator initialRouteName="SearchTab">
      <Stack.Screen 
        name="SearchTab" 
        component={ SearchTab }
        options={{
          title: '검색',
        }} />
      <Stack.Screen name="Search" component={ Search } options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function SearchTab( { navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputBox}
        onPress={() => navigation.navigate('Search')}>
        <Icon
          name="search"
          style={{fontSize: 25, color: 'black', paddingLeft: 10}}/>
        <Text style = {{fontSize: 18, color: colors.background, marginLeft: 15 }}>아티스트, 곡 또는 앨범</Text>
      </TouchableOpacity>
      <Text style = {{fontSize: 18, color: colors.text, margin: 20}}>모두 찾아보기</Text>
      <MusicGenreView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  inputBox: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 1,
    width: '95%',
    marginHorizontal: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default SearchScreen;