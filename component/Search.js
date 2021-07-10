import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { searchArtists } from '../spotify/Spotify'

function Search ( { navigation }) {
    const { colors } = useTheme();
    const [query, setQuery] = useState("")
    const [isLoding, setIsLoding] = useState(0)
    const [errmsg, setErrMsg] = useState("")
    const [result, setResult] = useState({})

    const searchQuery = async() => {
        setIsLoding(1);
        setErrMsg("");
        console.log("q=", query)

        // api request
        searchArtists(query)
        .then(response => {
            if(response != undefined) {
                // handle success
                setResult(response['artists']['items'])
            } else {
                // handle fail
                setErrMsg("검색 결과가 없습니다.");
            }
        })
        .then(() => {
            console.log('result', result)
            setIsLoding(2)
        })
    }
    
    const showResult = () => {
        switch(isLoding) {
            case 0: // show default view
                return <View>
                        <Text style={{...styles.mainText, color: colors.text, }}>좋아하는 콘텐츠 재생하기</Text>
                        <Text style={{...styles.subText, color: '#AAAAAA',}}>아티스트, 곡, 플레이리스트 등을 검색하세요.</Text>
                    </View>
            case 1: // show loading message
                return <Text style={{...styles.mainText, color: colors.text, }}>검색 중...</Text>
            case 2:
                return errmsg ? <Text style={{...styles.mainText, color: colors.text, }}>검색 결과가 없습니다.</Text>
                : <View>
                    <Image 
                        source={{ uri: result[0].images[0].url}}
                        style={ styles.image } />
                    <Text style={{...styles.mainText, color: colors.text, }}>{result[0].id}</Text>
                </View>
        }
        return <Text style={{...styles.mainText, color: colors.text, }}>no</Text>
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
                    onChangeText={(text)=> {setQuery(text)}} 
                    onSubmitEditing = {() => searchQuery()}>
                </TextInput>
                <Icon
                    name="camera"
                    style={{fontSize: 20, color: 'white', paddingLeft: 10, position: 'absolute', right: 20 }}/>
            </View>
            {
                showResult()
            }
            
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
    image: {
        height: 80, 
        width: 80, 
        resizeMode: 'contain', 
        position: 'relative',
        alignSelf: 'center',
    }
  });
  
export default Search
