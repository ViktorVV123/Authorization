import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const PersonalAcc = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Acc</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Log Out</Text>
      </TouchableOpacity>
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
