import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

function NoticeScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notice Screen</Text>
    </View>
  );
}
export default NoticeScreen;