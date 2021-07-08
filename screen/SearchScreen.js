import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import MusicGenreView from '../component/MusicGenreView';

const Stack = createStackNavigator();

function SearchScreen() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen 
        name="Search" 
        component={ Search }
        options={{
          title: '검색',
        }} />
    </Stack.Navigator>
  );
}

function Search( { navigation }) {
  const { colors } = useTheme();
  const [query, setQuery] = useState("")

  const searchQuery = async() => {
    console.log(query)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Icon
          name="search"
          style={{fontSize: 25, color: 'black', paddingLeft: 10}}/>
        <TextInput
          type="text"
          placeholder="아티스트, 곡 또는 앨범"
          value={query} 
          style = {{fontSize: 18, color: colors.background, paddingLeft: 10}}
          onChangeText={(e)=> {setQuery(e.value)}} 
          onSubmitEditing = {() => searchQuery()}>
        </TextInput>
      </View>

      <MusicGenreView />      

      {/*
      {
        isLoading ?
          books.map(book => 
          <Book key={bookId.current++} 
            bookInfo={book} select={setBookImgsCallBack}>
          </Book>)
          : message
      } */}
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
    width: '100%',
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchScreen;