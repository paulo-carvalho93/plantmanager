import React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userAvatar from '../assets/avatar.jpg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Paulo</Text>
      </View>

      <Image source={userAvatar} style={styles.avatarImg}/>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  avatarImg: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
});

