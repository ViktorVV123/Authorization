import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {SearchIcon} from '../../assets/icons/searchIcon.tsx';

export const SearchProduct = () => {
  return (
    <View style={styles.containerInput}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 5}}>
          <SearchIcon />
        </View>
        <TextInput placeholder={'Искать на сайте...'} style={{padding: 10}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    position: 'absolute',
    top: '12%',
    left: '12%',
  },
});
