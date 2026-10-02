import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WEVO TOK</Text>
      <Text style={styles.text}>التطبيق يعمل بنجاح ✅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 20,
  },
  text: {
    color: '#aeb9cf',
    fontSize: 20,
  },
});
