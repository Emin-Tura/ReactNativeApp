import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, sizes, spacing} from '../constants/theme';
import Icon from '../components/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TripDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {trip} = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.backButton, {marginTop: insets.top}]}>
        <Icon
          icon="ArrowLeft"
          size={32}
          style={styles.backIcon}
          onPress={navigation.goBack}
        />
      </View>
      <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
        <Image
          source={trip.image}
          style={[StyleSheet.absoluteFillObject, styles.image]}
        />
      </View>
    </View>
  );
};

export default TripDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    overflow: 'hidden',
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    tintColor: colors.white,
  },
});
