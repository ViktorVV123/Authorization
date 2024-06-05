import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {ArrowBack} from '../assets/icons/ArrowBack.tsx';
import {useNavigation} from '@react-navigation/native';

export const BackBottom = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backBtn}
      onPress={() => navigation.goBack()}>
      <View>
        <ArrowBack />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    width: 40,
    height: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
