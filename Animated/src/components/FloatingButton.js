import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const FloatingButton = ({style}) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const toggleValue = () => {
    const toValue = Animated.open ? 0 : 1;
    Animated.spring(progressAnimation, {
      toValue,
      friction: 5,
      useNativeDriver: false,
    }).start();
    Animated.open = !Animated.open;
  };

  const rotation = {
    transform: [
      {
        rotate: progressAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };
  const locationStyle = {
    transform: [
      {
        translateY: progressAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };
  const thumbsStyle = {
    transform: [
      {
        translateY: progressAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -130],
        }),
      },
    ],
  };
  const heartStyle = {
    transform: [
      {
        translateY: progressAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -190],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
          <Entypo name="heart" size={20} color={'#F02A4B'} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, thumbsStyle]}>
          <Entypo name="thumbs-up" size={20} color={'#F02A4B'} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => console.log('Hi')}>
        <Animated.View style={[styles.button, styles.secondary, locationStyle]}>
          <Entypo name="location-pin" size={20} color={'#F02A4B'} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleValue}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Icon name="plus" size={24} color={'#FFF'} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  secondary: {
    width: 48,
    height: 48,
    borderradius: 48 / 2,
    backgroundColor: '#FFF',
  },
});
