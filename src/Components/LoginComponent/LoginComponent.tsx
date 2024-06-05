import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {InputComponent} from './InputComponent.tsx';
import {ButtonComponent} from './ButtonComponent.tsx';
import { GoogleBtn } from "./GoogleBtn.tsx";

export const LoginComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Back button</Text>
      </View>
      <View>
        <Text style={styles.textTop}>Hey,</Text>
        <Text style={styles.textTop}>Welcome</Text>
        <Text style={styles.textTop}>Back</Text>
      </View>
      <View style={styles.containerInput}>
        <InputComponent />
      </View>
      <View style={styles.containerInput}>
        <ButtonComponent />
      </View>
      <View style={styles.containerTextOr}>
        <Text style={{fontSize: 16, color: '#aba9a9'}}>or continue with</Text>
      </View>
      <View style={styles.containerTextOr}>
        <GoogleBtn />
      </View>
      <View style={[styles.containerTextOr, {flexDirection: 'row', marginTop: 40}]}>
        <Text>
          Don’t have an account?
        </Text>
        <Text style={{fontWeight: '900', marginLeft: 12}}>Sign up</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  textTop: {
    fontSize: 50,
    color: 'black',
    fontWeight: '700',
  },
  containerTextOr: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
