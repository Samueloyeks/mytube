import React from 'react';
import { Platform, StatusBar, StyleSheet, View,YellowBox } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

YellowBox.ignoreWarnings(['Require cycle:']);

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
