import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FirstComponent = () => {
  return (
    <View style={styles.container}>
      <Text>123</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E5EFF8',
  },
});
