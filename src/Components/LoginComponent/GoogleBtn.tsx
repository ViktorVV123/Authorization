import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GoogleIcon} from '../../assets/icons/GoogleIcon.tsx';

export const GoogleBtn = () => {
  return (
    <View>
      <TouchableOpacity style={styles.containerBtn}>
        <GoogleIcon />
        <Text style={styles.textBtn}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    borderRadius: 35,
    alignContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 295,
  },
  textBtn: {
    fontSize: 20,
    color: 'black',
    padding: 15,
    textAlign: 'center',
  },
});
