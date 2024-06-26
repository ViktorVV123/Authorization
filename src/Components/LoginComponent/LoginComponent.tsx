import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {InputComponent} from '../../Input/InputComponent.tsx';
import {ButtomLogin} from '../../Buttom/ButtomLogin.tsx';
import {GoogleBtn} from '../../Buttom/GoogleBtn.tsx';
import {BackBottom} from '../../Buttom/BackBottom.tsx';
import {InputPassword} from '../../Input/InputPassword.tsx';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigateType} from '../../../App.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = StackNavigationProp<NavigateType, 'Reg', 'Main'>;

const AllPassword = [
  {username: 'admin', password: 'admin'},
  {username: 'user', password: 'user'},
];
export const LoginComponent = () => {
  const navigation = useNavigation<NavigationProp>();
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  /*const handleLogin = () => {
    const test = AllPassword.some(
      el => el.password === pass && el.username === email,
    );
    if (test) {
      navigation.navigate('Main');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };*/
  useEffect(() => {
 /* Вариант для сохранения пароля.*/
    const loadCredentials = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem('username');
        const savedPassword = await AsyncStorage.getItem('password');
        if (savedUsername && savedPassword) {
          setEmail(savedUsername);
          setPass(savedPassword);
        }
      } catch (error) {
        console.error('Failed to load credentials', error);
      }
    };

    loadCredentials();
  }, []);

  const handleLogin = async () => {
    const isValid = AllPassword.some(
      cred => cred.username === email && cred.password === pass,
    );

    if (isValid) {
      try {
        await AsyncStorage.setItem('username', email);
        await AsyncStorage.setItem('password', pass);
        navigation.navigate('Main');
      } catch (error) {
        console.error('Failed to save credentials', error);
      }
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <BackBottom />
      </View>
      <View>
        <Text style={styles.textTop}>Hey,</Text>
        <Text style={styles.textTop}>Welcome</Text>
        <Text style={styles.textTop}>Back</Text>
      </View>
      <View style={styles.containerInput}>
        <InputComponent email={email} setEmail={setEmail} />
        <InputPassword pass={pass} setPass={setPass} />
      </View>
      <View style={styles.containerInput}>
        <ButtomLogin title={'Login'} handleLogin={handleLogin} />
      </View>
      <View style={styles.containerTextOr}>
        <Text style={{fontSize: 16, color: '#aba9a9'}}>or continue with</Text>
      </View>
      <View style={styles.containerTextOr}>
        <GoogleBtn />
      </View>
      <View
        style={[styles.containerTextOr, {flexDirection: 'row', marginTop: 40}]}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
          <Text style={{fontWeight: '900', marginLeft: 12}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E5EFF8',
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  textTop: {
    fontSize: 45,
    color: 'black',
    fontWeight: '700',
  },
  containerTextOr: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
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
