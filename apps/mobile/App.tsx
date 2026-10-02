import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const rooms = [
  { name: 'Startup Circle', topic: 'AI ideas', users: '24 live' },
  { name: 'Creators Club', topic: 'Audience growth', users: '18 live' },
  { name: 'Night Talk', topic: 'Relaxed chat', users: '31 live' },
];

const quickActions = ['Mic', 'Video', 'Share', 'Invite'];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.eyebrow}>COMMUNITY</Text>
            <Text style={styles.title}>WevoTok</Text>
          </View>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Create room</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bannerCard}>
          <Text style={styles.bannerLabel}>NOW LIVE</Text>
          <Text style={styles.bannerTitle}>Startup Circle</Text>
          <Text style={styles.bannerText}>Founder chat • Product building • Community growth</Text>
        </View>

        <View style={styles.actionRow}>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={action}
              style={[
                styles.actionButton,
                index === 0 && styles.actionButtonActive,
              ]}
            >
              <Text style={styles.actionButtonText}>{action}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular rooms</Text>
          <Text style={styles.sectionLink}>See all</Text>
        </View>

        {rooms.map((room) => (
          <View key={room.name} style={styles.roomCard}>
            <View>
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomTopic}>{room.topic}</Text>
            </View>
            <Text style={styles.roomUsers}>{room.users}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  eyebrow: {
    color: '#9bb0d4',
    fontSize: 11,
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: '#7c3aed',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  bannerCard: {
    backgroundColor: '#1a1f36',
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginBottom: 20,
  },
  bannerLabel: {
    color: '#b6c6ee',
    fontSize: 12,
    letterSpacing: 1.3,
    marginBottom: 10,
  },
  bannerTitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 8,
  },
  bannerText: {
    color: '#d9e4ff',
    fontSize: 14,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#111827',
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  actionButtonActive: {
    backgroundColor: '#1f8f5f',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  sectionLink: {
    color: '#9bb0d4',
  },
  roomCard: {
    backgroundColor: '#101827',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 6,
  },
  roomTopic: {
    color: '#9bb0d4',
  },
  roomUsers: {
    color: '#7ef0ad',
    fontWeight: '700',
  },
});
