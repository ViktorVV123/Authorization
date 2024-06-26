import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {EmaiIcon} from '../assets/icons/EmaiIcon.tsx';
import {DeleteText} from '../assets/icons/DeleteText.tsx';

export const InputComponent = ({
  email,
  setEmail,
}: {
  email: string;
  setEmail: any;
}) => {
  const deleteEmailAll = () => {
    setEmail('');
  };
  const oChangeInput = (inputText: string) => {
    setEmail(inputText);
  };
  return (
    <View>
      <View style={styles.inputStyle}>
        <View style={{marginRight: 10}}>
          <EmaiIcon />
        </View>
        <TextInput
          style={{width: 260}}
          value={email}
          onChangeText={oChangeInput}
          placeholder={'E-mail'}
          placeholderTextColor={'#9b9b9b'}
        />
        {email.length > 5 ? (
          <TouchableOpacity onPress={deleteEmailAll}>
            <DeleteText />
          </TouchableOpacity>
        ) : (
          ''
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
