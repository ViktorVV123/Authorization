import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SearchProduct} from './SearchProduct.tsx';
import {AnimatedCard} from './AnimatedCard.tsx';

export const MainComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/fon/fon.jpg')}
          style={styles.image}
        />
        <View style={styles.containerInput}>
          <SearchProduct />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 5,
        }}>
        <AnimatedCard />
      </View>
      <View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EFF8',
  },
  image: {
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  containerInput: {
    position: 'absolute',
    top: '12%',
    left: '12%',
  },
});
