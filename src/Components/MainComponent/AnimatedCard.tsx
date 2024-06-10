import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';
import {RocketIcon} from '../../assets/icons/RocketIcon.tsx';
import {EarthIcon} from '../../assets/icons/EarthIcon.tsx';

const duration = 4500;
const easing = Easing.bezier(0.45, -0.5, 0.25, 1);

export const AnimatedCard = () => {
  const linear = useSharedValue(20);
  const sv = useSharedValue(0);
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{translateX: linear.value}],
  }));

  React.useEffect(() => {
    linear.value = withRepeat(
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
    sv.value = withRepeat(withTiming(0.2, {duration, easing}), -1);
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sv.value * 360}deg`}],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle]}>
        <View
          style={{
            backgroundColor: '#3558e8',
            borderRadius: 90,
            borderColor: '#111111',
            borderWidth: 2,
          }}>
          <EarthIcon />
        </View>
      </Animated.View>
      <Animated.View style={[animatedChanged]}>
        <View>
          <RocketIcon />
        </View>
      </Animated.View>
      <View style={{position: 'absolute', left: '12%'}}>
        <Text style={{fontSize: 50, fontWeight: '900'}}>LO</Text>
      </View>
      <View style={{position: 'absolute', left: '70%'}}>
        <Text
          style={{fontSize: 50, fontWeight: '900', textTransform: 'uppercase'}}>
          GO
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#74bdee',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
