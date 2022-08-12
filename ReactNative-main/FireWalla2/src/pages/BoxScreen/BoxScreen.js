import React, {useState} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import usePost from '../../hooks/usePost';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import BoxInfo from '../../components/BoxInfo';
import BoxProps from '../../components/BoxProps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {SliderBox} from 'react-native-image-slider-box';

import styles from './BoxScreen.Style';
import BoxHeader from '../../components/BoxHeader/BoxHeader';

function ExampleScreen() {
  const {loading, error} = usePost();
  const [image, setImage] = useState({
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?tree', // Network image
      require('../../../assets/1.jpg'), // Local image
    ],
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* BOX HEADER */}

        <View style={styles.boxHeader}>
          <View style={styles.innerBoxHeader}>
            <BoxHeader text={'Flows in last 24 hours'} numberValue={32.561} />
          </View>

          <View style={styles.innerBoxHeader}>
            <BoxHeader text={'Blocked'} numberValue={20.478} />
            <Icon
              name="chart-box-outline"
              style={{marginRight: 15, fontSize: 50, color: '#cc2833'}}
            />
          </View>
        </View>

        {/* BOX MID SECTION */}

        <View style={styles.boxImage}>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginVertical: 5,
              fontSize: 15,
              marginRight: 25,
            }}>
            Last 24 Hours
          </Text>
          <SliderBox
            images={image.images}
            sliderBoxHeight={Dimensions.get('screen').height / 5}
            parentWidth={Dimensions.get('screen').width / 1.2}
            dotColor="#a03038"
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{alignSelf: 'center', margin: 10}}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 15,
              marginHorizontal: 5,
              marginBottom: 30,
            }}
          />
        </View>

        {/* BOX INFO */}

        <View style={styles.boxInfo}>
          <BoxInfo infoValue={30} infoText="Devices" iconName="devices" />
          <BoxInfo infoValue={30} infoText="Devices" iconName="bell" />
          <BoxInfo infoValue={30} infoText="Devices" iconName="security" />
        </View>

        {/* BOX PROPS */}

        <View style={styles.boxProps}>
          <View style={styles.innerBoxProps}>
            <BoxProps iconName="security" propsName="Network" />
            <BoxProps iconName="routes" propsName="Routes" />
            <BoxProps iconName="priority-high" propsName="Smart Queue" />
          </View>
          <View style={styles.innerBoxProps}>
            <BoxProps iconName="chart-box-outline" propsName="Data Usage" />
            <BoxProps iconName="vpn" propsName="Vpn Server" />
            <BoxProps iconName="block-helper" propsName="Ad Block" />
          </View>
          <View style={styles.innerBoxProps}>
            <BoxProps iconName="home" propsName="Network" />
            <BoxProps iconName="serial-port" propsName="Open Ports" />
            <BoxProps iconName="transmission-tower" propsName="Monitoring" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ExampleScreen;
