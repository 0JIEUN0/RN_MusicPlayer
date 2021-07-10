import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

function Search ( { navigation }) {
    const { colors } = useTheme();
    const [query, setQuery] = useState("")
    const [isLoding, setIsLoding] = useState(false)
  
    const searchQuery = async() => {
      console.log(query)
      // api request
      
    }

    return (
        <View>
            <View style={styles.inputBox}>
                <Icon
                    name="arrow-left"
                    style={{fontSize: 20, color: 'white', paddingLeft: 10}}
                    onPress={() => navigation.goBack()}/>
                <TextInput
                    type="text"
                    placeholder="검색"
                    placeholderTextColor='#AAAAAA'
                    value={query} 
                    style = {{fontSize: 18, color: colors.text, paddingLeft: 20, }}
                    onChangeText={(e)=> {setQuery(e.value)}} 
                    onSubmitEditing = {() => searchQuery()}>
                </TextInput>
                <Icon
                    name="camera"
                    style={{fontSize: 20, color: 'white', paddingLeft: 10, position: 'absolute', right: 20 }}/>
            </View>

            <View>
                <Text style={{...styles.mainText, color: colors.text, }}>좋아하는 콘텐츠 재생하기</Text>
                <Text style={{...styles.subText, color: '#AAAAAA',}}>아티스트, 곡, 플레이리스트 등을 검색하세요.</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    inputBox: {
      position: 'relative',
      backgroundColor: '#555555',
      top: 1,
      width: '100%',
      marginTop: 10,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    mainText: {fontSize: 20, position: 'relative', textAlign: 'center', marginTop: 200 },
    subText: {fontSize: 15, position: 'relative', textAlign: 'center', marginTop: 10 },
  });
  
export default Search
