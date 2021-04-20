import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

export function Button() {
  return(
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7}
    >
    <Text style={styles.buttonText}>
      Avançar
    </Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 35,
    height: 56,
    paddingHorizontal: 10
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
});