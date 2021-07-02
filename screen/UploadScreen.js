import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

function UploadScreen() {
  const { colors } = useTheme();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Upload Screen</Text>
      </View>
    );
}
export default UploadScreen;