import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

function WevoTest() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0b1020',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: '#ffffff',
          fontSize: 32,
          fontWeight: 'bold',
        }}
      >
        WEVO TOK
      </Text>

      <Text
        style={{
          color: '#ffffff',
          fontSize: 20,
          marginTop: 20,
        }}
      >
        التطبيق يعمل ✅
      </Text>
    </View>
  );
}

AppRegistry.registerComponent('main', () => WevoTest);
