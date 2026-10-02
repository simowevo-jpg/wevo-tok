import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

I18nManager.forceRTL(true);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoIcon}>W</Text>
        </View>

        <Text style={styles.logo}>WEVO TOK</Text>

        <Text style={styles.welcome}>أهلاً وسهلاً 👋</Text>

        <Text style={styles.description}>
          عالم المحادثات الصوتية
          {'\n'}
          تعرّف على أشخاص جدد وانضم إلى الغرف
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryText}>تسجيل الدخول</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>إنشاء حساب جديد</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>WEVO TOK • الإصدار 1.0.0</Text>
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
    paddingHorizontal: 28,
  },

  logoCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#2463ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  logoIcon: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '900',
  },

  logo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 32,
  },

  welcome: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: '800',
    marginBottom: 12,
    textAlign: 'center',
  },

  description: {
    color: '#aeb9cf',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
    marginBottom: 38,
  },

  buttons: {
    width: '100%',
    gap: 14,
  },

  primaryButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor: '#2463ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },

  secondaryButton: {
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#34425e',
    backgroundColor: '#111a2d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },

  version: {
    position: 'absolute',
    bottom: 22,
    color: '#66738d',
    fontSize: 12,
  },
});
