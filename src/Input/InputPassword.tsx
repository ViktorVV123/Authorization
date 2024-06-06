import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {PassIcon} from '../assets/icons/PassIcon.tsx';
import {SeePass} from '../assets/icons/SeePass.tsx';

export const InputPassword = ({
  pass,
  setPass,
}: {
  pass: string;
  setPass: any;
}) => {
  const [passSee, setPassSee] = useState(true);

  const oChangeInputPas = (password: string) => {
    setPass(password);
  };
  return (
    <View>
      <View style={[styles.inputStyle, {marginTop: 25}]}>
        <View style={{marginRight: 10}}>
          <PassIcon />
        </View>
        <TextInput
          style={{width: 260}}
          value={pass}
          onChange={() => {}}
          placeholder={'Password'}
          placeholderTextColor={'#9b9b9b'}
          secureTextEntry={passSee}
          onChangeText={oChangeInputPas}
        />
        {pass === '' ? (
          ''
        ) : (
          <TouchableWithoutFeedback
            onPressIn={() => setPassSee(false)}
            onPressOut={() => setPassSee(true)}>
            <View style={{marginRight: 200}}>
              <SeePass />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#7a7878',
    width: 350,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
});
