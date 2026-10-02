import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>WEVO TOK</Text>

        <Text style={styles.title}>أهلاً وسهلاً 👋</Text>

        <Text style={styles.subtitle}>
          عالم المحادثات الصوتية
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            تسجيل الدخول
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>
            إنشاء حساب جديد
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071020',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    color: '#2463ff',
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 40,
  },

  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 12,
  },

  subtitle: {
    color: '#aeb9cf',
    fontSize: 18,
    marginBottom: 40,
  },

  button: {
    width: '100%',
    height: 56,
    borderRadius: 18,
    backgroundColor: '#2463ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },

  button2: {
    width: '100%',
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#34425e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button2Text: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
});
