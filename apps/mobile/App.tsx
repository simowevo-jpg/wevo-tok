import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.logo}>WEVO TOK</Text>

        <Text style={styles.title}>أهلاً بك 👋</Text>

        <Text style={styles.subtitle}>
          تطبيق المحادثات الصوتية
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>التطبيق يعمل بنجاح ✅</Text>
          <Text style={styles.cardText}>
            WEVO TOK جاهز للعمل
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2f6bff',
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,
    color: '#aab4cc',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#151d33',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    color: '#aab4cc',
  },
});
