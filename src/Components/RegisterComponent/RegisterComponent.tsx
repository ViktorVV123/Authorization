import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BackBottom} from '../../Buttom/BackBottom.tsx';
import {InputComponent} from '../../Input/InputComponent.tsx';
import {InputPassword} from '../../Input/InputPassword.tsx';
import {ButtomLogin} from '../../Buttom/ButtomLogin.tsx';
import {GoogleBtn} from '../../Buttom/GoogleBtn.tsx';

export const RegisterComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <BackBottom />
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.textTop}>Let`s get</Text>
        <Text style={styles.textTop}>started</Text>
      </View>
      <View style={{marginTop: 100}}>
        <InputComponent />
        <InputPassword />
        <InputPassword />
      </View>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <ButtomLogin title={'Sing up'} />
      </View>
      <View style={styles.containerTextOr}>
        <Text style={{fontSize: 16, color: '#aba9a9'}}>or continue with</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <GoogleBtn />
      </View>
      <View
        style={[styles.containerTextOr, {flexDirection: 'row', marginTop: 50}]}>
        <Text>Already have an account!</Text>
        <Text style={{fontWeight: '900', marginLeft: 12}}>Login</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5EFF8',
    flex: 1,
  },
  textTop: {
    fontSize: 45,
    color: 'black',
    fontWeight: '700',
  },
  containerTextOr: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
