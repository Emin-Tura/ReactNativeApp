import React from 'react';
import LottieView from 'lottie-react-native';
function CircleGraph() {
  return (
    <LottieView
      source={require('../../../assets/circleGraph.json')}
      autoPlay
      style={{justifyContent: 'flex-end'}}
    />
  );
}

export default CircleGraph;
