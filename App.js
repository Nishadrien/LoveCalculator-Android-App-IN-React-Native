import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import Notification from 'expo-notifications';
import LoveCalculator from './src';
export default function App() {
  return (
    <View style={styles.container}>
      <LoveCalculator/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
