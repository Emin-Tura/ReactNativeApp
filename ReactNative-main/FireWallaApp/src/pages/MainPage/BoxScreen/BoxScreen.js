import React, {useState} from 'react';
import {RefreshControl, Dimensions, ScrollView, Text, View} from 'react-native';

import BoxHeader from '../../../components/BoxComponents/BoxHeader';
import BoxInfo from '../../../components/BoxComponents/BoxInfo';
import BoxProps from '../../../components/BoxComponents/BoxProps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {SliderBox} from 'react-native-image-slider-box';
import {Col, Row, Grid} from 'react-native-easy-grid';

import styles from './BoxScreen.Style';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function ExampleScreen() {
  const [image, setImage] = useState({
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?tree', // Network image
      require('../../../../assets/1.jpg'), // Local image
    ],
  });

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
        <Grid>
          <Col>
            <Row>
              <BoxProps iconName="chart-box-outline" propsName="Data Usage" />
            </Row>
            <Row>
              <BoxProps iconName="home" propsName="Family" />
            </Row>
            <Row>
              <BoxProps iconName="incognito" propsName="Vpn Cilent" />
            </Row>
            <Row>
              <BoxProps iconName="plus-circle-outline" propsName="More" />
            </Row>
          </Col>
          <Col>
            <Row>
              <BoxProps iconName="vpn" propsName="Vpn Server" />
            </Row>
            <Row>
              <BoxProps iconName="serial-port" propsName="Open Ports" />
            </Row>
            <Row>
              <BoxProps iconName="lock" propsName="DNS over HTTPS" />
            </Row>
            <Row>
              <Text>
                <BoxProps />
              </Text>
            </Row>
          </Col>
          <Col>
            <Row>
              <BoxProps iconName="block-helper" propsName="Ad Block" />
            </Row>
            <Row>
              <BoxProps iconName="transmission-tower" propsName="Monitoring" />
            </Row>
            <Row>
              <BoxProps iconName="web-plus" propsName="FireWalla Web" />
            </Row>
            <Row>
              <BoxProps />
            </Row>
          </Col>
        </Grid>
      </View>
    </ScrollView>
  );
}

export default ExampleScreen;
