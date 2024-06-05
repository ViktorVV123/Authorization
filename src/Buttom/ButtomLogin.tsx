import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const ButtomLogin = ({title}: {title: any}) => {
  return (
    <View>
      <TouchableOpacity style={styles.containerBtn}>
        <Text style={styles.textBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerBtn: {
    borderRadius: 30,
    borderWidth: 1,
    width: 295,
    backgroundColor: '#4b4b4b',
  },
  textBtn: {
    fontSize: 20,
    color: 'white',
    padding: 15,
    textAlign: 'center',
  },
});
