import React, {useRef, useState, useEffect} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

function ScanScreen() {
  const scanner = useRef();
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
  }, []);

  const onSuccess = e => {
    setResult(e);
    setScan(false);

    if (e.data.substring(0, 4) === 'http') {
      alert(e.data);
    }
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  };

  return !scan ? (
    <View style={styles.container}>
      {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => setScan(true)}>
        <Text style={styles.buttonText}>StartScan</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.cameraContainer}>
      <QRCodeScanner
        onRead={onSuccess}
        ref={scanner}
        reactivate={true}
        showMarker={true}
        markerStyle={{
          flex: 1,
          width: 150,
          height: 150,
          overflow: 'hidden',
          alignSelf: 'center',
        }}
        cameraStyle={styles.camera}
        bottomContent={
          <>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => scanner.current.reactivate()}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => setScan(false)}>
              <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cameraContainer: {
    borderWidth: 1,
    padding: 50,
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: 250,
    height: 250,
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 50,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
