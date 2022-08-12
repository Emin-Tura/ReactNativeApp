import React from 'react';
import {View, Text, Button} from 'react-native';

function Second(props) {
  console.log(props);

  const {name} = props.route.params;
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View>
      <Text>Hello Second</Text>
      <Text>{name}</Text>
      <Button title="Go to Back" onPress={goBack} />
    </View>
  );
}

export default Second;
