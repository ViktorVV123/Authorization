import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';

export const PersonalAcc = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     {/* <Video
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // URL видео или локальный путь
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat={true}
        muted={true}
        playInBackground={false}
        playWhenInactive={false}
      />*/}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  backgroundVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
