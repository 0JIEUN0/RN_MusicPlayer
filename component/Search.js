import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, StyleSheet, TextInput, Image, FlatList, SafeAreaView } from 'react-native';
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
            console.log('result', result.length)
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
                :
                    <SafeAreaView>
                        <FlatList
                            data={result}
                            renderItem={({item}) =>
                                <Artist item={item} />}
                            key={result.length}
                            style={styles.container}>
                        </FlatList>
                    </SafeAreaView>
                
        }
        return <Text style={{...styles.mainText, color: colors.text, }}>Error</Text>
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
                    style = {{fontSize: 18, color: colors.text, paddingLeft: 20, flex:1 }}
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

function Artist (props) {
    const { colors } = useTheme();
    const imgUrl = (props.item.images[0] == undefined) ? "" : props.item.images[0].url
    console.log(imgUrl)
    return (
        <View style={styles.row}>
            <Image
                source={{ uri: imgUrl }}
                style={ styles.image } />
            <Text style={{ fontSize: 15, color: colors.text, marginLeft: 20}}>{props.item.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      marginTop: 100,
      marginBottom: 20,
    },
    inputBox: {
      position: 'absolute',
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
        marginLeft: 20,
        borderRadius: 80,
        overflow: "hidden",
    },
    row: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
  });
  
export default Search
