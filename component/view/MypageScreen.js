import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

function MypageScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyPage Screen</Text>
    </View>
  );
}

export default MypageScreen;