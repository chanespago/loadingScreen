import React from 'react';
import LogoImage from '../assets/img/icon.png';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  // const DEFAULT_IMAGE = Image.resolveAssetSource(LogoImage).uri;
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/icon.png')} />
      <Text style={styles.textLogo}>GiftsYern</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    color: '#2e2e2e',
  },
  textLogo: {
    fontWeight: '500',
    fontFamily: 'Segoe UI',
    fontSize: 24,
    color: '#2e2e2e',
  }
});

export default SplashScreen
