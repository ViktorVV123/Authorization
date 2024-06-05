import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {StartIconMan} from '../../assets/icons/StartIconMan.tsx';
import {HomeIcon} from '../../assets/icons/HomeIcon.tsx';

export const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <HomeIcon />
        <Text style={styles.textLogo}>LOGO</Text>
      </View>
      <View>
        <StartIconMan />
      </View>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textTitle}>Lorem ipsum dolor.</Text>
        </View>
        <View>
          <Text style={styles.textMini}>
            Point unknown wandered company graceful moment seen miles arrived
            took admiration pulled message first country strictly dearest.{' '}
          </Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {marginLeft: 30}]}
          onPress={() => {}}>
          <Text style={styles.btnText}>Reg</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogo: {
    verticalAlign: 'middle',
    fontSize: 30,
    fontWeight: '800',
    marginLeft: 10,
  },
  textTitle: {
    fontWeight: '800',
    fontSize: 50,
  },
  textMini: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 16,
    padding: 15,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  btn: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
