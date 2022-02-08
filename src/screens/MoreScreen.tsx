import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MoreScreen: React.FC = () => {



  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={{ fontSize: 30 }}>Welcome to More!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MoreScreen;
