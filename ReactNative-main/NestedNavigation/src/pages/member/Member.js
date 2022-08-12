import React from 'react';
import {View, Text, Button} from 'react-native';
function Member({navigation}) {
  return (
    <View>
      <Text>Hello Im Member</Text>
      <Button
        title="Detailes"
        onPress={() => navigation.navigate('MemberDetailScreen')}
      />
    </View>
  );
}

export default Member;
